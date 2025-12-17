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

### 5.1 Create `src/ts/routines/YYYY_MM.ts`

```typescript
// Month YYYY routine data - extracted from FUERZA X.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2025_MM: MonthRoutine = {
  month: 'YYYY_MM',
  warmup: {
    exercises: [
      { name: 'Exercise name', sets: '4+4' },
    ],
    totalRounds: 3
  },
  ranges: {
    rangeE: '80% - 87.5% del 1RM',
    rangeF: '87.5% - 95% del 1RM'
  },
  workoutDays: [
    // SEMANA 1
    {
      day: 1,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2'
          // rangeFSets: '1x1' // optional
        },
      ],
      circuit: [
        { name: 'Circuit exercise', reps: '4+3' },
      ],
      circuitRounds: 3
    },
  ]
};

// REQUIRED utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2025_MM.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2025_MM.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2025_MM.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2025_MM.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2025_MM.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
```

### 5.2 Create `src/ts/routines/defaults/YYYY_MM.ts`

```typescript
// Month YYYY exercise defaults - maximum weight selections
export const defaults2025_MM: Record<string, number> = {
  'RDL (Peso muerto rumano)': XXX,
  'RDL': XXX,
  'Empuje de fuerza': XXX,
  'Remo acostado': XXX,
  'Sentadillas atrás': XXX,
  'Fuerza en banco': XXX,
  'Dominadas': XXX
};
```

### 5.3 Update `src/ts/routines/index.ts`

- Import: `import { routine2025_MM } from './2025_MM';`
- Export: `export { routine2025_MM };`
- Registry: `'2025_MM': routine2025_MM,`

### 5.4 Update `src/ts/routines/defaults/index.ts`

- Import: `import { defaults2025_MM } from './2025_MM';`
- Export: Add to export list
- Registry: `'2025_MM': defaults2025_MM,`

### 5.5 Update `src/__tests__/routines.test.ts`

- Increment expected routine count in `getAllRoutineStats()` test
- Add assertion for new month's week count

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

Run:
1. `npm test` - Update test if count mismatch
2. `npm run build` - Verify TypeScript compiles
