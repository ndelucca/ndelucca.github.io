import { getAvailableMonths, getRoutineByMonth } from './routines/index';
import { getDefaultsForMonth } from './routines/defaults/index';
import { DayWorkout, MonthRoutine } from './routines/types';

// Hardcoded gym table data from gym_table.csv
const gymData = [
  ["27.5", "32.5", "37.5", "40", "45", "45", "50", "50"],
  ["30", "35", "40", "42.5", "47.5", "47.5", "52.5", "52.5"],
  ["32.5", "37.5", "42.5", "45", "50", "50", "55", "55"],
  ["32.5", "37.5", "45", "47.5", "52.5", "52.5", "57.5", "57.5"],
  ["35", "40", "45", "50", "52.5", "55", "60", "60"],
  ["37", "42.5", "47.5", "50", "55", "57.5", "62.5", "62.5"],
  ["37.5", "42.5", "50", "52.5", "57.5", "60", "65", "65"],
  ["37.5", "45", "52.5", "55", "60", "62.5", "67.5", "67.5"],
  ["40", "47.5", "52.5", "57.5", "62.5", "65", "70", "70"],
  ["40", "47.5", "55", "55", "60", "67.5", "72.5", "72.5"],
  ["42.5", "50", "57.5", "60", "67.5", "70", "75", "75"],
  ["45", "52.5", "60", "62.5", "70", "70", "77.5", "77.5"],
  ["45", "52.5", "60", "65", "70", "72.5", "80", "80"],
  ["47.5", "55", "62.5", "67.5", "72.5", "75", "82.5", "82.5"],
  ["47.5", "57.5", "65", "70", "75", "77.5", "85", "85"],
  ["50", "57.5", "67.5", "70", "77.5", "80", "87.5", "87.5"],
  ["50", "60", "67.5", "72.5", "80", "82.5", "90", "90"],
  ["52.5", "62.5", "70", "75", "82.5", "85", "92.5", "92.5"],
  ["52.5", "62.5", "72.5", "77.5", "85", "87.5", "95", "95"],
  ["55", "65", "75", "80", "87.5", "90", "97.5", "97.5"],
  ["55", "65", "75", "80", "87.5", "90", "97.5", "100"],
  ["57.5", "67.5", "77.5", "82.5", "90", "92.5", "100", "102.5"],
  ["60", "70", "80", "85", "92.5", "95", "102.5", "105"],
  ["60", "70", "82.5", "87.5", "95", "97.5", "105", "107.5"],
  ["62.5", "72.5", "82.5", "90", "97.5", "100", "107.5", "110"],
  ["62.5", "75", "85", "90", "100", "102.5", "110", "112.5"],
  ["65", "75", "85", "92.5", "102.5", "105", "112.5", "115"],
  ["65", "77", "90", "95", "105", "107.5", "115", "117.5"],
  ["67.5", "80", "90", "97.5", "107.5", "110", "117.5", "120"],
  ["67.5", "80", "92.5", "100", "107.5", "112.5", "120", "122.5"],
  ["70", "82.5", "95", "100", "110", "115", "122.5", "125"],
  ["72.5", "85", "97.5", "102.5", "112.5", "115", "125", "127.5"],
  ["72.5", "85", "97.5", "105", "115", "117.5", "127.5", "130"],
  ["75", "87.5", "100", "107", "117.5", "120", "130", "132.5"],
  ["75", "90", "102.5", "110", "120", "122.5", "132.5", "135"],
  ["77.5", "90", "105", "110", "122.5", "125", "135", "137.5"],
  ["77.5", "92.5", "105", "112.5", "122.5", "127.5", "137.5", "140"],
  ["82.5", "95", "107.5", "115", "125", "130", "140", "142.5"],
  ["80", "95", "110", "117.5", "127.5", "132.5", "142.5", "145"],
  ["82.5", "97.5", "112.5", "120", "130", "135", "145", "147.5"],
  ["82.5", "97.5", "112.5", "120", "132.5", "135", "147.5", "150"],
  ["85", "100", "115", "122.5", "135", "137.5", "150", "152.5"],
  ["87.5", "102.5", "117.5", "125", "135", "140", "152.5", "155"],
  ["87.5", "102.5", "120", "127.5", "140", "142.5", "155", "157.5"],
  ["90", "105", "120", "130", "140", "145", "157.5", "160"],
  ["90", "107", "122.5", "130", "142.5", "147.5", "160", "162.5"],
  ["92.5", "107", "125", "132.5", "145", "150", "162.5", "165"],
  ["92.5", "110", "127.5", "135", "147.5", "152.5", "165", "167.5"],
  ["95", "112.5", "127.5", "137.5", "150", "155", "167.5", "170"],
  ["95", "112.5", "130", "140", "152.5", "157.5", "170", "172.5"],
  ["97.5", "115", "132.5", "140", "155", "157.5", "172.5", "175"],
  ["100", "117.5", "135", "142.5", "157.5", "160", "175", "177.5"],
  ["100", "117.5", "135", "145", "157.5", "162.5", "177.5", "180"],
  ["102.5", "120", "137.5", "147.5", "160", "165", "180", "182.5"],
  ["102.5", "122.5", "140", "150", "162.5", "167.5", "182.5", "185"],
  ["105", "122.5", "142.5", "150", "165", "170", "185", "187.5"],
  ["105", "125", "142.5", "152.5", "167.5", "172.5", "187.5", "190"],
  ["107.5", "127.5", "145", "155", "170", "175", "190", "192.5"],
  ["107.5", "127.5", "147.5", "157.5", "172.5", "177.5", "192.5", "195"],
  ["110", "130", "150", "160", "175", "180", "195", "197.5"],
  ["110", "130", "150", "160", "175", "180", "195", "200"]
];

