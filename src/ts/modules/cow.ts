/**
 * Cowsay module - generates ASCII art cow with message
 * @module cow
 */

import { say } from 'cowsay';

/**
 * Generates a cowsay message with the provided text
 * @param text - The message to display in the cow speech bubble
 * @returns The formatted cowsay ASCII art string
 */
export const randomCow = (text: string): string => {
  return say({ text });
};
