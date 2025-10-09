// Exercise defaults registry - imports and exports all available defaults
import { defaults2025_08 } from './2025_08';
import { defaults2025_09 } from './2025_09';
import { defaults2025_10 } from './2025_10';

// Export individual defaults
export { defaults2025_08, defaults2025_09, defaults2025_10 };

// Registry of available defaults by month
export const availableDefaults: Record<string, Record<string, number>> = {
  '2025_08': defaults2025_08,
  '2025_09': defaults2025_09,
  '2025_10': defaults2025_10,
};

// Helper function to get defaults for a specific month
export function getDefaultsForMonth(month: string): Record<string, number> | undefined {
  return availableDefaults[month];
}