let currentMonth = '';
let currentWeek = 1;
let currentDay = 1;
let currentRoutine: MonthRoutine | null = null;

// Storage keys
const EXERCISE_SELECTIONS_KEY = 'workout_exercise_selections';
const LAST_SELECTED_DAY_KEY = 'workout_last_selected_day';
const LAST_SELECTED_MONTH_KEY = 'workout_last_selected_month';
const LOGIN_AUTH_KEY = 'workout_authenticated';

const CORRECT_PASSWORD_HASH = '80895744385d20a00a4f66ec0d590e06fa2969fd4a4381157aaea1038002a347';

document.addEventListener('DOMContentLoaded', () => {
  checkAuthenticationAndInitialize();
});

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Authentication Check and Initialize
function checkAuthenticationAndInitialize(): void {
  if (isAuthenticated()) {
    // User is already authenticated - skip login and go straight to app
    hideLoginScreen();
    initializeWorkoutApp();
  } else {
    // User is not authenticated - show login form
    setupLoginForm();
  }
}

// Login Functions
function setupLoginForm(): void {
  const loginForm = document.getElementById('login-form') as HTMLFormElement;
  const loginError = document.getElementById('login-error') as HTMLElement;
  const passwordInput = document.getElementById('workout-password') as HTMLInputElement;

  if (!loginForm || !loginError || !passwordInput) return;

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const enteredPassword = passwordInput.value;

    try {
      const hashedEnteredPassword = await hashPassword(enteredPassword);

      if (hashedEnteredPassword === CORRECT_PASSWORD_HASH) {
        // Correct password - save authentication and proceed
        saveAuthentication();
        hideLoginScreen();
        initializeWorkoutApp();
      } else {
        // Wrong password - show error
        showLoginError();
        passwordInput.value = ''; // Clear the password field
        passwordInput.focus();
      }
    } catch (error) {
      console.error('Error hashing password:', error);
      showLoginError();
      passwordInput.value = '';
      passwordInput.focus();
    }
  });

  // Focus on password input when page loads
  passwordInput.focus();
}

function showLoginError(): void {
  const loginError = document.getElementById('login-error') as HTMLElement;
  if (loginError) {
    loginError.style.display = 'block';
  }
}

function hideLoginScreen(): void {
  const loginScreen = document.getElementById('login-screen') as HTMLElement;
  const workoutContent = document.getElementById('workout-content') as HTMLElement;

  if (loginScreen && workoutContent) {
    loginScreen.style.display = 'none';
    workoutContent.style.display = 'block';
  }
}

function initializeWorkoutApp(): void {
  // Initialize the workout app after successful login
  loadWorkoutData();
  setupMonthSelector();
  setupRoutineSelector();

  // Load saved month if available, otherwise use most recent
  const savedMonth = loadLastSelectedMonth();
  const availableMonths = getAvailableMonths();
  const monthToUse = savedMonth && availableMonths.includes(savedMonth) 
    ? savedMonth 
    : availableMonths[availableMonths.length - 1]; // Most recent month

  selectMonth(monthToUse, true);

  // Load saved day if available, otherwise use defaults
  const savedDay = loadLastSelectedDay();
  if (savedDay) {
    selectDay(savedDay.week, savedDay.day);
  } else {
    selectDay(currentWeek, currentDay);
  }
}

