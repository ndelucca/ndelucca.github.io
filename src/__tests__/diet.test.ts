// Test suite for the diet plan data layer
import { dietPlan } from '../ts/nutrition/plan';
import {
  formatDateKey,
  formatLongDate,
  getWeekdayName,
  isTrainingWeekday,
} from '../ts/nutrition/schedule';

// August 2026: 31st is a Monday, so the whole week is easy to reason about.
// Built from local parts on purpose - ISO strings would be parsed as UTC.
const monday = new Date(2026, 7, 31);
const tuesday = new Date(2026, 8, 1);
const wednesday = new Date(2026, 8, 2);
const thursday = new Date(2026, 8, 3);
const friday = new Date(2026, 8, 4);
const saturday = new Date(2026, 8, 5);
const sunday = new Date(2026, 8, 6);

describe('Training day detection', () => {
  test('Monday, Wednesday and Friday are training days', () => {
    expect(isTrainingWeekday(monday)).toBe(true);
    expect(isTrainingWeekday(wednesday)).toBe(true);
    expect(isTrainingWeekday(friday)).toBe(true);
  });

  test('The other four days are rest days', () => {
    expect(isTrainingWeekday(tuesday)).toBe(false);
    expect(isTrainingWeekday(thursday)).toBe(false);
    expect(isTrainingWeekday(saturday)).toBe(false);
    expect(isTrainingWeekday(sunday)).toBe(false);
  });

  test('Weekday names are in Spanish', () => {
    expect(getWeekdayName(monday)).toBe('lunes');
    expect(getWeekdayName(sunday)).toBe('domingo');
  });

  test('Long date reads as a Spanish sentence fragment', () => {
    expect(formatLongDate(monday)).toBe('lunes 31 de agosto');
  });
});

describe('Date keys', () => {
  test('Uses local date parts, not UTC', () => {
    // 23:30 local time - toISOString() would report the next day in Argentina
    const lateNight = new Date(2026, 7, 31, 23, 30);
    expect(formatDateKey(lateNight)).toBe('2026-08-31');
  });

  test('Pads month and day', () => {
    expect(formatDateKey(new Date(2026, 0, 5))).toBe('2026-01-05');
  });
});

describe('Diet plan data', () => {
  test('Has the four breakfast/snack options', () => {
    expect(dietPlan.breakfastOptions).toHaveLength(4);
    expect(new Set(dietPlan.breakfastOptions.map(option => option.id)).size).toBe(4);
  });

  test('Every breakfast option has a distinct short name for its tab', () => {
    const shortNames = dietPlan.breakfastOptions.map(option => option.shortName);
    expect(shortNames.every(name => name.length > 0)).toBe(true);
    expect(new Set(shortNames).size).toBe(4);
  });

  test('Only the first three breakfast options carry a pre-workout note', () => {
    const withNote = dietPlan.breakfastOptions.filter(option => option.preWorkoutNote);
    expect(withNote).toHaveLength(3);
  });

  test('Rest-day dinner drops the carbohydrate source, training dinner keeps it', () => {
    const carbsIn = (meal: { components: { name: string }[] }): boolean =>
      meal.components.some(component => component.name.includes('hidratos'));

    expect(carbsIn(dietPlan.dinnerTraining)).toBe(true);
    expect(carbsIn(dietPlan.dinnerRest)).toBe(false);
    expect(carbsIn(dietPlan.lunch)).toBe(true);
  });

  test('Every plate meal has a drink and a dressing', () => {
    [dietPlan.lunch, dietPlan.dinnerTraining, dietPlan.dinnerRest].forEach(meal => {
      expect(meal.components.length).toBeGreaterThan(0);
      expect(meal.drink).not.toBe('');
      expect(meal.dressing).not.toBe('');
    });
  });

  test('BCAA are the training-only supplement', () => {
    expect(dietPlan.trainingSupplements).toHaveLength(1);
    expect(dietPlan.trainingSupplements[0].name).toContain('BCAA');
    expect(dietPlan.dailySupplements.length).toBeGreaterThan(0);
    expect(dietPlan.dailySupplements.some(s => s.name.includes('BCAA'))).toBe(false);
  });

  test('Reference material is present', () => {
    expect(dietPlan.menuIdeas.lunch).toHaveLength(8);
    expect(dietPlan.menuIdeas.dinner).toHaveLength(6);
    expect(dietPlan.foodGroups.map(group => group.name)).toEqual([
      'Hidratos',
      'Proteína',
      'Grasas',
      'Fibra',
    ]);
    expect(dietPlan.recommendations.length).toBeGreaterThan(0);
    expect(dietPlan.observations.length).toBeGreaterThan(0);
  });
});
