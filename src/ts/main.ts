/**
 * Site-wide behaviour, loaded on every page
 * @module main
 */

// The webfont ships as plain CSS, so it is pulled in here rather than through
// the SCSS entry, where it would need a deprecated @import.
import '@fontsource/jetbrains-mono';

/**
 * Wires the hamburger button that slides the navigation in on narrow screens
 */
const setupNavigation = (): void => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  if (!hamburger || !nav) {
    console.error('Navigation elements not found');
    return;
  }

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
};

document.addEventListener('DOMContentLoaded', setupNavigation);
