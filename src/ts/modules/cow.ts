/**
 * Draws the cowsay cow.
 *
 * This replaces the `cowsay` package, which shipped 165 KB of bundle - a parser,
 * a CLI and every cow file - to render the default cow and nothing else.
 *
 * @module cow
 */

const MAX_LINE_LENGTH = 40;

const COW = String.raw`        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||`;

/**
 * Breaks text into lines that fit the balloon, splitting on spaces where it can
 * and mid-word only when a single word is longer than the balloon.
 * @param text - The message to wrap
 * @returns The wrapped lines, always at least one
 */
const wrap = (text: string): string[] => {
  const lines: string[] = [];

  for (const paragraph of text.split('\n')) {
    let current = '';

    for (const word of paragraph.split(/\s+/).filter(Boolean)) {
      if (current === '') {
        current = word;
      } else if (current.length + 1 + word.length <= MAX_LINE_LENGTH) {
        current += ` ${word}`;
      } else {
        lines.push(current);
        current = word;
      }

      while (current.length > MAX_LINE_LENGTH) {
        lines.push(current.slice(0, MAX_LINE_LENGTH));
        current = current.slice(MAX_LINE_LENGTH);
      }
    }

    lines.push(current);
  }

  return lines.length === 0 ? [''] : lines;
};

/**
 * Draws the speech balloon around the wrapped lines.
 * A single line gets the pointed `< >` delimiters, several lines get the
 * `/ | \` frame, matching cowsay's own output.
 * @param lines - The wrapped message lines
 * @returns The balloon, newline separated
 */
const balloon = (lines: string[]): string => {
  const width = Math.max(...lines.map(line => line.length));
  const top = ` ${'_'.repeat(width + 2)}`;
  const bottom = ` ${'-'.repeat(width + 2)}`;

  const body = lines.map((line, index) => {
    const padded = line.padEnd(width, ' ');
    if (lines.length === 1) return `< ${padded} >`;
    if (index === 0) return `/ ${padded} \\`;
    if (index === lines.length - 1) return `\\ ${padded} /`;
    return `| ${padded} |`;
  });

  return [top, ...body, bottom].join('\n');
};

/**
 * Renders a message as an ASCII cow saying it
 * @param text - The message to put in the cow's speech balloon
 * @returns The balloon and the cow, as one multi-line string
 */
export const randomCow = (text: string): string => {
  return `${balloon(wrap(text))}\n${COW}`;
};
