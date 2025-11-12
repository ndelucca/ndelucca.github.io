// November 2025 routine data - extracted from FUERZA 4.docx
import { MonthRoutine, DayWorkout } from './types';

export const routine2025_11: MonthRoutine = {
  month: "2025_11",
  warmup: {
    exercises: [
      { name: "Revolver la olla", sets: "4+4" },
      { name: "Elevación cadera+giro en M.B.", sets: "5" },
      { name: "Metida de arranque 1bb", sets: "3+2" }
    ],
    totalRounds: 3
  },
  ranges: {
    rangeE: "80% - 87.5% del 1RM",
    rangeF: "87.5% - 95% del 1RM"
  },
  workoutDays: [
    // SEMANA 1
    {
      day: 1,
      week: 1,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Giro de tronco c/banda", reps: "6+6" },
        { name: "Angelito inv c/banda y disco", reps: "9" },
        { name: "Paloma TRX a 1 pie", reps: "5+4" },
        { name: "Puente lat + tracción", reps: "5+4" },
        { name: "Vuelos c/disco sobre cabeza", reps: "8" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Lumbares en fit", reps: "6" },
        { name: "Puente+descenso+giro en M.B.", reps: "5+4" },
        { name: "Bíceps +press c/banda muñecas", reps: "8" },
        { name: "Pal off press", reps: "6+6" },
        { name: "Caminata granjero 1bb", reps: "9+9" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "2x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "2x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "2x3",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Elevación de pp colgado c/M.B.", reps: "7" },
        { name: "Antepulsion TRX 45º", reps: "4" },
        { name: "½ Calesita c/cambio adelante", reps: "8" },
        { name: "Enroscado 1bb TRX", reps: "6+5" },
        { name: "Puente+abeduc 1pp en fit", reps: "7" }
      ],
      circuitRounds: 3
    },
    // SEMANA 2
    {
      day: 1,
      week: 2,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x4",
          rangeFSets: "1x2"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x4",
          rangeFSets: "1x2"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x4",
          rangeFSets: "1x2"
        }
      ],
      circuit: [
        { name: "Lumbares en fit", reps: "6" },
        { name: "Puente+descenso+giro en M.B.", reps: "5+4" },
        { name: "Bíceps +press c/banda muñecas", reps: "8" },
        { name: "Pal off press", reps: "6+6" },
        { name: "Caminata granjero 1bb", reps: "9+9" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "3x2",
          rangeFSets: "2x2"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "3x2",
          rangeFSets: "2x2"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "3x2",
          rangeFSets: "2x2"
        }
      ],
      circuit: [
        { name: "Giro de tronco c/banda", reps: "6+6" },
        { name: "Angelito inv c/banda y disco", reps: "9" },
        { name: "Paloma TRX a 1 pie", reps: "5+4" },
        { name: "Puente lat + tracción", reps: "5+4" },
        { name: "Vuelos c/disco sobre cabeza", reps: "8" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Puente lat+codo rodilla", reps: "4+3" },
        { name: "Biceps colgado TRX", reps: "12" },
        { name: "Lateralizaciones en fit", reps: "8" },
        { name: "Fondo triceps", reps: "4" },
        { name: "Vuelo post 1bb c/banda", reps: "7+6" }
      ],
      circuitRounds: 3
    },
    // SEMANA 3
    {
      day: 1,
      week: 3,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "3x5",
          rangeFSets: "2x2"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "3x5",
          rangeFSets: "2x2"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "3x5",
          rangeFSets: "2x2"
        }
      ],
      circuit: [
        { name: "Elevación de pp colgado c/M.B.", reps: "7" },
        { name: "Antepulsion TRX 45º", reps: "4" },
        { name: "½ Calesita c/cambio adelante", reps: "8" },
        { name: "Enroscado 1bb TRX", reps: "6+5" },
        { name: "Puente+abeduc 1pp en fit", reps: "7" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x2",
          rangeFSets: "2x3"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x2",
          rangeFSets: "2x3"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x2",
          rangeFSets: "2x3"
        }
      ],
      circuit: [
        { name: "Puente lat+codo rodilla", reps: "4+3" },
        { name: "Biceps colgado TRX", reps: "12" },
        { name: "Lateralizaciones en fit", reps: "8" },
        { name: "Fondo triceps", reps: "4" },
        { name: "Vuelo post 1bb c/banda", reps: "7+6" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x4",
          rangeFSets: "1x2"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x4",
          rangeFSets: "1x2"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x4",
          rangeFSets: "1x2"
        }
      ],
      circuit: [
        { name: "Giro de tronco c/banda", reps: "6+6" },
        { name: "Angelito inv c/banda y disco", reps: "9" },
        { name: "Paloma TRX a 1 pie", reps: "5+4" },
        { name: "Puente lat + tracción", reps: "5+4" },
        { name: "Vuelos c/disco sobre cabeza", reps: "8" }
      ],
      circuitRounds: 3
    },
    // SEMANA 4
    {
      day: 1,
      week: 4,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage55: "3 reps", percentage65: "3 reps", percentage75: "2 reps" },
          workingSets: "2x1"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "3 reps", percentage65: "3 reps", percentage75: "2 reps" },
          workingSets: "2x1"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "3 reps", percentage65: "3 reps", percentage75: "2 reps" },
          workingSets: "2x1"
        }
      ],
      circuit: [
        { name: "Puente lat+codo rodilla", reps: "4+3" },
        { name: "Biceps colgado TRX", reps: "12" },
        { name: "Lateralizaciones en fit", reps: "8" },
        { name: "Fondo triceps", reps: "4" },
        { name: "Vuelo post 1bb c/banda", reps: "7+6" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 4,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "2x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "2x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "2x2",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Elevación de pp colgado c/M.B.", reps: "7" },
        { name: "Antepulsion TRX 45º", reps: "4" },
        { name: "½ Calesita c/cambio adelante", reps: "8" },
        { name: "Enroscado 1bb TRX", reps: "6+5" },
        { name: "Puente+abeduc 1pp en fit", reps: "7" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage55: "3 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "1x2"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "3 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "1x2"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "3 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "1x2"
        }
      ],
      circuit: [
        { name: "Lumbares en fit", reps: "6" },
        { name: "Puente+descenso+giro en M.B.", reps: "5+4" },
        { name: "Bíceps +press c/banda muñecas", reps: "8" },
        { name: "Pal off press", reps: "6+6" },
        { name: "Caminata granjero 1bb", reps: "9+9" }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2025_11.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2025_11.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2025_11.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2025_11.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2025_11.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};
