/**
 * Workout page - picks a month, a week and a day, and shows that day's routine
 * with every load resolved against the user's 1RM.
 * @module workout
 */

import {
  getAvailableMonths,
  getWorkoutByWeekAndDay,
  getWeeks,
  loadRoutine,
} from './routines/index';
import { MonthRoutine } from './routines/types';
import { setupCollapsibleSections } from './modules/collapsible';
import { formatMonthDisplay } from './workout/format';
import { renderGymTableRows, renderWorkoutDay } from './workout/render';
import {
  isAuthenticated,
  loadExerciseSelections,
  loadLastSelectedDay,
  loadLastSelectedMonth,
  removeExerciseSelection,
  saveAuthentication,
  saveExerciseSelection,
  saveLastSelectedDay,
  saveLastSelectedMonth,
  SelectedDay,
} from './workout/storage';

// Not a security boundary: the routines are public and this only keeps the page
// from opening on a shared screen. See README.
const CORRECT_PASSWORD_HASH = '80895744385d20a00a4f66ec0d590e06fa2969fd4a4381157aaea1038002a347';

/** What the page is currently showing */
interface PageState {
  monthId: string;
  week: number;
  day: number;
  routine: MonthRoutine | null;
}

const state: PageState = { monthId: '', week: 1, day: 1, routine: null };

/**
 * Hashes a password with SHA-256
 * @param password - The plain text password
 * @returns The lowercase hex digest
 */
const hashPassword = async (password: string): Promise<string> => {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest('SHA-256', data);

  return Array.from(new Uint8Array(digest))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
};

/**
 * Swaps the password prompt for the workout content
 */
const hideLoginScreen = (): void => {
  const loginScreen = document.getElementById('login-screen');
  const workoutContent = document.getElementById('workout-content');
  if (!loginScreen || !workoutContent) {
    console.error('Login screen or workout content not found');
    return;
  }

  loginScreen.style.display = 'none';
  workoutContent.style.display = 'block';
};

/**
 * Shows the wrong-password message
 */
const showLoginError = (): void => {
  const loginError = document.getElementById('login-error');
  if (loginError) loginError.style.display = 'block';
};

/**
 * Fills the reference table that sits below the routine
 */
const renderReferenceTable = (): void => {
  const tbody = document.getElementById('workout-data');
  if (!tbody) {
    console.error('Element #workout-data not found');
    return;
  }

  tbody.innerHTML = renderGymTableRows();
};

/**
 * Redraws the current day, resolving each exercise against the stored 1RM picks
 */
const renderRoutine = (): void => {
  const routineContent = document.getElementById('routine-content');
  if (!routineContent) {
    console.error('Element #routine-content not found');
    return;
  }

  if (!state.routine) {
    routineContent.innerHTML = '<p>No se ha seleccionado ninguna rutina.</p>';
    return;
  }

  const workout = getWorkoutByWeekAndDay(state.routine, state.week, state.day);
  if (!workout) {
    routineContent.innerHTML = '<p>No se encontró entrenamiento para este día.</p>';
    return;
  }

  routineContent.innerHTML = renderWorkoutDay(workout, state.routine.warmup, {
    selections: loadExerciseSelections(state.monthId, getAvailableMonths()),
    defaults: state.routine.defaults,
  });

  // innerHTML is synchronous, so the new headers exist by now and the wiring
  // does not need to be deferred to a later tick.
  setupCollapsibleSections();
};

/**
 * Marks the active week header and day button
 */
const highlightSelection = (): void => {
  document.querySelectorAll<HTMLElement>('.week-header').forEach(header => {
    header.classList.toggle('active', header.dataset.week === `${state.week}`);
  });

  document.querySelectorAll<HTMLElement>('.week-days').forEach(weekDays => {
    weekDays.classList.toggle('active', weekDays.dataset.week === `${state.week}`);
  });

  document.querySelectorAll<HTMLElement>('.day-link').forEach(link => {
    const isActive = link.dataset.week === `${state.week}` && link.dataset.day === `${state.day}`;
    link.classList.toggle('active', isActive);
  });
};

/**
 * Rebuilds the week/day selector for the routine in state
 */
const renderWeekSelector = (): void => {
  if (!state.routine) return;

  const weeksRow = document.getElementById('weeks-row');
  const daysRow = document.getElementById('days-row');
  const weekHeaderTemplate = document.getElementById('week-header-template');
  const weekDaysTemplate = document.getElementById('week-days-template');

  if (
    !weeksRow ||
    !daysRow ||
    !(weekHeaderTemplate instanceof HTMLTemplateElement) ||
    !(weekDaysTemplate instanceof HTMLTemplateElement)
  ) {
    console.error('Week selector containers or templates not found');
    return;
  }

  weeksRow.querySelectorAll('.week-header').forEach(header => header.remove());
  daysRow.querySelectorAll('.week-days').forEach(days => days.remove());

  for (const week of getWeeks(state.routine)) {
    const headerClone = weekHeaderTemplate.content.cloneNode(true) as DocumentFragment;
    const header = headerClone.querySelector<HTMLElement>('.week-header');
    const title = headerClone.querySelector<HTMLElement>('.week-title');
    if (!header || !title) {
      console.error('Week header template is missing .week-header or .week-title');
      return;
    }

    header.dataset.week = `${week}`;
    title.textContent = `SEMANA ${week}`;
    weeksRow.appendChild(headerClone);

    const daysClone = weekDaysTemplate.content.cloneNode(true) as DocumentFragment;
    const weekDays = daysClone.querySelector<HTMLElement>('.week-days');
    if (!weekDays) {
      console.error('Week days template is missing .week-days');
      return;
    }

    weekDays.dataset.week = `${week}`;
    // data-day already comes from the template; only the week needs filling in
    daysClone.querySelectorAll<HTMLElement>('.day-link').forEach(link => {
      link.dataset.week = `${week}`;
    });
    daysRow.appendChild(daysClone);
  }

  highlightSelection();
};

