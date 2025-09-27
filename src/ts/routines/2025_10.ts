// October 2025 routine data - extracted from routines/2025_10.md
import { MonthRoutine, DayWorkout } from './types';

export const routine2025_10: MonthRoutine = {
  month: "2025_10",
  warmup: {
    exercises: [
      { name: "Calambre 1bb", sets: "4 + 3" },
      { name: "Peso Muerto 1pp 1bb", sets: "4 + 3" },
      { name: "Movilidad con barra", sets: "15\"" },
      { name: "Metida de arranque", sets: "4x3" }
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
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "4 reps"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "4 reps"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "4 reps"
        }
      ],
      circuit: [
        { name: "Triceps + empuje c/banda", reps: "5+5" },
        { name: "Puente + arrastre c/manc", reps: "9" },
        { name: "Caminata de granjero", reps: "8+8" },
        { name: "Puente lat + giro", reps: "5+4" },
        { name: "Bíceps 21 c/manc", reps: "21" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: "RDL (Peso muerto rumano)",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "2x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "2x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "2x2",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Adelante y atrás en fit", reps: "12" },
        { name: "Indeciso c/manc", reps: "9" },
        { name: "Vuelo posterior 1pp", reps: "5+4" },
        { name: "Triceps c/banda cruzada por detras", reps: "5+5" },
        { name: "Bíceps cruzados por delante", reps: "9" }
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
          workingSets: "3 reps"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3 reps"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3 reps"
        }
      ],
      circuit: [
        { name: "Vuelo lat 1bb c/manc", reps: "5+4" },
        { name: "Caminata lat de oso c/manc", reps: "4+4" },
        { name: "Inclinaciones c/barra", reps: "12" },
        { name: "Buenos días sentado c/barra", reps: "8" },
        { name: "Bíceps + press 1bb", reps: "6+5" }
      ],
      circuitRounds: 3
    },
    // SEMANA 2
    {
      day: 1,
      week: 2,
      mainExercises: [
        {
          name: "RDL (Peso muerto rumano)",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3 reps",
          rangeFSets: "1 rep"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3 reps",
          rangeFSets: "1 rep"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3 reps",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Adelante y atrás en fit", reps: "12" },
        { name: "Indeciso c/manc", reps: "9" },
        { name: "Vuelo posterior 1pp", reps: "5+4" },
        { name: "Triceps c/banda cruzada por detras", reps: "5+5" },
        { name: "Bíceps cruzados por delante", reps: "9" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Vuelo lat 1bb c/manc", reps: "5+4" },
        { name: "Caminata lat de oso c/manc", reps: "4+4" },
        { name: "Inclinaciones c/barra", reps: "12" },
        { name: "Buenos días sentado c/barra", reps: "8" },
        { name: "Bíceps + press 1bb", reps: "6+5" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: "RDL (Peso muerto rumano)",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "2x3"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "2x3"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "2x3"
        }
      ],
      circuit: [
        { name: "Press Cubano inestable", reps: "4" },
        { name: "Angelito invertido c/disco y tob", reps: "12" },
        { name: "Retropulsion c/barra", reps: "6" },
        { name: "Superman c/manc", reps: "15\"" },
        { name: "Twist c/disco", reps: "12" }
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
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "2x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "2x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "2x3",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Vuelo lat 1bb c/manc", reps: "5+4" },
        { name: "Caminata lat de oso c/manc", reps: "4+4" },
        { name: "Inclinaciones c/barra", reps: "12" },
        { name: "Buenos días sentado c/barra", reps: "8" },
        { name: "Bíceps + press 1bb", reps: "6+5" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: "RDL (Peso muerto rumano)",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "4x2",
          rangeFSets: "1x2"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "4x2",
          rangeFSets: "1x2"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "4x2",
          rangeFSets: "1x2"
        }
      ],
      circuit: [
        { name: "Press Cubano inestable", reps: "4" },
        { name: "Angelito invertido c/disco y tob", reps: "12" },
        { name: "Retropulsion c/barra", reps: "6" },
        { name: "Superman c/manc", reps: "15\"" },
        { name: "Twist c/disco", reps: "12" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Triceps + empuje c/banda", reps: "5+5" },
        { name: "Puente + arrastre c/manc", reps: "9" },
        { name: "Caminata de granjero", reps: "8+8" },
        { name: "Puente lat + giro", reps: "5+4" },
        { name: "Bíceps 21 c/manc", reps: "21" }
      ],
      circuitRounds: 3
    },
    // SEMANA 4
    {
      day: 1,
      week: 4,
      mainExercises: [
        {
          name: "RDL (Peso muerto rumano)",
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
        { name: "Press Cubano inestable", reps: "4" },
        { name: "Angelito invertido c/disco y tob", reps: "12" },
        { name: "Retropulsion c/barra", reps: "6" },
        { name: "Superman c/manc", reps: "15\"" },
        { name: "Twist c/disco", reps: "12" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 4,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3x4",
          rangeFSets: "1x2"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3x4",
          rangeFSets: "1x2"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3x4",
          rangeFSets: "1x2"
        }
      ],
      circuit: [
        { name: "Vuelo lat 1bb c/manc", reps: "5+4" },
        { name: "Caminata lat de oso c/manc", reps: "4+4" },
        { name: "Inclinaciones c/barra", reps: "12" },
        { name: "Buenos días sentado c/barra", reps: "8" },
        { name: "Bíceps + press 1bb", reps: "6+5" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
      mainExercises: [
        {
          name: "RDL (Peso muerto rumano)",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "2x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "2x3",
          rangeFSets: "1 rep"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "2x3",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Adelante y atrás en fit", reps: "12" },
        { name: "Indeciso c/manc", reps: "9" },
        { name: "Vuelo posterior 1pp", reps: "5+4" },
        { name: "Triceps c/banda cruzada por detras", reps: "5+5" },
        { name: "Bíceps cruzados por delante", reps: "9" }
      ],
      circuitRounds: 3
    },
    // SEMANA 5
    {
      day: 1,
      week: 5,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "2x3"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "2x3"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "2x3"
        }
      ],
      circuit: [
        { name: "Triceps + empuje c/banda", reps: "5+5" },
        { name: "Puente + arrastre c/manc", reps: "9" },
        { name: "Caminata de granjero", reps: "8+8" },
        { name: "Puente lat + giro", reps: "5+4" },
        { name: "Bíceps 21 c/manc", reps: "21" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 5,
      mainExercises: [
        {
          name: "RDL (Peso muerto rumano)",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "4 reps", percentage65: "3 reps", percentage75: "3 reps" },
          workingSets: "3x2",
          rangeFSets: "1 rep"
        }
      ],
      circuit: [
        { name: "Adelante y atrás en fit", reps: "12" },
        { name: "Indeciso c/manc", reps: "9" },
        { name: "Vuelo posterior 1pp", reps: "5+4" },
        { name: "Triceps c/banda cruzada por detras", reps: "5+5" },
        { name: "Bíceps cruzados por delante", reps: "9" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 5,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "3 reps", percentage75: "2 reps" },
          workingSets: "2x2"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "3 reps", percentage75: "2 reps" },
          workingSets: "2x2"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "3 reps", percentage75: "2 reps" },
          workingSets: "2x2"
        }
      ],
      circuit: [
        { name: "Vuelo lat 1bb c/manc", reps: "5+4" },
        { name: "Caminata lat de oso c/manc", reps: "4+4" },
        { name: "Inclinaciones c/barra", reps: "12" },
        { name: "Buenos días sentado c/barra", reps: "8" },
        { name: "Bíceps + press 1bb", reps: "6+5" }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2025_10.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2025_10.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2025_10.workoutDays.map(w => w.week))].sort();
};

export const getTotalWeeks = (): number => {
  return Math.max(...routine2025_10.workoutDays.map(w => w.week));
};

export const getTotalWorkoutDays = (): number => {
  return routine2025_10.workoutDays.length;
};

export const getWeekRange = (): { min: number; max: number } => {
  const weeks = getAllWeeks();
  return { min: Math.min(...weeks), max: Math.max(...weeks) };
};