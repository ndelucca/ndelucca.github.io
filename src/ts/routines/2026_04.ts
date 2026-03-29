// April 2026 routine data - extracted from FUERZA2.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2026_04: MonthRoutine = {
  month: '2026_04',
  warmup: {
    exercises: [
      { name: 'Puente 2 apoyos c/banda', sets: '5+4' },
      { name: 'P.M. c/banda 1pp', sets: '4+3' },
      { name: 'Swing + sentadilla c/ketebell', sets: '6' }
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
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x2'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x2'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x2'
        }
      ],
      circuit: [
        { name: 'Giros c/barra en punta', reps: '12' },
        { name: 'Elevación de pp colgado', reps: '8' },
        { name: 'Twist c/M.B.', reps: '12' },
        { name: 'Hell + vuelo posterior', reps: '8' },
        { name: 'Bíceps enroscado en TRX', reps: '6+5' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '5 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '5 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '5 reps', percentage65: '3 reps', percentage75: '3 reps' },
          workingSets: '1x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Pullover + press en fit', reps: '8' },
        { name: 'Calesita c/Ketebell', reps: '8+8' },
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Retropulsión c/barra', reps: '6' },
        { name: 'Tijeras alternadas', reps: '12' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Giros c/barra en punta', reps: '12' },
        { name: 'Elevación de pp colgado', reps: '8' },
        { name: 'Twist c/M.B.', reps: '12' },
        { name: 'Hell + vuelo posterior', reps: '8' },
        { name: 'Bíceps enroscado en TRX', reps: '6+5' }
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
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2x3'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2x3'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '2x3'
        }
      ],
      circuit: [
        { name: 'Pullover + press en fit', reps: '8' },
        { name: 'Calesita c/Ketebell', reps: '8+8' },
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Retropulsión c/barra', reps: '6' },
        { name: 'Tijeras alternadas', reps: '12' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '1x4',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '1x4',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '5 reps', percentage75: '4 reps' },
          workingSets: '1x4',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Giros c/barra en punta', reps: '12' },
        { name: 'Elevación de pp colgado', reps: '8' },
        { name: 'Twist c/M.B.', reps: '12' },
        { name: 'Hell + vuelo posterior', reps: '8' },
        { name: 'Bíceps enroscado en TRX', reps: '6+5' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3 reps',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3 reps',
          rangeFSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '4 reps' },
          workingSets: '3 reps',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Pullover + press en fit', reps: '8' },
        { name: 'Calesita c/Ketebell', reps: '8+8' },
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Retropulsión c/barra', reps: '6' },
        { name: 'Tijeras alternadas', reps: '12' }
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
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4x2',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Giros c/barra en punta', reps: '12' },
        { name: 'Elevación de pp colgado', reps: '8' },
        { name: 'Twist c/M.B.', reps: '12' },
        { name: 'Hell + vuelo posterior', reps: '8' },
        { name: 'Bíceps enroscado en TRX', reps: '6+5' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: 'RDL',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x3',
          rangeFSets: '2 reps'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x3',
          rangeFSets: '2 reps'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '3x3',
          rangeFSets: '2 reps'
        }
      ],
      circuit: [
        { name: 'Pullover + press en fit', reps: '8' },
        { name: 'Calesita c/Ketebell', reps: '8+8' },
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Retropulsión c/barra', reps: '6' },
        { name: 'Tijeras alternadas', reps: '12' }
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
          workingSets: '4 reps',
          rangeFSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4 reps',
          rangeFSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage55: '5 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '4 reps',
          rangeFSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Giros c/barra en punta', reps: '12' },
        { name: 'Elevación de pp colgado', reps: '8' },
        { name: 'Twist c/M.B.', reps: '12' },
        { name: 'Hell + vuelo posterior', reps: '8' },
        { name: 'Bíceps enroscado en TRX', reps: '6+5' }
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
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Fuerza estricta',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Remo parado',
          warmupSets: { percentage55: '4 reps', percentage65: '4 reps', percentage75: '3 reps' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Pullover + press en fit', reps: '8' },
        { name: 'Calesita c/Ketebell', reps: '8+8' },
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Retropulsión c/barra', reps: '6' },
        { name: 'Tijeras alternadas', reps: '12' }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 4,
      mainExercises: [
        {
          name: 'Sentadillas atrás',
          warmupSets: { percentage65: '4 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Fza en banco',
          warmupSets: { percentage65: '4 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        },
        {
          name: 'Dominadas',
          warmupSets: { percentage65: '4 reps', percentage75: '2 reps' },
          workingSets: '1 rep'
        }
      ],
      circuit: [
        { name: 'Giros c/barra en punta', reps: '12' },
        { name: 'Elevación de pp colgado', reps: '8' },
        { name: 'Twist c/M.B.', reps: '12' },
        { name: 'Hell + vuelo posterior', reps: '8' },
        { name: 'Bíceps enroscado en TRX', reps: '6+5' }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
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
        { name: 'Pullover + press en fit', reps: '8' },
        { name: 'Calesita c/Ketebell', reps: '8+8' },
        { name: 'Paloma TRX', reps: '8' },
        { name: 'Retropulsión c/barra', reps: '6' },
        { name: 'Tijeras alternadas', reps: '12' }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2026_04.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2026_04.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2026_04.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2026_04.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2026_04.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