/**
 * Shows one day of the current routine and remembers it
 * @param week - The week number
 * @param day - The day number within the week
 */
const selectDay = (week: number, day: number): void => {
  state.week = week;
  state.day = day;

  highlightSelection();
  renderRoutine();
  saveLastSelectedDay({ week, day });
};

/**
 * Loads a month and shows one of its days
 * @param monthId - The month to load
 * @param preferredDay - The day to reopen on, when it exists in this routine
 */
const selectMonth = async (monthId: string, preferredDay: SelectedDay | null): Promise<void> => {
  const routine = await loadRoutine(monthId);
  if (!routine) return;

  state.monthId = monthId;
  state.routine = routine;

  const weeks = getWeeks(routine);
  const dayExists =
    preferredDay !== null &&
    routine.workoutDays.some(w => w.week === preferredDay.week && w.day === preferredDay.day);

  state.week = dayExists ? preferredDay.week : (weeks[0] ?? 1);
  state.day = dayExists ? preferredDay.day : 1;

  const monthSelect = document.getElementById('month-select');
  if (monthSelect instanceof HTMLSelectElement) monthSelect.value = monthId;

  renderWeekSelector();
  renderRoutine();
  saveLastSelectedMonth(monthId);
};

/**
 * Fills the month dropdown and reacts to changes
 */
const setupMonthSelector = (): void => {
  const monthSelect = document.getElementById('month-select');
  if (!(monthSelect instanceof HTMLSelectElement)) {
    console.error('Element #month-select not found');
    return;
  }

  monthSelect.innerHTML = getAvailableMonths()
    .map(monthId => `<option value="${monthId}">${formatMonthDisplay(monthId)}</option>`)
    .join('');

  monthSelect.addEventListener('change', event => {
    const target = event.target as HTMLSelectElement;
    void selectMonth(target.value, null);
  });
};

/**
 * Wires day clicks and 1RM changes.
 *
 * Both listen on a container that outlives the re-renders, so the handlers are
 * attached once instead of being rebound every time the markup is replaced.
 */
const setupDelegatedListeners = (): void => {
  const daysRow = document.getElementById('days-row');
  if (daysRow) {
    daysRow.addEventListener('click', event => {
      const link = (event.target as HTMLElement).closest<HTMLElement>('.day-link');
      if (!link) return;

      const week = Number(link.dataset.week);
      const day = Number(link.dataset.day);
      if (Number.isNaN(week) || Number.isNaN(day)) return;

      selectDay(week, day);
    });
  }

  const routineContent = document.getElementById('routine-content');
  if (routineContent) {
    routineContent.addEventListener('change', event => {
      const select = event.target;
      if (!(select instanceof HTMLSelectElement) || !select.classList.contains('exercise-selector'))
        return;

      const exerciseId = select.dataset.exerciseId;
      if (!exerciseId) return;

      if (select.value === '') {
        removeExerciseSelection(state.monthId, exerciseId);
      } else {
        saveExerciseSelection(state.monthId, exerciseId, Number(select.value));
      }

      renderRoutine();
    });
  }
};

/**
 * Starts the page once the password prompt is out of the way
 */
const initializeWorkoutApp = async (): Promise<void> => {
  renderReferenceTable();
  setupMonthSelector();
  setupDelegatedListeners();
  setupCollapsibleSections();

  const availableMonths = getAvailableMonths();
  const savedMonth = loadLastSelectedMonth();
  const monthToShow =
    savedMonth && availableMonths.includes(savedMonth)
      ? savedMonth
      : availableMonths[availableMonths.length - 1];

  if (!monthToShow) {
    console.error('No routines available');
    return;
  }

  await selectMonth(monthToShow, loadLastSelectedDay());
};

/**
 * Wires the password prompt
 */
const setupLoginForm = (): void => {
  const loginForm = document.getElementById('login-form');
  const passwordInput = document.getElementById('workout-password');

  if (!(loginForm instanceof HTMLFormElement) || !(passwordInput instanceof HTMLInputElement)) {
    console.error('Login form or password input not found');
    return;
  }

  loginForm.addEventListener('submit', async event => {
    event.preventDefault();

    try {
      if ((await hashPassword(passwordInput.value)) === CORRECT_PASSWORD_HASH) {
        saveAuthentication();
        hideLoginScreen();
        await initializeWorkoutApp();
        return;
      }
    } catch (error) {
      console.error('Failed to hash password:', error);
    }

    showLoginError();
    passwordInput.value = '';
    passwordInput.focus();
  });

  passwordInput.focus();
};

/**
 * Skips the prompt when this browser already cleared it, otherwise wires it up
 */
const initializeWorkoutPage = (): void => {
  if (isAuthenticated()) {
    hideLoginScreen();
    void initializeWorkoutApp();
    return;
  }

  setupLoginForm();
};

document.addEventListener('DOMContentLoaded', initializeWorkoutPage);
