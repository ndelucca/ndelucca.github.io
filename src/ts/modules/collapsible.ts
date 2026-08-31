/**
 * Fold/unfold behaviour shared by the workout and diet pages
 * @module collapsible
 */

/**
 * Restores the display value a collapsed element should go back to.
 * Table parts need their own display values, everything else is a block.
 * @param element - The element being expanded
 * @returns The display value to apply
 */
const expandedDisplay = (element: HTMLElement): string => {
  const tag = element.tagName.toLowerCase();
  if (tag === 'tbody') return 'table-row-group';
  if (tag === 'tr') return 'table-row';
  return 'block';
};

/**
 * Wires every `.collapsible-header` to the elements sharing its section name.
 *
 * A header carries `data-section="x"` and its content carries `data-content="x"`;
 * several elements may share one section. The folded state lives in the inline
 * display style, so the initial state has to come from the markup: collapsed
 * elements ship with `style="display: none;"` and the header with class
 * `collapsed`, expanded ones with class `expanded`.
 *
 * Safe to call again after a re-render: already wired headers are skipped.
 */
export const setupCollapsibleSections = (): void => {
  document.querySelectorAll('.collapsible-header').forEach(header => {
    const headerEl = header as HTMLElement;
    if (headerEl.dataset.collapsibleBound === 'true') return;
    headerEl.dataset.collapsibleBound = 'true';

    headerEl.addEventListener('click', () => {
      const section = headerEl.dataset.section;
      const contentElements = document.querySelectorAll(`[data-content="${section}"]`);
      const icon = headerEl.querySelector('.collapse-icon') as HTMLElement;

      if (contentElements.length === 0 || !icon) return;

      const firstContent = contentElements[0] as HTMLElement;
      const isCollapsed = firstContent.style.display === 'none';

      contentElements.forEach(element => {
        const el = element as HTMLElement;
        el.style.display = isCollapsed ? expandedDisplay(el) : 'none';
      });

      headerEl.classList.toggle('expanded', isCollapsed);
      headerEl.classList.toggle('collapsed', !isCollapsed);
      icon.textContent = isCollapsed ? '▲' : '▼';
    });
  });
};
