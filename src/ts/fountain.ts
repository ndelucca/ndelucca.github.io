/**
 * Fountain page - displays a cowsay with a random fortune cookie quote
 * @module fountain
 */

import { randomCow } from './modules/cow';
import { fetchFortuneCookie } from './modules/fortune';

/**
 * Loads a random fortune cookie quote and displays it in cowsay format
 * Handles errors gracefully by displaying error messages to the user
 */
const lucky_cow = async (): Promise<void> => {
  const cowElement = document.querySelector('.cowsie');
  if (!cowElement) {
    console.error('Element .cowsie not found');
    return;
  }

  try {
    cowElement.innerHTML = randomCow('Moo..?');
    const fortune_cookie = await fetchFortuneCookie();
    cowElement.innerHTML = randomCow(fortune_cookie);
  } catch (error) {
    console.error('Failed to load fortune cookie:', error);
    cowElement.innerHTML = randomCow('Error loading fortune. Please try again later.');
  }
};

window.addEventListener('load', lucky_cow);