function loadWorkoutData() {
  const tbody = document.getElementById('workout-data');
  if (!tbody) return;

  gymData.forEach((rowData, index) => {
    const row = document.createElement('tr');

    // Row number (starting from 1)
    const rowNum = document.createElement('td');
    rowNum.textContent = (index + 1).toString();
    rowNum.className = 'row-number';
    row.appendChild(rowNum);

    // Add each data cell
    rowData.forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
}

function setupMonthSelector() {
  const monthSelect = document.getElementById('month-select') as HTMLSelectElement;
  if (!monthSelect) return;

  // Populate month options
  const availableMonths = getAvailableMonths();
  monthSelect.innerHTML = '';
  
  availableMonths.forEach(monthId => {
    const option = document.createElement('option');
    option.value = monthId;
    // Format display name (e.g., "2025_09" -> "Septiembre 2025")
    option.textContent = formatMonthDisplay(monthId);
    monthSelect.appendChild(option);
  });

  // Handle month selection change
  monthSelect.addEventListener('change', (e) => {
    const target = e.target as HTMLSelectElement;
    selectMonth(target.value);
  });
}

function setupRoutineSelector() {
  // Handle day link clicks only
  const dayLinks = document.querySelectorAll('.day-link');
  dayLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const week = parseInt(target.dataset.week || '1');
      const day = parseInt(target.dataset.day || '1');
      selectDay(week, day);
    });
  });
}

function selectWeek(week: number) {
  currentWeek = week;

  // Update active week header
  document.querySelectorAll('.week-header').forEach(header => {
    const element = header as HTMLElement;
    element.classList.remove('active');
    if (element.dataset.week === week.toString()) {
      element.classList.add('active');
    }
  });

  // Load first day of the week
  selectDay(week, 1);
}

function selectDay(week: number, day: number) {
  currentWeek = week;
  currentDay = day;

  // Update active week header
  document.querySelectorAll('.week-header').forEach(header => {
    const element = header as HTMLElement;
    element.classList.remove('active');
    if (element.dataset.week === week.toString()) {
      element.classList.add('active');
    }
  });

  // Update active day link
  document.querySelectorAll('.day-link').forEach(link => {
    const element = link as HTMLElement;
    element.classList.remove('active');
    if (element.dataset.week === week.toString() && element.dataset.day === day.toString()) {
      element.classList.add('active');
    }
  });

  loadRoutineDisplay();
  saveLastSelectedDay(week, day);
}

function selectMonth(monthId: string, skipDisplayReload: boolean = false) {
  currentMonth = monthId;
  currentRoutine = getRoutineByMonth(monthId);
  
  if (!currentRoutine) {
    console.error(`No routine found for month: ${monthId}`);
    return;
  }

  // Update the select element
  const monthSelect = document.getElementById('month-select') as HTMLSelectElement;
  if (monthSelect) {
    monthSelect.value = monthId;
  }

  // Save the selected month
  saveLastSelectedMonth(monthId);
  
  // Reload the current routine display (unless skipped during initialization)
  if (!skipDisplayReload) {
    loadRoutineDisplay();
  }
}

function formatMonthDisplay(monthId: string): string {
  const [year, monthNum] = monthId.split('_');
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const monthIndex = parseInt(monthNum) - 1;
  const monthName = monthNames[monthIndex] || `Mes ${monthNum}`;
  
  return `${monthName} ${year}`;
}

function setupCollapsibleSections() {
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = (header as HTMLElement).dataset.section;
      const contentElements = document.querySelectorAll(`[data-content="${section}"]`);
      const icon = header.querySelector('.collapse-icon') as HTMLElement;

      if (contentElements.length === 0 || !icon) return;

      const firstContent = contentElements[0] as HTMLElement;
      const isCollapsed = firstContent.style.display === 'none';

      if (isCollapsed) {
        // Expand all content elements
        contentElements.forEach(element => {
          const el = element as HTMLElement;
          // Set appropriate display value based on element type
          if (el.tagName.toLowerCase() === 'tbody') {
            el.style.display = 'table-row-group';
          } else if (el.tagName.toLowerCase() === 'tr') {
            el.style.display = 'table-row';
          } else {
            el.style.display = 'block';
          }
        });
        header.classList.remove('collapsed');
        header.classList.add('expanded');
        icon.textContent = '▲';
      } else {
        // Collapse all content elements
        contentElements.forEach(element => {
          (element as HTMLElement).style.display = 'none';
        });
        header.classList.remove('expanded');
        header.classList.add('collapsed');
        icon.textContent = '▼';
      }
    });
  });
}

