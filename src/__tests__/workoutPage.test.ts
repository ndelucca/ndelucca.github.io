// Integration test for the workout page controller.
//
// It mounts the real workout.hbs markup, runs the module against it and drives
// the page the way a user would. Reading the template rather than a copy of it
// means a markup change that breaks the wiring fails here.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const TEMPLATE = join(__dirname, '..', 'templates', 'workout.hbs');

/**
 * The page markup without the Handlebars partials, which only add the shared
 * chrome the controller never touches.
 */
const pageMarkup = (): string => {
  return readFileSync(TEMPLATE, 'utf-8')
    .split('\n')
    .filter(line => !line.trim().startsWith('{{>'))
    .join('\n');
};

/** Runs the module's DOMContentLoaded handler and lets the routine import settle */
const startPage = async (): Promise<void> => {
  document.dispatchEvent(new Event('DOMContentLoaded'));
  // Two turns: one for the dynamic import, one for the render that follows it
  await Promise.resolve();
  await new Promise(resolve => setTimeout(resolve, 0));
};

describe('Workout page', () => {
  beforeEach(async () => {
    jest.resetModules();
    localStorage.clear();
    localStorage.setItem('workout_authenticated', 'true');
    document.body.innerHTML = pageMarkup();

    await import('../ts/workout');
    await startPage();
  });

  test('Skips the login screen when this browser already cleared it', () => {
    const loginScreen = document.getElementById('login-screen') as HTMLElement;
    const content = document.getElementById('workout-content') as HTMLElement;

    expect(loginScreen.style.display).toBe('none');
    expect(content.style.display).toBe('block');
  });

  test('Fills the month selector with every shipped month', () => {
    const select = document.getElementById('month-select') as HTMLSelectElement;

    expect(select.options.length).toBeGreaterThanOrEqual(14);
    expect(select.options[0].textContent).toBe('Agosto 2025');
  });

  test('Opens on the most recent month', () => {
    const select = document.getElementById('month-select') as HTMLSelectElement;
    const last = select.options[select.options.length - 1].value;

    expect(select.value).toBe(last);
  });

  test('Renders the reference table', () => {
    const rows = document.querySelectorAll('#workout-data tr');

    expect(rows).toHaveLength(61);
  });

  test('Builds a week header and three day buttons per week', () => {
    const weeks = document.querySelectorAll('.week-header');
    const days = document.querySelectorAll('.day-link');

    expect(weeks.length).toBeGreaterThan(0);
    expect(days).toHaveLength(weeks.length * 3);
  });

  test('Shows week 1 day 1 with its three sections', () => {
    const content = document.getElementById('routine-content') as HTMLElement;

    expect(content.textContent).toContain('Semana 1 - Día 1');
    expect(content.textContent).toContain('Entrada en Calor');
    expect(content.textContent).toContain('Ejercicios Principales');
    expect(content.textContent).toContain('Circuito Final');
  });

  test('Clicking a day switches the routine and marks it active', () => {
    const target = document.querySelector<HTMLElement>('.day-link[data-week="2"][data-day="3"]');
    expect(target).not.toBeNull();

    target?.click();

    const content = document.getElementById('routine-content') as HTMLElement;
    expect(content.textContent).toContain('Semana 2 - Día 3');
    expect(target?.classList.contains('active')).toBe(true);
    expect(document.querySelectorAll('.day-link.active')).toHaveLength(1);
  });

  test('The selected day is remembered for the next visit', () => {
    document.querySelector<HTMLElement>('.day-link[data-week="2"][data-day="2"]')?.click();

    expect(JSON.parse(localStorage.getItem('workout_last_selected_day') ?? '{}')).toEqual({
      week: 2,
      day: 2,
    });
  });

  test('Picking a 1RM stores it and re-renders the loads', async () => {
    const select = document.querySelector<HTMLSelectElement>('.exercise-selector');
    expect(select).not.toBeNull();

    const exerciseId = select?.dataset.exerciseId as string;
    select!.value = '0';
    select!.dispatchEvent(new Event('change', { bubbles: true }));

    const stored = JSON.parse(localStorage.getItem('workout_exercise_selections') ?? '{}');
    const month = (document.getElementById('month-select') as HTMLSelectElement).value;

    expect(stored[month][exerciseId]).toBe(0);
    // Row 0 is the lightest in the table, so its warmup load shows up
    expect(document.getElementById('routine-content')?.textContent).toContain('27.5 kg');
  });

  test('Collapsible sections fold and unfold', () => {
    const header = document.querySelector<HTMLElement>('.collapsible-header[data-section="main"]');
    const body = document.querySelector<HTMLElement>('[data-content="main"]');
    expect(header).not.toBeNull();
    expect(body).not.toBeNull();

    header?.click();
    expect(body?.style.display).toBe('none');

    header?.click();
    expect(body?.style.display).not.toBe('none');
  });

  test('Switching month reloads the selector and the routine', async () => {
    const select = document.getElementById('month-select') as HTMLSelectElement;

    select.value = '2025_12';
    select.dispatchEvent(new Event('change'));
    await startPage();

    // December 2025 is a three week routine
    expect(document.querySelectorAll('.week-header')).toHaveLength(3);
    expect(document.getElementById('routine-content')?.textContent).toContain('Semana 1 - Día 1');
    expect(localStorage.getItem('workout_last_selected_month')).toBe('2025_12');
  });
});
