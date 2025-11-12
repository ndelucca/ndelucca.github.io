/**
 * Ephemerides page - displays historical events that occurred on today's date
 * @module ephemerides
 */

import { fetchTodaysEphemerides } from './modules/wikiApi';

/**
 * Loads and displays today's historical events from Wikipedia
 * Handles errors gracefully by displaying error messages to the user
 */
const todaysEvents = async (): Promise<void> => {
  const elTodaysEvents = document.querySelector('#todays-events');
  if (!elTodaysEvents) {
    console.error('Element #todays-events not found');
    return;
  }

  const elTemplate = document.getElementById('event-template') as HTMLTemplateElement;
  if (!elTemplate) {
    console.error('Element #event-template not found');
    elTodaysEvents.innerHTML = 'Failed to load events template';
    return;
  }

  try {
    elTodaysEvents.innerHTML = 'Give me a sec...';

    const todaysEphemerides = await fetchTodaysEphemerides();

    elTodaysEvents.innerHTML = '';

    for (const ev of todaysEphemerides) {
      const { year, text } = ev;
      const elEvent = elTemplate.content.cloneNode(true) as HTMLElement;

      const titleElement = elEvent.querySelector('.title');
      const contentElement = elEvent.querySelector('.content');

      if (titleElement && contentElement) {
        titleElement.innerHTML = year;
        contentElement.innerHTML = text;
        elTodaysEvents.appendChild(elEvent);
      } else {
        console.warn('Event template missing .title or .content element');
      }
    }
  } catch (error) {
    console.error('Failed to load ephemerides:', error);
    elTodaysEvents.innerHTML = 'Failed to load events. Please try again later.';
  }
};

window.addEventListener('load', todaysEvents);
