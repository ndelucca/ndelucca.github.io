/**
 * Shared types for the diet plan data layer
 * @module nutrition/types
 */

export interface MealOption {
  id: string; // e.g., 'desayuno-1'
  label: string; // e.g., 'Opción 1'
  shortName: string; // Tab label, e.g., 'Tostón'
  description: string;
  preWorkoutNote?: string; // Substitution suggested when eaten before training
}

export interface PlateComponent {
  name: string; // e.g., 'Fuente de proteínas'
  portion: string; // e.g., 'medio de plato', 'cuarto de plato'
  options: string[];
  note?: string; // e.g., '(en caso de pesar en crudo adicionar 30g al peso indicado)'
}

export interface PlateMeal {
  title: string; // e.g., 'Almuerzo', 'Cena - día de entreno'
  components: PlateComponent[];
  drink: string;
  dressing: string;
}

export interface Supplement {
  name: string;
  dose: string;
  timing: string; // e.g., 'Al levantarte', 'En cenas', 'Al finalizar el entreno'
}

export interface MenuIdeas {
  lunch: string[];
  dinner: string[];
}

export interface FoodGroup {
  name: string; // e.g., 'Hidratos'
  items: string[];
}

export interface DietPlan {
  breakfastOptions: MealOption[]; // Pick one at breakfast and another at snack
  lunch: PlateMeal;
  dinnerTraining: PlateMeal;
  dinnerRest: PlateMeal;
  dailySupplements: Supplement[];
  trainingSupplements: Supplement[];
  menuIdeas: MenuIdeas;
  foodGroups: FoodGroup[];
  foodGroupsNote: string;
  recommendations: string[];
  observations: string[];
}
