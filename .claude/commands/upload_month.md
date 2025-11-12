# Upload Month Command

Process a monthly workout routine .docx file and generate corresponding TypeScript data structure.

## Usage

```
/upload_month <path-to-docx-file> [no_defaults]
```

Examples:
- `/upload_month /path/to/2025_11.docx` - Copy exercise defaults from previous month
- `/upload_month /path/to/2025_11.docx no_defaults` - Skip copying defaults

## Instructions

When the user runs this command with a .docx file path argument:

1. **Read the .docx file** from the provided path

2. **Convert to structured markdown** following the conversion rules from `docx_rutine_converter_prompt.md`:
   - **Notations**:
     - Numbers like 55, 65, 75 = percentages of 1RM (55%, 65%, 75%)
     - E = working range 80%-87.5% of 1RM
     - F = working range 87.5%-95% of 1RM
     - T (e.g., 6T) = "tiempos" (tempo - e.g., 6T = 6-count eccentric)
     - E.C. = Entrada en Calor (warm-up)

   - **Structure**:
     - General structure section with duration, frequency, and warm-up
     - Working ranges section (E, F, etc.)
     - 4 weeks with 3 days each (12 workout days total)
     - Each day: warm-up reference, main exercises, final circuit

3. **Parse the content** to extract:
   - Entrada en Calor (common warmup exercises) - applied to all days
   - Main exercises with percentage-based warmup sets and working sets
   - Circuit exercises with specific repetitions
   - Week and day organization

4. **Generate a new TypeScript file** in `src/ts/routines/YYYY_MM.ts` with:
   - Import from common types (`./types`)
   - Data structured according to `MonthRoutine` interface
   - Follow the exact structure of existing routines (e.g., `2025_09.ts`)
   - Include warmup, ranges, and all 12 workout days

5. **Copy defaults from previous month** (unless `no_defaults` flag is used):
   - Read the previous month's defaults file from `src/ts/routines/defaults/` (e.g., if creating 2025_11, read `defaults/2025_10.ts`)
   - Create a new defaults file `src/ts/routines/defaults/YYYY_MM.ts` with the same exercise weights
   - Update the export name (e.g., `defaults2025_10` → `defaults2025_11`)
   - Update `src/ts/routines/defaults/index.ts`:
     - Add import statement for the new defaults
     - Add to exports
     - Add to `availableDefaults` registry

6. **Update `src/ts/routines/index.ts`** to include the new routine:
   - Add import statement for the new routine
   - Add to exports
   - Add to `availableRoutines` registry
   - Update comments to indicate the new month

## File Structure

- Common types: `src/ts/routines/types.ts`
- Monthly data: `src/ts/routines/YYYY_MM.ts` (e.g., `2025_08.ts`, `2025_09.ts`, `2025_10.ts`)
- Registry: `src/ts/routines/index.ts`
- Exercise defaults: `src/ts/routines/defaults/YYYY_MM.ts`
- Defaults registry: `src/ts/routines/defaults/index.ts`
- Conversion rules: `docx_rutine_converter_prompt.md`

## Important Notes

- Do NOT summarize circuits - each day must have its complete circuit even if repeated
- Do NOT use "same as Day X" - always write complete data
- Maintain all technical notations (T, +, ", etc.)
- Respect exact exercise order
- Follow the `MonthRoutine` interface structure exactly

## Quality Checks (Critical!)

After generating the TypeScript file, **ALWAYS** compare with previous routines to ensure:

1. **Expand all abbreviations**:
   - "Fza" → "Fuerza"
   - "Rev" → "Revolver"
   - "Elev" → "Elevación" or "Elevaciones"
   - "Met arr" → "Metida de arranque"
   - Compare warmup exercise names with 2025_09 and 2025_10 for reference
   - Keep standard abbreviations: "c/" (con), "1pp" (1 pie/pierna), "1bb" (1 brazo), "lat" (lateral), "M.B." (medicine ball)

2. **Verify rangeFSets format**:
   - Single reps: "1 rep" (NOT just "1")
   - Multiple sets: "1x2", "2x2", "2x3" (keep as-is)
   - Compare with 2025_10.ts for reference

3. **Cross-check structure**:
   - 12 workout days (4 weeks × 3 days)
   - All main exercises have proper warmupSets
   - All circuits have 3-6 exercises with proper reps
   - workingSets format matches pattern (e.g., "3x2", "4x3", "2x1")

4. **Read previous routine files**:
   - Read 2025_09.ts and 2025_10.ts before writing new file
   - Match naming conventions and formatting style
   - Ensure consistency across all routines

## Default Behavior

**By default** (without `no_defaults` flag), the command will:
1. Copy exercise default weights from the immediate previous month
2. Create a new defaults file with the same values
3. Update the defaults registry

This ensures continuity in exercise weights unless you want to start fresh.

## Example

User runs `/upload_month ~/downloads/2025_11.docx` → Read .docx, convert to structured format, copy defaults from 2025_10, generate `src/ts/routines/2025_11.ts` and `src/ts/routines/defaults/2025_11.ts`, update both registries.
