/**
 * Builds the HTML of one workout day.
 *
 * These are pure string functions: they take the routine data plus the weights
 * the user picked and return markup, with no DOM or storage access of their
 * own. That is what makes the table rendering testable.
 *
 * @module workout/render
 */

import { DayWorkout, MainExercise, MonthRoutine } from '../routines/types';
import { COLUMN, findRowByMaxWeight, getWeight, gymTable } from './gymTable';
import { escapeHtml, sanitizeExerciseName, stripRepsSuffix } from './format';

/** What the renderers need to know about the user's picks for this month */
export interface RenderContext {
  /** Exercise id to reference-table row, as chosen by the user */
  selections: Record<string, number>;
  /** Exercise name to starting 1RM, used when the user has not chosen */
  defaults: Record<string, number>;
}

/**
 * Resolves which reference-table row an exercise should use: the user's pick
 * when there is one, otherwise the row matching the routine's default 1RM.
 * @param exercise - The exercise being rendered
 * @param context - The user's picks and the routine defaults
 * @returns The row index, or undefined when neither is available
 */
const resolveRow = (exercise: MainExercise, context: RenderContext): number | undefined => {
  const selected = context.selections[sanitizeExerciseName(exercise.name)];
  if (selected !== undefined) return selected;

  const defaultWeight = context.defaults[exercise.name];
  if (defaultWeight === undefined) return undefined;

  return findRowByMaxWeight(defaultWeight);
};

/**
 * Renders one warmup percentage cell, annotating it with the resolved weight
 * @param value - The cell value from the routine, e.g. '5 reps'
 * @param row - The resolved reference-table row, if any
 * @param column - The reference-table column to read
 * @returns The cell contents
 */
const renderWeightCell = (
  value: string | undefined,
  row: number | undefined,
  column: number
): string => {
  if (!value || value === '-') return '-';

  const reps = escapeHtml(stripRepsSuffix(value));
  if (row === undefined) return reps;

  const weight = getWeight(row, column);
  return weight ? `${reps} (${weight} kg)` : reps;
};

/**
 * Renders a working-range cell, annotating it with the range's weight span
 * @param value - The cell value from the routine
 * @param row - The resolved reference-table row, if any
 * @param range - Which working range the cell belongs to
 * @returns The cell contents
 */
const renderRangeCell = (
  value: string | undefined,
  row: number | undefined,
  range: 'E' | 'F'
): string => {
  if (!value || value === '-') return '-';

  const reps = escapeHtml(stripRepsSuffix(value));
  if (row === undefined) return reps;

  const min = getWeight(row, range === 'E' ? COLUMN.rangeEMin : COLUMN.rangeFMin);
  const max = getWeight(row, range === 'E' ? COLUMN.rangeEMax : COLUMN.rangeFMax);

  if (min && max) return `${reps} (${min}-${max} kg)`;
  if (min) return `${reps} (${min} kg)`;
  if (max) return `${reps} (${max} kg)`;
  return reps;
};

/**
 * Renders the MAX attempt cell
 * @param value - The cell value from the routine
 * @param row - The resolved reference-table row, if any
 * @returns The cell contents
 */
const renderMaxCell = (value: string | undefined, row: number | undefined): string => {
  if (!value || value === '-') return '-';

  const reps = escapeHtml(stripRepsSuffix(value));
  if (row === undefined) return reps;

  const weight = getWeight(row, COLUMN.max);
  return weight ? `${reps} (${weight} kg)` : reps;
};

/**
 * Renders the 1RM dropdown for one exercise
 * @param exercise - The exercise being rendered
 * @param context - The user's picks and the routine defaults
 * @param row - The resolved reference-table row, if any
 * @returns The select element markup
 */
const renderSelector = (
  exercise: MainExercise,
  context: RenderContext,
  row: number | undefined
): string => {
  const exerciseId = sanitizeExerciseName(exercise.name);
  const defaultWeight = context.defaults[exercise.name];
  const placeholder = row === undefined && defaultWeight ? `${defaultWeight} kg` : 'Máximo...';

  const options = gymTable
    .map((tableRow, index) => {
      const selected = row === index ? ' selected' : '';
      return `<option value="${index}"${selected}>${tableRow[COLUMN.max]} kg</option>`;
    })
    .join('');

  return `
    <select class="exercise-selector" data-exercise-id="${exerciseId}">
      <option value="">${placeholder}</option>
      ${options}
    </select>
  `;
};

/**
 * Renders the warmup table
 * @param warmup - The routine's warmup block
 * @returns The warmup section markup
 */
