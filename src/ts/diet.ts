/**
 * Diet page - quick cheat sheet of what to eat today
 * @module diet
 */

import { setupCollapsibleSections } from './modules/collapsible';
import { dietPlan } from './nutrition/plan';
import { formatDateKey, formatLongDate, isTrainingWeekday } from './nutrition/schedule';
import { FoodGroup, MealOption, MenuIdeas, PlateMeal, Supplement } from './nutrition/types';

const TRAINING_OVERRIDE_KEY = 'diet_training_override';

interface TrainingOverride {
  date: string; // 'YYYY-MM-DD' - the override only applies to this day
  isTraining: boolean;
}

/** One collapsible block of the page */
interface Section {
  id: string;
  title: string;
  body: string;
}

// Read fresh on every use: the page may sit open across midnight, and stamping a
// stale date onto a saved override would silently discard the user's choice.
const now = (): Date => new Date();

let isTrainingDay = isTrainingWeekday(now());
let selectedBreakfastOption = 0;

/**
 * Reads the manual override, discarding it when it belongs to a previous day
 * @returns The stored override for today, or null
 */
const loadTrainingOverride = (): TrainingOverride | null => {
  try {
    const stored = localStorage.getItem(TRAINING_OVERRIDE_KEY);
    if (!stored) return null;

    const data = JSON.parse(stored);
    if (data && typeof data.isTraining === 'boolean' && data.date === formatDateKey(now())) {
      return data;
    }

    // Stale override from another day - drop it and fall back to auto detection
    localStorage.removeItem(TRAINING_OVERRIDE_KEY);
    return null;
  } catch {
    return null;
  }
};

/**
 * Persists the manual override for the current day
 * @param isTraining - Whether today should be treated as a training day
 */
const saveTrainingOverride = (isTraining: boolean): void => {
  try {
    const override: TrainingOverride = { date: formatDateKey(now()), isTraining };
    localStorage.setItem(TRAINING_OVERRIDE_KEY, JSON.stringify(override));
  } catch (error) {
    console.error('Failed to save training override:', error);
  }
};

/**
 * Renders a section shell with its collapsible header
 * @param section - The section to render
 * @param collapsed - Whether the section starts folded
 * @returns The section HTML
 */
const renderSection = (section: Section, collapsed: boolean): string => {
  const state = collapsed ? 'collapsed' : 'expanded';
  const icon = collapsed ? '▼' : '▲';
  const style = collapsed ? ' style="display: none;"' : '';

  return `
    <div class="diet-section">
      <h2 class="collapsible-header ${state}" data-section="${section.id}">
        <span class="section-title">${section.title}</span>
        <span class="collapse-icon">${icon}</span>
      </h2>
      <div class="diet-section-body" data-content="${section.id}"${style}>${section.body}</div>
    </div>
  `;
};

/**
 * Renders a bullet list
 * @param items - The lines to list
 * @returns The list HTML
 */