// This function is no longer needed since all days are pre-rendered in HTML

function loadRoutineDisplay() {
  const routineContent = document.getElementById('routine-content');
  if (!routineContent) return;

  if (!currentRoutine) {
    routineContent.innerHTML = '<p>No se ha seleccionado ninguna rutina.</p>';
    return;
  }

  const workout = getWorkoutByWeekAndDay(currentWeek, currentDay);
  if (!workout) {
    routineContent.innerHTML = '<p>No se encontró entrenamiento para este día.</p>';
    return;
  }

  // Use template function with current routine
  routineContent.innerHTML = renderWorkoutTemplate(workout, currentRoutine.warmup);

  // Setup collapsible sections and exercise selectors after DOM update
  setTimeout(() => {
    setupCollapsibleSections();
    setupExerciseSelectors();
  }, 0);
}

function getWorkoutByWeekAndDay(week: number, day: number): DayWorkout | undefined {
  if (!currentRoutine) return undefined;
  return currentRoutine.workoutDays.find(w => w.week === week && w.day === day);
}

// Exercise Selection Functions
function sanitizeExerciseName(name: string): string {
  return name.toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9_]/g, '');
}

function loadExerciseSelections(): Record<string, number> {
  try {
    const stored = localStorage.getItem(EXERCISE_SELECTIONS_KEY);
    if (!stored) return {};
    
    const data = JSON.parse(stored);
    
    // Check if it's the new format (grouped by month)
    if (data && typeof data === 'object' && currentMonth && data[currentMonth]) {
      return data[currentMonth];
    }
    
    // Check if it's the old format (flat structure) - migrate it
    if (data && typeof data === 'object' && !currentMonth) {
      // If no current month set, return empty to avoid errors
      return {};
    }
    
    // Handle old format migration
    if (data && typeof data === 'object' && currentMonth) {
      // Check if any key doesn't look like a month ID (YYYY_MM)
      const hasOldFormat = Object.keys(data).some(key => !/^\d{4}_\d{2}$/.test(key));
      if (hasOldFormat) {
        // This is old format, migrate to new format
        migrateExerciseSelections(data);
        // Return the current month's data after migration
        const newData = JSON.parse(localStorage.getItem(EXERCISE_SELECTIONS_KEY) || '{}');
        return newData[currentMonth] || {};
      }
    }
    
    return {};
  } catch {
    return {};
  }
}

function saveExerciseSelection(exerciseId: string, rowIndex: number): void {
  try {
    if (!currentMonth) {
      console.error('Cannot save exercise selection: no current month set');
      return;
    }
    
    const allSelections = loadAllExerciseSelections();
    
    // Initialize month if it doesn't exist
    if (!allSelections[currentMonth]) {
      allSelections[currentMonth] = {};
    }
    
    // Save the selection for the current month
    allSelections[currentMonth][exerciseId] = rowIndex;
    
    localStorage.setItem(EXERCISE_SELECTIONS_KEY, JSON.stringify(allSelections));
  } catch (error) {
    console.error('Error saving exercise selection:', error);
  }
}

function removeExerciseSelection(exerciseId: string): void {
  try {
    if (!currentMonth) {
      console.error('Cannot remove exercise selection: no current month set');
      return;
    }
    
    const allSelections = loadAllExerciseSelections();
    
    // Remove the selection for the current month
    if (allSelections[currentMonth]) {
      delete allSelections[currentMonth][exerciseId];
    }
    
    localStorage.setItem(EXERCISE_SELECTIONS_KEY, JSON.stringify(allSelections));
  } catch (error) {
    console.error('Error removing exercise selection:', error);
  }
}