export const renderWarmupSection = (warmup: MonthRoutine['warmup']): string => {
  const rows = warmup.exercises
    .map(
      exercise => `
            <tr>
              <td>${escapeHtml(exercise.name)}</td>
              <td>${escapeHtml(exercise.sets)}</td>
            </tr>`
    )
    .join('');

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
        <tbody class="collapsible-content" data-content="warmup" style="display: none;">${rows}
        </tbody>
      </table>
    </div>
  `;
};

/**
 * Renders the main exercise table, with every cell annotated with the weight
 * that follows from the selected 1RM
 * @param mainExercises - The day's main exercises
 * @param context - The user's picks and the routine defaults
 * @returns The main exercises section markup
 */
export const renderMainExercisesSection = (
  mainExercises: DayWorkout['mainExercises'],
  context: RenderContext
): string => {
  const rows = mainExercises
    .map(exercise => {
      const row = resolveRow(exercise, context);

      return `
            <tr>
              <td>
                <div class="exercise-container">
                  <div class="exercise-name">${escapeHtml(exercise.name)}</div>
                  ${renderSelector(exercise, context, row)}
                </div>
              </td>
              <td>${renderWeightCell(exercise.warmupSets.percentage55, row, COLUMN.percentage55)}</td>
              <td>${renderWeightCell(exercise.warmupSets.percentage65, row, COLUMN.percentage65)}</td>
              <td>${renderWeightCell(exercise.warmupSets.percentage75, row, COLUMN.percentage75)}</td>
              <td>${renderRangeCell(exercise.workingSets, row, 'E')}</td>
              <td>${renderRangeCell(exercise.rangeFSets, row, 'F')}</td>
              <td>${renderMaxCell(exercise.maxSets, row)}</td>
            </tr>`;
    })
    .join('');

  return `
    <div class="routine-section">
      <table class="routine-table">
        <thead>
          <tr class="section-header collapsible-header expanded" data-section="main">
            <th colspan="7">
              <span class="section-title">Ejercicios Principales</span>
              <span class="collapse-icon">▲</span>
            </th>
          </tr>
          <tr class="collapsible-content column-headers" data-content="main">
            <th>Ejercicio</th>
            <th>55%</th>
            <th>65%</th>
            <th>75%</th>
            <th>Rango E</th>
            <th>Rango F</th>
            <th>MAX</th>
          </tr>
        </thead>
        <tbody class="collapsible-content" data-content="main">${rows}
        </tbody>
      </table>
    </div>
  `;
};

/**
 * Renders the closing circuit table
 * @param circuit - The day's circuit exercises
 * @param rounds - How many times the circuit is repeated
 * @returns The circuit section markup
 */
export const renderCircuitSection = (circuit: DayWorkout['circuit'], rounds: number): string => {
  const rows = circuit
    .map(
      exercise => `
            <tr>
              <td>${escapeHtml(exercise.name)}</td>
              <td>${escapeHtml(exercise.reps)}</td>
            </tr>`
    )
    .join('');

  return `
    <div class="routine-section">
      <table class="routine-table">
        <thead>
          <tr class="section-header collapsible-header expanded" data-section="circuit">
            <th colspan="2">
              <span class="section-title">Circuito Final (${rounds} rondas)</span>
              <span class="collapse-icon">▲</span>
            </th>
          </tr>
          <tr class="collapsible-content column-headers" data-content="circuit">
            <th>Ejercicio</th>
            <th>Repeticiones</th>
          </tr>
        </thead>
        <tbody class="collapsible-content" data-content="circuit">${rows}
        </tbody>
      </table>
    </div>
  `;
};

/**
 * Renders a full workout day: warmup, main exercises and closing circuit
 * @param workout - The day to render
 * @param warmup - The routine's warmup block
 * @param context - The user's picks and the routine defaults
 * @returns The markup for the whole day
 */
export const renderWorkoutDay = (
  workout: DayWorkout,
  warmup: MonthRoutine['warmup'],
  context: RenderContext
): string => {
  return `
    <h3>Semana ${workout.week} - Día ${workout.day}</h3>

    ${renderWarmupSection(warmup)}
    ${renderMainExercisesSection(workout.mainExercises, context)}
    ${renderCircuitSection(workout.circuit, workout.circuitRounds)}
  `;
};

/**
 * Renders the rows of the standalone reference table
 * @returns The table body markup, one row per 1RM level
 */
export const renderGymTableRows = (): string => {
  return gymTable
    .map(
      (row, index) => `
        <tr>
          <td class="row-number">${index + 1}</td>
          ${row.map(value => `<td>${value}</td>`).join('')}
        </tr>`
    )
    .join('');
};
