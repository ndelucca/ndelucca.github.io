// Exercise defaults registry - imports and exports all available defaults
import { defaults2025_08 } from './2025_08';
import { defaults2025_09 } from './2025_09';
import { defaults2025_10 } from './2025_10';
import { defaults2025_11 } from './2025_11';
import { defaults2025_12 } from './2025_12';

// Export individual defaults
export { defaults2025_08, defaults2025_09, defaults2025_10, defaults2025_11, defaults2025_12 };

// Registry of available defaults by month
export const availableDefaults: Record<string, Record<string, number>> = {
  '2025_08': defaults2025_08,
  '2025_09': defaults2025_09,
  '2025_10': defaults2025_10,
  '2025_11': defaults2025_11,
  '2025_12': defaults2025_12,
};

// Helper function to get defaults for a specific month
export function getDefaultsForMonth(month: string): Record<string, number> | undefined {
  return availableDefaults[month];
}