function loadAllExerciseSelections(): Record<string, Record<string, number>> {
  try {
    const stored = localStorage.getItem(EXERCISE_SELECTIONS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function migrateExerciseSelections(oldData: Record<string, number>): void {
  try {
    // Create new format structure
    const newData: Record<string, Record<string, number>> = {};
    
    // Get all available months
    const availableMonths = getAvailableMonths();
    
    // For migration, we'll assign the old selections to all available months
    // This ensures users don't lose their existing selections
    availableMonths.forEach(monthId => {
      newData[monthId] = { ...oldData };
    });
    
    // Save the migrated data
    localStorage.setItem(EXERCISE_SELECTIONS_KEY, JSON.stringify(newData));
  } catch (error) {
    console.error('Error migrating exercise selections:', error);
  }
}

function getWeightForPercentage(rowIndex: number, columnIndex: number): string | null {
  if (rowIndex < 0 || rowIndex >= gymData.length || columnIndex < 0 || columnIndex >= gymData[rowIndex].length) {
    return null;
  }
  return gymData[rowIndex][columnIndex];
}

function saveLastSelectedDay(week: number, day: number): void {
  try {
    const dayData = { week, day };
    localStorage.setItem(LAST_SELECTED_DAY_KEY, JSON.stringify(dayData));
  } catch (error) {
    console.error('Error saving last selected day:', error);
  }
}

function loadLastSelectedDay(): { week: number; day: number } | null {
  try {
    const stored = localStorage.getItem(LAST_SELECTED_DAY_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      // Validate the data structure
      if (data && typeof data.week === 'number' && typeof data.day === 'number') {
        return data;
      }
    }
    return null;
  } catch {
    return null;
  }
}

function saveLastSelectedMonth(monthId: string): void {
  try {
    localStorage.setItem(LAST_SELECTED_MONTH_KEY, monthId);
  } catch (error) {
    console.error('Error saving last selected month:', error);
  }
}

function loadLastSelectedMonth(): string | null {
  try {
    return localStorage.getItem(LAST_SELECTED_MONTH_KEY);
  } catch {
    return null;
  }
}

function saveAuthentication(): void {
  try {
    localStorage.setItem(LOGIN_AUTH_KEY, 'true');
  } catch (error) {
    console.error('Error saving authentication status:', error);
  }
}

function isAuthenticated(): boolean {
  try {
    const stored = localStorage.getItem(LOGIN_AUTH_KEY);
    return stored === 'true';
  } catch {
    return false;
  }
}

// This function is no longer needed since weights are calculated directly in the template

function setupExerciseSelectors(): void {
  document.querySelectorAll('.exercise-selector').forEach(select => {
    const selectElement = select as HTMLSelectElement;
    const exerciseId = selectElement.dataset.exerciseId;

    if (!exerciseId) return;

    selectElement.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement;
      const selectedValue = target.value;

      if (selectedValue === '') {
        // Remove selection
        removeExerciseSelection(exerciseId);
      } else {
        // Save selection
        const rowIndex = parseInt(selectedValue);
        saveExerciseSelection(exerciseId, rowIndex);
      }

      // Refresh the entire routine display to show updated weights
      loadRoutineDisplay();
    });
  });
}

// Template rendering functions - clean separation of HTML from logic
function renderWorkoutTemplate(workout: DayWorkout, warmup: MonthRoutine['warmup']): string {
  return `
    <h3>Semana ${workout.week} - Día ${workout.day}</h3>

    ${renderWarmupSection(warmup)}
    ${renderMainExercisesSection(workout.mainExercises)}
    ${renderCircuitSection(workout.circuit, workout.circuitRounds)}
  `;
}

function renderWarmupSection(warmup: MonthRoutine['warmup']): string {
  return `
    <div class="routine-section">
      <table class="routine-table">
        <thead>
          <tr class="section-header collapsible-header collapsed" data-section="warmup">
            <th colspan="2">
              <span class="section-title">Entrada en Calor - ${warmup.totalRounds} rondas</span>
              <span class="collapse-icon">▼</span>
            </th>
          </tr>
          <tr class="collapsible-content column-headers" data-content="warmup" style="display: none;">
            <th>Ejercicio</th>
            <th>Series/Repeticiones</th>
          </tr>
        </thead>
        <tbody class="collapsible-content" data-content="warmup" style="display: none;">
          ${warmup.exercises.map(exercise => `
            <tr>
              <td>${exercise.name}</td>
              <td>${exercise.sets}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderMainExercisesSection(mainExercises: DayWorkout['mainExercises']): string {
  const selections = loadExerciseSelections();

  return `
    <div class="routine-section">
      <table class="routine-table">
        <thead>
          <tr class="section-header">
            <th colspan="6">
              <span class="section-title">Ejercicios Principales</span>
            </th>
          </tr>
          <tr class="column-headers">
            <th>Ejercicio</th>
            <th>55%</th>
            <th>65%</th>
            <th>75%</th>
            <th>Rango E</th>
            <th>Rango F</th>
          </tr>
        </thead>
        <tbody>
          ${mainExercises.map(exercise => {
            const exerciseId = sanitizeExerciseName(exercise.name);
            let selectedRow = selections[exerciseId];
            
            // Use routine default if no selection exists
            if (selectedRow === undefined && currentMonth) {
              const defaults = getDefaultsForMonth(currentMonth);
              if (defaults) {
                const defaultWeight = defaults[exercise.name];
                if (defaultWeight !== undefined) {
                  // Find the row index that matches the default weight
                  selectedRow = gymData.findIndex(row => parseInt(row[7]) === defaultWeight);
                  if (selectedRow === -1) selectedRow = undefined;
                }
              }
            }

            // Helper function to render weight cell
            const renderWeightCell = (originalValue: string | undefined, columnType: string) => {
              if (!originalValue || originalValue === '-') return '-';

              // Extract just the number/text without "reps"
              const cleanValue = originalValue.replace(/\s*reps?\s*/i, '').trim();

              if (selectedRow !== undefined) {
                const columnMap: Record<string, number> = {
                  '55': 0, '65': 1, '75': 2
                };
                const columnIndex = columnMap[columnType];
                if (columnIndex !== undefined) {
                  const weight = getWeightForPercentage(selectedRow, columnIndex);
                  return weight ? `${cleanValue} (${weight} kg)` : cleanValue;
                }
              }

              return `<span data-exercise-id="${exerciseId}" data-column-type="${columnType}" data-original-text="${cleanValue}">${cleanValue}</span>`;
            };

            // Helper function to render range cell (E or F) with min/max weights
            const renderRangeCell = (originalValue: string, rangeType: 'E' | 'F') => {
              if (!originalValue || originalValue === '-') return '-';

              // Extract just the number/text without "reps"
              const cleanValue = originalValue.replace(/\s*reps?\s*/i, '').trim();

              if (selectedRow !== undefined) {
                const minColumn = rangeType === 'E' ? 3 : 5; // E min = 3, F min = 5
                const maxColumn = rangeType === 'E' ? 4 : 6; // E max = 4, F max = 6

                const minWeight = getWeightForPercentage(selectedRow, minColumn);
                const maxWeight = getWeightForPercentage(selectedRow, maxColumn);

                if (minWeight && maxWeight) {
                  return `${cleanValue} (${minWeight}-${maxWeight} kg)`;
                } else if (minWeight) {
                  return `${cleanValue} (${minWeight} kg)`;
                } else if (maxWeight) {
                  return `${cleanValue} (${maxWeight} kg)`;
                }
              }

              return cleanValue;
            };

            return `
              <tr>
                <td>
                  <div class="exercise-container">
                    <div class="exercise-name">${exercise.name}</div>
                    <select class="exercise-selector" data-exercise-id="${exerciseId}">
                      <option value="">${selectedRow !== undefined ? 'Máximo...' : (() => {
                        const defaults = getDefaultsForMonth(currentMonth);
                        return defaults && defaults[exercise.name] ? `${defaults[exercise.name]} kg` : 'Máximo...';
                      })()}</option>
                      ${gymData.map((row, index) => {
                        const maxWeight = row[7]; // MAX column
                        const isSelected = selectedRow === index;
                        return `<option value="${index}" ${isSelected ? 'selected' : ''}>${maxWeight} kg</option>`;
                      }).join('')}
                    </select>
                  </div>
                </td>
                <td>${renderWeightCell(exercise.warmupSets.percentage55, '55')}</td>
                <td>${renderWeightCell(exercise.warmupSets.percentage65, '65')}</td>
                <td>${renderWeightCell(exercise.warmupSets.percentage75, '75')}</td>
                <td>${renderRangeCell(exercise.workingSets, 'E')}</td>
                <td>${exercise.rangeFSets ? renderRangeCell(exercise.rangeFSets, 'F') : '-'}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderCircuitSection(circuit: DayWorkout['circuit'], rounds: number): string {
  return `
    <div class="routine-section">
      <table class="routine-table">
        <thead>
          <tr class="section-header">
            <th colspan="2">
              <span class="section-title">Circuito Final (${rounds} rondas)</span>
            </th>
          </tr>
          <tr class="column-headers">
            <th>Ejercicio</th>
            <th>Repeticiones</th>
          </tr>
        </thead>
        <tbody>
          ${circuit.map(exercise => `
            <tr>
              <td>${exercise.name}</td>
              <td>${exercise.reps}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

