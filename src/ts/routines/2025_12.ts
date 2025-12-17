// December 2025 routine data - extracted from FUERZA 8.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2025_12: MonthRoutine = {
  month: '2025_12',
  warmup: {
    exercises: [
      { name: 'Revolver la olla', sets: '4+4' },
      { name: 'B.D. 1pp', sets: '5+4' },
      { name: 'Mov c/disco lat', sets: '8' },
      { name: 'c/barra ad y at', sets: '8' },
      { name: 'Metida de arranque 1bb', sets: '4+3' }
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
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '2x2'
        }
      ],
      circuit: [
        { name: 'Vuelos posterior+frontal 1pp', reps: '4+3' },
        { name: 'Paloff press', reps: '6+5' },
        { name: 'Lumbares iso c/manc', reps: '15"' },
        { name: 'Puente lat + giro', reps: '5+4' },
        { name: 'Biceps c/manc y banda (subo 6T bajo 8T)', reps: '6' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x3',
          rangeFSets: '1x1'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x3',
          rangeFSets: '1x1'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x3',
          rangeFSets: '1x1'
        }
      ],
      circuit: [
        { name: '(Pullover+press 1bb)+apertura enfit', reps: '4' },
        { name: 'Paloff golf', reps: '6+5' },
        { name: 'Inclinaciones c/barra', reps: '5+4' },
        { name: 'Retropulsion c/barra', reps: '8' },
        { name: 'Biceps en TRX 1bb', reps: '4+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3 reps'
        }
      ],
      circuit: [
        { name: 'Vuelos posterior+frontal 1pp', reps: '4+3' },
        { name: 'Paloff press', reps: '6+5' },
        { name: 'Lumbares iso c/manc', reps: '15"' },
        { name: 'Puente lat + giro', reps: '5+4' },
        { name: 'Biceps c/manc y banda (subo 6T bajo 8T)', reps: '6' }
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
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '5 reps' },
          workingSets: '3x3',
          rangeFSets: '1x1'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '5 reps' },
          workingSets: '3x3',
          rangeFSets: '1x1'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '5 reps' },
          workingSets: '3x3',
          rangeFSets: '1x1'
        }
      ],
      circuit: [
        { name: '(Pullover+press 1bb)+apertura', reps: '4' },
        { name: 'Paloff golf', reps: '6+5' },
        { name: 'Inclinaciones c/barra', reps: '5+4' },
        { name: 'Triceps cruzado polea', reps: '5+4' },
        { name: 'Biceps en TRX', reps: '8' }
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
          workingSets: '3x4',
          rangeFSets: '1x2'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x4',
          rangeFSets: '1x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3x4',
          rangeFSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Vuelos posterior+frontal 1pp', reps: '4+3' },
        { name: 'Paloff press', reps: '6+5' },
        { name: 'Lumbares iso c/manc', reps: '15"' },
        { name: 'Puente lat + giro', reps: '5+4' },
        { name: 'Biceps c/manc y banda (subo 6T bajo 8T)', reps: '6' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '2x1',
          rangeFSets: '1 rep'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '2x1',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage55: '5 reps', percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '2x1',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: '(Pullover+press 1bb)+apertura', reps: '4' },
        { name: 'Paloff golf', reps: '6+5' },
        { name: 'Inclinaciones c/barra', reps: '5+4' },
        { name: 'Triceps cruzado polea', reps: '5+4' },
        { name: 'Biceps en TRX', reps: '8' }
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
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x1'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x1'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '2x1'
        }
      ],
      circuit: [
        { name: 'Angelito invertido', reps: '10' },
        { name: 'Abdominal Bisagra', reps: '8' },
        { name: 'Bicho muerto c/banda', reps: '8' },
        { name: 'Puente lat + rodilla codo', reps: '5+4' },
        { name: 'Biceps+press c/bajada lat (bajo 6T)', reps: '6' }
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
          workingSets: '1x2'
        },
        {
          name: 'Empuje de fuerza',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        },
        {
          name: 'Remo acostado',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1x2'
        }
      ],
      circuit: [
        { name: 'Serrucho inestable c/manc', reps: '6+5' },
        { name: 'Puente frontal 2 apoyos', reps: '15"+15"' },
        { name: 'Inclinaciones c/barra', reps: '5+4' },
        { name: 'Triceps c/banda por detras', reps: '5+4' },
        { name: 'Puente lat +giro', reps: '5+4' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Fuerza en banco',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '4 reps', percentage65: '3 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Angelito invertido', reps: '10' },
        { name: 'Abdominal Bisagra', reps: '8' },
        { name: 'Bicho muerto c/banda', reps: '8' },
        { name: 'Puente lat + rodilla codo', reps: '5+4' },
        { name: 'Biceps+press c/bajada lat (bajo 6T)', reps: '6' }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2025_12.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2025_12.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2025_12.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2025_12.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2025_12.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