const renderList = (items: string[]): string => {
  return `<ul class="diet-list">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
};

/**
 * Renders the breakfast/snack options as tabs, showing one at a time, and
 * highlighting the pre-workout tweaks on training days.
 * Which tab is active is applied by applyBreakfastSelection after insertion, so
 * that rule lives in exactly one place.
 * @param options - Available meal options
 * @returns The tabbed options HTML
 */
const renderMealOptions = (options: MealOption[]): string => {
  const noteClass = isTrainingDay ? 'diet-note diet-note-highlight' : 'diet-note';

  const tabs = options
    .map(
      (option, index) => `<div class="diet-tab" data-option="${index}">${option.shortName}</div>`
    )
    .join('');

  const panels = options
    .map(
      (option, index) => `
        <div class="diet-option" data-option-panel="${index}">
          <h3 class="diet-option-label">${option.label} - ${option.shortName}</h3>
          <p class="diet-option-text">${option.description}</p>
          ${option.preWorkoutNote ? `<p class="${noteClass}">Pre-entreno: ${option.preWorkoutNote}</p>` : ''}
        </div>
      `
    )
    .join('');

  return `
    <div class="diet-tabs">
      <div class="diet-tab-bar">${tabs}</div>
      ${panels}
    </div>
  `;
};

/**
 * Shows the selected breakfast option and hides the rest.
 * Single source of truth for the tab state, used both after a render and on click.
 */
const applyBreakfastSelection = (): void => {
  document.querySelectorAll('.diet-tab').forEach(tab => {
    const tabEl = tab as HTMLElement;
    tabEl.classList.toggle('active', tabEl.dataset.option === `${selectedBreakfastOption}`);
  });

  document.querySelectorAll('[data-option-panel]').forEach(panel => {
    const panelEl = panel as HTMLElement;
    const isSelected = panelEl.dataset.optionPanel === `${selectedBreakfastOption}`;
    panelEl.style.display = isSelected ? 'block' : 'none';
  });
};

/**
 * Wires the breakfast option tabs. Called after every render of the day sections,
 * since those replace the tab elements.
 */
const setupBreakfastTabs = (): void => {
  document.querySelectorAll('.diet-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      selectedBreakfastOption = parseInt((tab as HTMLElement).dataset.option || '0', 10);
      applyBreakfastSelection();
    });
  });

  applyBreakfastSelection();
};

/**
 * Renders a plate-based meal (lunch or dinner) component by component
 * @param meal - The meal to render
 * @returns The meal HTML
 */
const renderPlateMeal = (meal: PlateMeal): string => {
  const components = meal.components
    .map(
      component => `
        <div class="diet-component">
          <h3 class="diet-component-name">
            ${component.name}
            <span class="diet-portion">${component.portion}</span>
          </h3>
          ${renderList(component.options)}
          ${component.note ? `<p class="diet-note">${component.note}</p>` : ''}
        </div>
      `
    )
    .join('');

  return `
    ${components}
    <div class="diet-extras">
      <p><strong>Bebida:</strong> ${meal.drink}</p>
      <p><strong>Condimento:</strong> ${meal.dressing}</p>
    </div>
  `;
};

/**
 * Renders the supplement schedule
 * @param supplements - The supplements to take
 * @returns The supplements HTML
 */
const renderSupplements = (supplements: Supplement[]): string => {
  return supplements
    .map(
      supplement => `
        <div class="diet-supplement">
          <span class="diet-supplement-timing">${supplement.timing}</span>
          <span class="diet-supplement-name">${supplement.name}</span>
          <span class="diet-supplement-dose">${supplement.dose}</span>
        </div>
      `
    )
    .join('');
};

/**
 * Renders the food exchange groups
 * @param groups - The food groups
 * @param note - The explanation of how exchanging works
 * @returns The food groups HTML
 */
const renderFoodGroups = (groups: FoodGroup[], note: string): string => {
  const cards = groups
    .map(
      group => `
        <div class="diet-group">
          <h3 class="diet-group-name">${group.name}</h3>
          ${renderList(group.items)}
        </div>
      `
    )
    .join('');

  return `
    <div class="diet-groups">${cards}</div>
    <p class="diet-note">${note}</p>
  `;
};

/**
 * Renders the menu ideas for lunch and dinner
 * @param ideas - The menu ideas
 * @returns The menu ideas HTML
 */
const renderMenuIdeas = (ideas: MenuIdeas): string => {
  return `
    <h3 class="diet-group-name">Almuerzos</h3>
    ${renderList(ideas.lunch)}
    <h3 class="diet-group-name">Cenas</h3>
    ${renderList(ideas.dinner)}
  `;
};

/**
 * Builds today's meal sections. Single source of truth for what goes in each
 * section, used both for the first render and for the training-day toggle.
 * @returns The day sections in display order
 */
const buildDaySections = (): Section[] => {
  const dinner = isTrainingDay ? dietPlan.dinnerTraining : dietPlan.dinnerRest;
  const supplements = isTrainingDay
    ? [...dietPlan.dailySupplements, ...dietPlan.trainingSupplements]
    : dietPlan.dailySupplements;

  const breakfastHint =
    '<p class="diet-hint">Elegí una opción en el desayuno y otra en la merienda.</p>';

  return [
    {
      id: 'breakfast',
      title: 'Desayuno / Merienda',
      body: breakfastHint + renderMealOptions(dietPlan.breakfastOptions),
    },
    { id: 'lunch', title: dietPlan.lunch.title, body: renderPlateMeal(dietPlan.lunch) },
    { id: 'dinner', title: dinner.title, body: renderPlateMeal(dinner) },
    { id: 'supplements', title: 'Suplementación', body: renderSupplements(supplements) },
  ];
};

/**
 * First render of the meal sections
 */
const renderDay = (): void => {
  const container = document.getElementById('diet-day');
  if (!container) {
    console.error('Element #diet-day not found');
    return;
  }

  container.innerHTML = buildDaySections()
    .map(section => renderSection(section, false))
    .join('');

  setupCollapsibleSections();
  setupBreakfastTabs();
};

/**
 * Refreshes the meal sections in place after the training day changes.
 * Only the titles and bodies are rewritten, so sections the user folded stay folded.
 */
const updateDay = (): void => {
  buildDaySections().forEach(section => {
    const title = document.querySelector(`[data-section="${section.id}"] .section-title`);
    const body = document.querySelector(`[data-content="${section.id}"]`);

    if (!title || !body) {
      console.error(`Section ${section.id} not found`);
      return;
    }

    title.textContent = section.title;
    body.innerHTML = section.body;
  });

  setupBreakfastTabs();
};

/**
 * Renders the reference material, which is the same every day
 */
const renderReference = (): void => {
  const container = document.getElementById('diet-reference');
  if (!container) {
    console.error('Element #diet-reference not found');
    return;
  }

  const sections: Section[] = [
    { id: 'menu-ideas', title: 'Ideas de menú', body: renderMenuIdeas(dietPlan.menuIdeas) },
    {
      id: 'food-groups',
      title: 'Grupos de alimentos',
      body: renderFoodGroups(dietPlan.foodGroups, dietPlan.foodGroupsNote),
    },
    {
      id: 'advice',
      title: 'Recomendaciones y observaciones',
      body: `
        <h3 class="diet-group-name">Recomendaciones</h3>
        ${renderList(dietPlan.recommendations)}
        <h3 class="diet-group-name">Observaciones</h3>
        ${renderList(dietPlan.observations)}
      `,
    },
  ];

  container.innerHTML = sections.map(section => renderSection(section, true)).join('');

  setupCollapsibleSections();
};

/**
 * Updates the header date and the training-day badge
 */
const renderHeader = (): void => {
  const dateElement = document.getElementById('diet-date');
  const badgeElement = document.getElementById('diet-badge');

  if (!dateElement || !badgeElement) {
    console.error('Diet header elements not found');
    return;
  }

  dateElement.textContent = `Hoy es ${formatLongDate(now())}`;
  badgeElement.textContent = isTrainingDay ? 'Día de entreno' : 'Día sin entreno';
  badgeElement.classList.toggle('training', isTrainingDay);
  badgeElement.classList.toggle('rest', !isTrainingDay);
};

/**
 * Wires the manual training-day override button
 */
const setupToggle = (): void => {
  const toggle = document.getElementById('diet-toggle');
  if (!toggle) {
    console.error('Element #diet-toggle not found');
    return;
  }

  toggle.addEventListener('click', () => {
    isTrainingDay = !isTrainingDay;
    saveTrainingOverride(isTrainingDay);
    renderHeader();
    updateDay();
  });
};

const initializeDietPage = (): void => {
  const override = loadTrainingOverride();
  if (override) {
    isTrainingDay = override.isTraining;
  }

  renderHeader();
  renderDay();
  renderReference();
  setupToggle();
};

document.addEventListener('DOMContentLoaded', initializeDietPage);
