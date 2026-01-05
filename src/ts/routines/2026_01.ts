// January 2026 routine data - extracted from FUERZA 9.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2026_01: MonthRoutine = {
  month: '2026_01',
  warmup: {
    exercises: [
      { name: 'Rev la olla', sets: '6+6' },
      { name: 'Sentadilla de arranque', sets: '4' },
      { name: 'Mov c/barra', sets: '4 lat' },
      { name: '3 giros 1 lado 3 al otro', sets: '' },
      { name: '2do T 1bb c/manc', sets: '3+2' }
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
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Vuelos c/disco sobre cabeza', reps: '6' },
        { name: 'Puente levadizo pp', reps: '6+5' },
        { name: 'Caminata de mozo', reps: '8+7' },
        { name: 'Puente lat + giro c/banda', reps: '5+4' },
        { name: 'Bíceps TRX 1pp (subo 6T bajo 8T)', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x3'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x3'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x3'
        }
      ],
      circuit: [
        { name: '(Puente+vuelo frontal) c/manc', reps: '7' },
        { name: 'Calesita c/Kettlebell', reps: '8+8' },
        { name: 'Paloma TRX 1pp', reps: '6+5' },
        { name: 'Triceps c/banda cruzada p/detras', reps: '5+4' },
        { name: 'Bíceps iso+rotaciones', reps: '8' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Vuelo lat c/banda', reps: '7+6' },
        { name: 'Puente + tracciones en fit 1pp', reps: '5+4' },
        { name: 'Indeciso c/manc', reps: '12' },
        { name: 'Lumbares de pp (cajón) c/manc', reps: '8' },
        { name: 'Bíceps cruzado 1pp c/manc', reps: '6+5' }
      ],
      circuitRounds: 3
    },
    // SEMANA 2
    {
      day: 1,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: '(Puente+vuelo frontal) c/manc', reps: '7' },
        { name: 'Calesita c/Kettlebell', reps: '8+8' },
        { name: 'Paloma TRX 1pp', reps: '6+5' },
        { name: 'Triceps c/banda cruzada p/detras', reps: '5+4' },
        { name: 'Bíceps iso+rotaciones', reps: '8' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2x2',
          rangeFSets: '2 reps'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2x2',
          rangeFSets: '2 reps'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2x2',
          rangeFSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Vuelos c/disco sobre cabeza', reps: '6' },
        { name: 'Puente levadizo pp', reps: '6+5' },
        { name: 'Caminata de mozo', reps: '8+7' },
        { name: 'Puente lat + giro c/banda', reps: '5+4' },
        { name: 'Bíceps TRX 1pp (subo 6T bajo 8T)', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2 reps'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2 reps'
        }
      ],
      circuit: [
        { name: '(Puente+vuelo frontal) c/manc', reps: '7' },
        { name: 'Calesita c/Kettlebell', reps: '8+8' },
        { name: 'Paloma TRX 1pp', reps: '6+5' },
        { name: 'Triceps c/banda cruzada p/detras', reps: '5+4' },
        { name: 'Bíceps iso+rotaciones', reps: '8' }
      ],
      circuitRounds: 3
    },
    // SEMANA 3
    {
      day: 1,
      week: 3,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '5 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '2 reps'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '2 reps'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Vuelo lat c/banda', reps: '7+6' },
        { name: 'Puente + tracciones en fit 1pp', reps: '5+4' },
        { name: 'Indeciso c/manc', reps: '12' },
        { name: 'Lumbares de pp (cajón) c/manc', reps: '8' },
        { name: 'Bíceps cruzado 1pp c/manc', reps: '6+5' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2',
          rangeFSets: '3 reps'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2',
          rangeFSets: '3 reps'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2',
          rangeFSets: '3 reps'
        }
      ],
      circuit: [
        { name: 'Adelante y atrás en fit 1pp', reps: '5+4' },
        { name: 'Bicho muerto c/banda', reps: '12' },
        { name: 'Caminata granjero c/pozos', reps: '9+9' },
        { name: 'Tusam + tríceps c/mancuernas', reps: '8' },
        { name: 'Biceps iso 90º+rot ext del bb', reps: '5' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x3'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x3'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x3'
        }
      ],
      circuit: [
        { name: 'Vuelo lat c/banda', reps: '7+6' },
        { name: 'Puente + tracciones en fit 1pp', reps: '5+4' },
        { name: 'Indeciso c/manc', reps: '12' },
        { name: 'Lumbares de pp (cajón) c/manc', reps: '8' },
        { name: 'Bíceps cruzado 1pp c/manc', reps: '6+5' }
      ],
      circuitRounds: 3
    },
    // SEMANA 4
    {
      day: 1,
      week: 4,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Adelante y atrás en fit 1pp', reps: '5+4' },
        { name: 'Bicho muerto c/banda', reps: '12' },
        { name: 'Caminata granjero c/pozos', reps: '9+9' },
        { name: 'Tusam + tríceps c/mancuernas', reps: '8' },
        { name: 'Biceps iso 90º+rot ext del bb', reps: '5' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 4,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: '(Puente+vuelo frontal) c/manc', reps: '7' },
        { name: 'Calesita c/Kettlebell', reps: '8+8' },
        { name: 'Paloma TRX 1pp', reps: '6+5' },
        { name: 'Triceps c/banda cruzada p/detras', reps: '5+4' },
        { name: 'Bíceps iso+rotaciones', reps: '8' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage55: '3 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Adelante y atrás en fit 1pp', reps: '5+4' },
        { name: 'Bicho muerto c/banda', reps: '12' },
        { name: 'Caminata granjero c/pozos', reps: '9+9' },
        { name: 'Tusam + tríceps c/mancuernas', reps: '8' },
        { name: 'Biceps iso 90º+rot ext del bb', reps: '5' }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2026_01.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2026_01.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2026_01.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2026_01.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2026_01.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
