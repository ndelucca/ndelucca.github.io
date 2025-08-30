// Central export file for all monthly routines
// Import and export all available monthly routines

import { routine2025_08 } from './2025_08';
import { routine2025_09 } from './2025_09';
// Import future months here as they are added
// import { routine2025_10 } from './2025_10';

export { routine2025_08 };
export { routine2025_09 };
// Export future months here
// export { routine2025_10 };

// Export common types
export * from './types';

// Registry of available routines
export const availableRoutines = {
  '2025_08': routine2025_08,
  '2025_09': routine2025_09,
  // Add future months here
  // '2025_10': routine2025_10,
};

// Get routine by month identifier
export const getRoutineByMonth = (monthId: string) => {
  return availableRoutines[monthId as keyof typeof availableRoutines];
};

// Get list of available months
export const getAvailableMonths = (): string[] => {
  return Object.keys(availableRoutines);
};