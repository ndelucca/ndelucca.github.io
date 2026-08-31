/**
 * The gym reference table: one row per 1RM level, one column per training load.
 * @module workout/gymTable
 */

import table from '../../data/gym-table.json';

/** Column indexes of the reference table, in the order the source sheet uses */
export const COLUMN = {
  percentage55: 0,
  percentage65: 1,
  percentage75: 2,
  rangeEMin: 3,
  rangeEMax: 4,
  rangeFMin: 5,
  rangeFMax: 6,
  max: 7,
} as const;

/** Every row of the reference table, as displayed (weights are kg strings) */
export const gymTable: readonly string[][] = table;

/**
 * Reads one cell of the reference table
 * @param rowIndex - Zero based row index
 * @param columnIndex - One of the COLUMN values
 * @returns The weight as shown in the table, or null when out of range
 */
export const getWeight = (rowIndex: number, columnIndex: number): string | null => {
  const row = gymTable[rowIndex];
  if (!row) return null;
  return row[columnIndex] ?? null;
};

/**
 * Finds the table row whose MAX column holds the given weight.
 * Compares as a number rather than parseInt so half-kilo plates such as 112.5
 * match their own row instead of being truncated to 112.
 * @param maxWeight - The 1RM in kg
 * @returns The row index, or undefined when no row carries that weight
 */
export const findRowByMaxWeight = (maxWeight: number): number | undefined => {
  const index = gymTable.findIndex(row => parseFloat(row[COLUMN.max]) === maxWeight);
  return index === -1 ? undefined : index;
};
