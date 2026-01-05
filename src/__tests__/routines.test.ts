// Test suite for routine utilities with variable week counts
import { routine2025_08, getTotalWeeks as getTotalWeeks08, getWeekRange as getWeekRange08 } from '../ts/routines/2025_08';
import { routine2025_09, getTotalWeeks as getTotalWeeks09, getWeekRange as getWeekRange09 } from '../ts/routines/2025_09';
import { routine2025_10, getTotalWeeks as getTotalWeeks10, getWeekRange as getWeekRange10 } from '../ts/routines/2025_10';
import { getRoutineStats, getAllRoutineStats } from '../ts/routines/index';

describe('Routine Variable Week Support', () => {
  test('2025_08 routine should have 4 weeks', () => {
    expect(getTotalWeeks08()).toBe(4);
    expect(getWeekRange08()).toEqual({ min: 1, max: 4 });
    expect(routine2025_08.workoutDays).toHaveLength(12); // 4 weeks × 3 days
  });

  test('2025_09 routine should have 4 weeks', () => {
    expect(getTotalWeeks09()).toBe(4);
    expect(getWeekRange09()).toEqual({ min: 1, max: 4 });
    expect(routine2025_09.workoutDays).toHaveLength(12); // 4 weeks × 3 days
  });

  test('2025_10 routine should have 5 weeks', () => {
    expect(getTotalWeeks10()).toBe(5);
    expect(getWeekRange10()).toEqual({ min: 1, max: 5 });
    expect(routine2025_10.workoutDays).toHaveLength(15); // 5 weeks × 3 days
  });

  test('All routines should have proper week progression', () => {
    // 2025_08
    const weeks08 = routine2025_08.workoutDays.map(d => d.week);
    expect(weeks08.filter(w => w === 1)).toHaveLength(3);
    expect(weeks08.filter(w => w === 4)).toHaveLength(3);

    // 2025_09
    const weeks09 = routine2025_09.workoutDays.map(d => d.week);
    expect(weeks09.filter(w => w === 1)).toHaveLength(3);
    expect(weeks09.filter(w => w === 4)).toHaveLength(3);

    // 2025_10
    const weeks10 = routine2025_10.workoutDays.map(d => d.week);
    expect(weeks10.filter(w => w === 1)).toHaveLength(3);
    expect(weeks10.filter(w => w === 5)).toHaveLength(3);
  });

  test('Each routine should have 3 days per week', () => {
    [routine2025_08, routine2025_09, routine2025_10].forEach(routine => {
      const weekNumbers = [...new Set(routine.workoutDays.map(d => d.week))];
      weekNumbers.forEach(weekNum => {
        const daysInWeek = routine.workoutDays.filter(d => d.week === weekNum);
        expect(daysInWeek).toHaveLength(3);
        expect(daysInWeek.map(d => d.day).sort()).toEqual([1, 2, 3]);
      });
    });
  });

  test('Index functions should provide correct stats for all routines', () => {
    // Test individual routine stats
    const stats08 = getRoutineStats('2025_08');
    expect(stats08).toEqual({
      totalWeeks: 4,
      totalWorkoutDays: 12,
      weekRange: { min: 1, max: 4 },
      daysPerWeek: 3
    });

    const stats10 = getRoutineStats('2025_10');
    expect(stats10).toEqual({
      totalWeeks: 5,
      totalWorkoutDays: 15,
      weekRange: { min: 1, max: 5 },
      daysPerWeek: 3
    });

    // Test all routine stats
    const allStats = getAllRoutineStats();
    expect(allStats).toHaveLength(6);
    expect(allStats.find(s => s.month === '2025_08')?.totalWeeks).toBe(4);
    expect(allStats.find(s => s.month === '2025_10')?.totalWeeks).toBe(5);
    expect(allStats.find(s => s.month === '2025_11')?.totalWeeks).toBe(4);
    expect(allStats.find(s => s.month === '2025_12')?.totalWeeks).toBe(3);
    expect(allStats.find(s => s.month === '2026_01')?.totalWeeks).toBe(4);
  });
});