// August 2025 routine data - extracted from rutines/2025_08.md
import { MonthRoutine, DayWorkout } from './types';

export const routine2025_08: MonthRoutine = {
  month: "2025_08",
  warmup: {
    exercises: [
      { name: "Calambre con disco", sets: "6" },
      { name: "Buenos días 1pp", sets: "4+3" },
      { name: "Movilidad con disco", sets: "4" },
      { name: "Vitalizaciones", sets: "6" }
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
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4x2"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4x2"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4x2"
        }
      ],
      circuit: [
        { name: "Vuelos posterior + frontal con mancuernas", reps: "4" },
        { name: "Paloff press", reps: "6+5" },
        { name: "Bicho muerto con banda", reps: "8" },
        { name: "Puente lateral + giro", reps: "5+4" },
        { name: "Bíceps con mancuernas y banda (subo 6T bajo 8T)", reps: "6" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 1,
      mainExercises: [
        {
          name: "RDL (Peso muerto rumano)",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4x2"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4x2"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4x2"
        }
      ],
      circuit: [
        { name: "(Pullover + press 1 brazo) + apertura", reps: "4" },
        { name: "Paloff golf", reps: "6+5" },
        { name: "Inclinaciones con barra", reps: "5+4" },
        { name: "Tríceps cruzado polea", reps: "5+4" },
        { name: "Bíceps en TRX", reps: "8" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 1,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4 reps"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4 reps"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "4 reps"
        }
      ],
      circuit: [
        { name: "Empujar el cielo (arrodillado)", reps: "20\"" },
        { name: "Abdominal bisagra", reps: "8" },
        { name: "Twist en posición de plancha con tobilleras", reps: "12" },
        { name: "Puente lateral + rodilla codo", reps: "5+4" },
        { name: "Bíceps + press con bajada lateral (bajo 6T)", reps: "6" }
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
          workingSets: "4x3"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x3"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x3"
        }
      ],
      circuit: [
        { name: "(Pullover + press 1 brazo) + apertura", reps: "4" },
        { name: "Paloff golf", reps: "6+5" },
        { name: "Inclinaciones con barra", reps: "5+4" },
        { name: "Tríceps cruzado polea", reps: "5+4" },
        { name: "Bíceps en TRX", reps: "8" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 2,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x3"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x3"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x3"
        }
      ],
      circuit: [
        { name: "Empujar el cielo (arrodillado)", reps: "20\"" },
        { name: "Abdominal bisagra", reps: "8" },
        { name: "Twist en posición de plancha con tobilleras", reps: "12" },
        { name: "Puente lateral + rodilla codo", reps: "5+4" },
        { name: "Bíceps + press con bajada lateral (bajo 6T)", reps: "6" }
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
          workingSets: "4x2"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x2"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x2"
        }
      ],
      circuit: [
        { name: "Serrucho inestable con mancuernas", reps: "6+5" },
        { name: "Puente frontal 2 apoyos", reps: "15\"+15\"" },
        { name: "Indeciso con mancuernas", reps: "9" },
        { name: "Tríceps polea", reps: "8" },
        { name: "Curl de concentración bíceps", reps: "5+4" }
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
          workingSets: "5x3"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "5x3"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage65: "5 reps", percentage75: "5 reps" },
          workingSets: "5x3"
        }
      ],
      circuit: [
        { name: "Empujar el cielo (arrodillado)", reps: "20\"" },
        { name: "Abdominal bisagra", reps: "8" },
        { name: "Twist en posición de plancha con tobilleras", reps: "12" },
        { name: "Puente lateral + rodilla codo", reps: "5+4" },
        { name: "Bíceps + press con bajada lateral (bajo 6T)", reps: "6" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 3,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x4"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x4"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x4"
        }
      ],
      circuit: [
        { name: "Serrucho inestable con mancuernas", reps: "6+5" },
        { name: "Puente frontal 2 apoyos", reps: "15\"+15\"" },
        { name: "Indeciso con mancuernas", reps: "9" },
        { name: "Tríceps polea", reps: "8" },
        { name: "Curl de concentración bíceps", reps: "5+4" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 3,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x3"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x3"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage55: "5 reps", percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x3"
        }
      ],
      circuit: [
        { name: "Vuelos posterior + frontal con mancuernas", reps: "4" },
        { name: "Paloff press", reps: "6+5" },
        { name: "Bicho muerto con banda", reps: "8" },
        { name: "Puente lateral + giro", reps: "5+4" },
        { name: "Bíceps con mancuernas y banda (subo 6T bajo 8T)", reps: "6" }
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
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x2"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x2"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "5 reps", percentage75: "4 reps" },
          workingSets: "4x2"
        }
      ],
      circuit: [
        { name: "Serrucho inestable con mancuernas", reps: "6+5" },
        { name: "Puente frontal 2 apoyos", reps: "15\"+15\"" },
        { name: "Indeciso con mancuernas", reps: "9" },
        { name: "Tríceps polea", reps: "8" },
        { name: "Curl de concentración bíceps", reps: "5+4" }
      ],
      circuitRounds: 3
    },
    {
      day: 2,
      week: 4,
      mainExercises: [
        {
          name: "Sentadillas atrás",
          warmupSets: { percentage55: "5 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "4 reps"
        },
        {
          name: "Fuerza en banco",
          warmupSets: { percentage55: "5 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "4 reps"
        },
        {
          name: "Dominadas",
          warmupSets: { percentage55: "5 reps", percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "4 reps"
        }
      ],
      circuit: [
        { name: "Empujar el cielo (arrodillado)", reps: "20\"" },
        { name: "Abdominal bisagra", reps: "8" },
        { name: "Twist en posición de plancha con tobilleras", reps: "12" },
        { name: "Puente lateral + rodilla codo", reps: "5+4" },
        { name: "Bíceps + press con bajada lateral (bajo 6T)", reps: "6" }
      ],
      circuitRounds: 3
    },
    {
      day: 3,
      week: 4,
      mainExercises: [
        {
          name: "RDL",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "4 reps"
        },
        {
          name: "Empuje de fuerza",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "4 reps"
        },
        {
          name: "Remo acostado",
          warmupSets: { percentage65: "4 reps", percentage75: "4 reps" },
          workingSets: "4 reps"
        }
      ],
      circuit: [
        { name: "(Pullover + press 1 brazo) + apertura", reps: "4" },
        { name: "Paloff golf", reps: "6+5" },
        { name: "Inclinaciones con barra", reps: "5+4" },
        { name: "Tríceps cruzado polea", reps: "5+4" },
        { name: "Bíceps en TRX", reps: "8" }
      ],
      circuitRounds: 3
    }
  ]
};

// Utility functions
export const getWorkoutByWeekAndDay = (week: number, day: number): DayWorkout | undefined => {
  return routine2025_08.workoutDays.find(w => w.week === week && w.day === day);
};

export const getCurrentWeekWorkouts = (week: number): DayWorkout[] => {
  return routine2025_08.workoutDays.filter(w => w.week === week);
};

export const getAllWeeks = (): number[] => {
  return [...new Set(routine2025_08.workoutDays.map(w => w.week))].sort();
};
