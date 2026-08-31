# Workout Routine Skill

Use this skill when the user asks to create, add, or upload a new monthly workout routine.

**Trigger phrases**: "new workout", "new routine", "upload routine", "create routine", "add month", "FUERZA", "workout month", "december routine", "january routine", etc.

---

## Step 1: Gather Information

Ask the user:

1. **Where is the DOCX file?** (e.g., `/home/ndelucca/Downloads/FUERZA 8.docx`)
2. **What are your default weights for this month?**
   - Sentadilla Atrás (kg)
   - RDL (kg)
   - Empuje de fuerza (kg)
   - Remo acostado (kg)
   - Dominadas (kg)
   - Fuerza en banco (kg)

## Step 2: Read the DOCX File

DOCX files are binary. Extract text with:

```bash
unzip -p "/path/to/file.docx" word/document.xml | sed -e 's/<[^>]*>//g' | tr -s ' \n' | head -500
```

## Step 3: Parse DOCX Notation

- **Percentages**: `55/5 65/4 75/3` = warmup sets at 55% (5 reps), 65% (4 reps), 75% (3 reps)
- **Range E**: `E/2x2` = 2 sets of 2 reps at 80%-87.5% of 1RM
- **Range F**: `F/1x1` = 1 set of 1 rep at 87.5%-95% of 1RM
- **Single reps**: `E/3` = 3 reps (not sets) at Range E
- **T (tempo)**: `6T` = 6-count tempo
- **E.C.**: Entrada en Calor (warm-up)
- **x3**: Circuit rounds

## Step 4: Determine Routine Length

Count the weeks - routines vary:

- **3 weeks**: 9 workout days
- **4 weeks**: 12 workout days (most common)
- **5 weeks**: 15 workout days

## Step 5: Create Files

Routines are data, not code: each month is a single JSON file, plus one line in
the month registry. There are no per-month TypeScript modules and no helper
functions to copy.

### 5.1 Create `src/data/routines/YYYY_MM.json`

Follow the `MonthRoutine` shape in `src/ts/routines/types.ts`. The `defaults`
map holds the starting 1RM in kg per main exercise, keyed by the exact exercise
name used in `workoutDays`.

```json
{
  "month": "YYYY_MM",
  "warmup": {
    "exercises": [{ "name": "Exercise name", "sets": "4+4" }],
    "totalRounds": 3
  },
  "ranges": {
    "rangeE": "80% - 87.5% del 1RM",
    "rangeF": "87.5% - 95% del 1RM"
  },
  "defaults": {
    "Sentadillas atrás": 135,
    "Fuerza en banco": 100,
    "Dominadas": 100,
    "RDL": 120,
    "Empuje de fuerza": 75,
    "Remo acostado": 90
  },
  "workoutDays": [
    {
      "day": 1,
      "week": 1,
      "mainExercises": [
        {
          "name": "Sentadillas atrás",
          "warmupSets": {
            "percentage55": "5 reps",
            "percentage65": "4 reps",
            "percentage75": "3 reps"
          },
          "workingSets": "2x2",
          "rangeFSets": "1x1"
        }
      ],
      "circuit": [{ "name": "Circuit exercise", "reps": "4+3" }],
      "circuitRounds": 3
    }
  ]
}
```

`rangeFSets` and `maxSets` are optional - leave them out when the day has none,
rather than writing a placeholder.

### 5.2 Register the month

Add `"YYYY_MM"` to `src/data/months.json`, keeping the list in chronological
order. That is the only registry: the page imports each month's JSON on demand,
so nothing else needs editing.

## Exercise Groups

**Group A** (alternates):

- Sentadillas atrás
- Fuerza en banco
- Dominadas

**Group B** (alternates):

- RDL
- Empuje de fuerza
- Remo acostado

## Important Rules

1. **Never summarize circuits** - Write complete data for each day
2. **Use single quotes** for all strings
3. **rangeFSets format**: "1 rep" for single, "1x2" for sets×reps
4. **Some warmups skip 55%**: Deload days may have only 65%/75%

## Standard Exercise Names

Use exactly:

- `Sentadillas atrás`
- `Fuerza en banco`
- `Dominadas`
- `RDL`
- `Empuje de fuerza`
- `Remo acostado`

## Abbreviations to Keep

- `c/` = con
- `1pp` = 1 pie/pierna
- `1bb` = 1 brazo
- `lat` = lateral
- `M.B.` = medicine ball
- `TRX` = TRX
- `inv` = invertido

## Step 6: Verify

Run `npm run check` (typecheck, lint, formatting and tests). The routine suite
walks every month listed in `months.json` and asserts that it loads, trains
three days a week, and ships a default for every exercise it names - so a
malformed or unregistered month fails there without any test needing an edit.

Then run `npm run build`.
