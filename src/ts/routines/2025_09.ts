// September 2025 routine data - extracted from rutines/2025_09.md
import { MonthRoutine, DayWorkout } from './types';

export const routine2025_09: MonthRoutine = {
  month: "2025_09",
  warmup: {
    exercises: [
      { name: "Rev la olla", sets: "6+6" },
      { name: "Emp el cielo", sets: "15\"" },
      { name: "Mov c/barra", sets: "15\"" },
      { name: "Vit cruzada", sets: "6" }
    ],
    totalRounds: 3
  },
  ranges: {
    rangeE: "80% - 87.5% del 1RM",
    rangeF: "87.5% - 95% del 1RM (patrón siguiente)"
  },
  workoutDays: [
    // SEMANA 1
    {
      day: 1,
      week: 1,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x2"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x2"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x2"
        }
      ],
      circuit: [
        { name: "Vuelos c/disco sobre cabeza", reps: "6" },
        { name: "Giro c/banda", reps: "6+5" },
        { name: "Caminata de mozo", reps: "8+8" },
        { name: "Puente lat + remo c/banda", reps: "5+4" },
        { name: "Bíceps TRX (subo 6T bajo 8T)", reps: "6" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: "RDL (Peso muerto rumano)",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x3"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x3"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x3"
        }
      ],
      circuit: [
        { name: "(Puente+empuje+desplaz)c/manc", reps: "5" },
        { name: "Calesita c/Ketebell", reps: "8+8" },
        { name: "Paloma TRX", reps: "8" },
        { name: "Tríceps c/banda sobre cabeza", reps: "5+4" },
        { name: "Bíceps iso+rotaciones", reps: "8" }
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
          workingSets: "4 reps"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "4 reps"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "4 reps"
        }
      ],
      circuit: [
        { name: "Vuelo lat c/banda", reps: "7+6" },
        { name: "Tracciones en fit", reps: "8" },
        { name: "Indeciso c/manc", reps: "12" },
        { name: "Buenos días sentado c/barra", reps: "8" },
        { name: "Bíceps cruzado 1pp", reps: "6+5" }
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
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x2"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x2"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x2"
        }
      ],
      circuit: [
        { name: "(Puente+empuje+desplaz)c/manc", reps: "5" },
        { name: "Calesita c/Ketebell", reps: "8+8" },
        { name: "Paloma TRX", reps: "8" },
        { name: "Tríceps c/banda sobre cabeza", reps: "5+4" },
        { name: "Bíceps iso+rotaciones", reps: "8" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage55: "5 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x4"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage55: "5 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x4"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage55: "5 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x4"
        }
      ],
      circuit: [
        { name: "Vuelo lat c/banda", reps: "7+6" },
        { name: "Tracciones en fit", reps: "8" },
        { name: "Indeciso c/manc", reps: "12" },
        { name: "Buenos días sentado c/barra", reps: "8" },
        { name: "Bíceps cruzado 1pp", reps: "6+5" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 2,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x2"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x2"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x2"
        }
      ],
      circuit: [
        { name: "Tracciones a la frente c/banda", reps: "8" },
        { name: "Angelito c/disco y tobillera", reps: "12" },
        { name: "Caminata granjero 1bb", reps: "9+9" },
        { name: "Tríceps c/banda a 90º", reps: "8" },
        { name: "Bíceps iso 90º+rot ext", reps: "5+5" }
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
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x4"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x4"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "3x4"
        }
      ],
      circuit: [
        { name: "Vuelo lat c/banda", reps: "7+6" },
        { name: "Tracciones en fit", reps: "8" },
        { name: "Indeciso c/manc", reps: "12" },
        { name: "Buenos días sentado c/barra", reps: "8" },
        { name: "Bíceps cruzado 1pp", reps: "6+5" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4x4"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4x4"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4x4"
        }
      ],
      circuit: [
        { name: "Tracciones a la frente c/banda", reps: "8" },
        { name: "Angelito c/disco y tobillera", reps: "12" },
        { name: "Caminata granjero 1bb", reps: "9+9" },
        { name: "Tríceps c/banda a 90º", reps: "8" },
        { name: "Bíceps iso 90º+rot ext", reps: "5+5" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage55: "4 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3"
        }
      ],
      circuit: [
        { name: "Vuelos c/disco sobre cabeza", reps: "6" },
        { name: "Giro c/banda", reps: "6+5" },
        { name: "Caminata de mozo", reps: "8+8" },
        { name: "Puente lat + remo c/banda", reps: "5+4" },
        { name: "Bíceps TRX (subo 6T bajo 8T)", reps: "6" }
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
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "3x2"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "3x2"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "3x2"
        }
      ],
      circuit: [
        { name: "Tracciones a la frente c/banda", reps: "8" },
        { name: "Angelito c/disco y tobillera", reps: "12" },
        { name: "Caminata granjero 1bb", reps: "9+9" },
        { name: "Tríceps c/banda a 90º", reps: "8" },
        { name: "Bíceps iso 90º+rot ext", reps: "5+5" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 4,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "3x3"
        }
      ],
      circuit: [
        { name: "Vuelo lat c/banda", reps: "7+6" },
        { name: "Tracciones en fit", reps: "8" },
        { name: "Indeciso c/manc", reps: "12" },
        { name: "Buenos días sentado c/barra", reps: "8" },
        { name: "Bíceps cruzado 1pp", reps: "6+5" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "3 reps"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "3 reps"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "4 reps", percentage75: "3 reps" },
          workingSets: "3 reps"
        }
      ],
      circuit: [
        { name: "(Puente+empuje+desplaz)c/manc", reps: "5" },
        { name: "Calesita c/Ketebell", reps: "8+8" },
        { name: "Paloma TRX", reps: "8" },
        { name: "Tríceps c/banda sobre cabeza", reps: "5+4" },
        { name: "Bíceps iso+rotaciones", reps: "8" }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2025_09.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2025_09.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2025_09.workoutDays.map(w => w.week))].sort();
};