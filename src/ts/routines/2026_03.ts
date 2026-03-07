// March 2026 routine data - extracted from FUERZA 1-1.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2026_03: MonthRoutine = {
  month: '2026_03',
  warmup: {
    exercises: [
      { name: 'Calambre c/barra punta', sets: '6' },
      { name: 'Tracción+abducc fit', sets: '4+3' },
      { name: 'Movilidad tobillo c/banda', sets: '5+4' },
      { name: 'Metidas arr desde profunda', sets: '3' }
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
          name: 'RDL',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        }
      ],
      circuit: [
        { name: 'Superman 1pp', reps: '10"+10"' },
        { name: 'Inclinaciones c/barra', reps: '7+6' },
        { name: 'Spiderman', reps: '7' },
        { name: 'Tríceps c/banda p/detrás', reps: '5+4' },
        { name: 'Lumbares en fit', reps: '12' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x3',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Puente móvil c/bastón', reps: '5+4' },
        { name: 'Lumbares de pp c/mancuerna', reps: '8' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Rueda 3 direcciones', reps: '9' },
        { name: 'Caminata mozo cargado', reps: '12+12' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        }
      ],
      circuit: [
        { name: 'Superman 1pp', reps: '10"+10"' },
        { name: 'Inclinaciones c/barra', reps: '7+6' },
        { name: 'Spiderman', reps: '7' },
        { name: 'Tríceps c/banda p/detrás', reps: '5+4' },
        { name: 'Lumbares en fit', reps: '12' }
      ],
      circuitRounds: 3
    },
    // SEMANA 2
    {
      day: 1,
      week: 2,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '5 reps' },
          workingSets: '3x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '5 reps' },
          workingSets: '3x3',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '5 reps' },
          workingSets: '3x3',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Puente móvil c/bastón', reps: '5+4' },
        { name: 'Lumbares de pp c/mancuerna', reps: '8' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Rueda 3 direcciones', reps: '9' },
        { name: 'Caminata mozo cargado', reps: '12+12' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x4',
          rangeFSets: '1x2'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x4',
          rangeFSets: '1x2'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x4',
          rangeFSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Superman 1pp', reps: '10"+10"' },
        { name: 'Inclinaciones c/barra', reps: '7+6' },
        { name: 'Spiderman', reps: '7' },
        { name: 'Tríceps c/banda p/detrás', reps: '5+4' },
        { name: 'Lumbares en fit', reps: '12' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '2x1',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '2x1',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '2x1',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Puente móvil c/bastón', reps: '5+4' },
        { name: 'Lumbares de pp c/mancuerna', reps: '8' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Rueda 3 direcciones', reps: '9' },
        { name: 'Caminata mozo cargado', reps: '12+12' }
      ],
      circuitRounds: 3
    },
    // SEMANA 3
    {
      day: 1,
      week: 3,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Superman 1pp', reps: '10"+10"' },
        { name: 'Inclinaciones c/barra', reps: '7+6' },
        { name: 'Spiderman', reps: '7' },
        { name: 'Tríceps c/banda p/detrás', reps: '5+4' },
        { name: 'Lumbares en fit', reps: '12' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Puente móvil c/bastón', reps: '5+4' },
        { name: 'Lumbares de pp c/mancuerna', reps: '8' },
        { name: 'Descenso c/bastón', reps: '5' },
        { name: 'Rueda 3 direcciones', reps: '9' },
        { name: 'Caminata mozo cargado', reps: '12+12' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Superman 1pp', reps: '10"+10"' },
        { name: 'Inclinaciones c/barra', reps: '7+6' },
        { name: 'Spiderman', reps: '7' },
        { name: 'Tríceps c/banda p/detrás', reps: '5+4' },
        { name: 'Lumbares en fit', reps: '12' }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2026_03.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2026_03.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2026_03.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2026_03.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2026_03.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
