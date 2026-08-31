/**
 * Diet plan data - transcribed from "Propuesta Alimentaria by Yani" (12/08/2026)
 * @module nutrition/plan
 */

import { DietPlan, PlateComponent } from './types';

// Shared across lunch and both dinner variants - only the portion size changes
const VEGETABLES =
  'Acelga, achicoria, ají o pimiento, apio, berenjena, berro, brócoli, coliflor, espinaca, ' +
  'espárragos, hinojo, hongos, lechuga, pepino, rabanito, radicheta, repollo, repollitos de ' +
  'Bruselas, rúcula, zapallito o zuccini, alcaucil, cebolla, cebolla de verdeo, brotes de soja, ' +
  'chauchas, palmitos, puerro, zanahoria, tomate, cherries, choclo, calabaza, zapallo, remolacha.';

const DRINK = 'Agua o aguas perfumadas.';
const DRESSING = 'Aceite de oliva, 2 cdas para condimentar. Sal y especias aromáticas a gusto.';

/**
 * Builds the "nutrientes reguladores" component, which only differs in portion size
 * @param portion - Portion description for the meal (e.g., 'medio plato')
 * @returns The regulating-nutrients plate component
 */
const buildVegetableComponent = (portion: string): PlateComponent => ({
  name: 'Nutrientes reguladores',
  portion,
  options: [VEGETABLES],
  note: 'Las que te gusten y toleres adecuadamente, variadas en distintas formas de preparación. Seleccionar mínimo 3 de distinto color.',
});

export const dietPlan: DietPlan = {
  breakfastOptions: [
    {
      id: 'desayuno-1',
      label: 'Opción 1',
      shortName: 'Tostón',
      description:
        'Infusión + Tostón de pan integral preferentemente masa madre, 1 rodaja grande (40g). Con palta 30g (media unidad chica) o 1 rodaja de queso reducido en grasas (30g) + 1 huevo y 2 claras, revueltos o a la sartén, con condimentos a gusto + Fruta de estación, 1 unidad (150g).',
      preWorkoutNote:
        'Antes de un entreno se sugiere reemplazar el huevo entero por una clara y elegir queso reducido en grasas en lugar de palta.',
    },
    {
      id: 'desayuno-2',
      label: 'Opción 2',
      shortName: 'Pancake dulce',
      description:
        'Infusión + Pancake dulce, elaborado con 1 huevo + 2 claras de huevo, 30g de salvado de avena (3 cdas) + opcional polvo de hornear (1 cdita), media banana pisada o manzana rallada, canela o vainilla o ralladura de cítricos. Batir y volcar sobre una sartén precalentada, cocinar y servir untado con 1 cdita de yogur natural + 1 unidad de fruta de estación (120g).',
      preWorkoutNote:
        'Antes de un entreno se sugiere reemplazar el huevo entero por una clara, es decir quedarían 3 claras.',
    },
    {
      id: 'desayuno-3',
      label: 'Opción 3',
      shortName: 'Pancake salado',
      description:
        'Infusión + Pancake salado, elaborado con 1 huevo + 2 claras de huevo, 30g de salvado de avena (3 cdas), opcional polvo de hornear (1 cdita), sal y condimentos a gusto. Batir y volcar sobre una sartén precalentada, cocinar y servir untado con 1 cdita de queso crema. Acompañar con 1 unidad de fruta de estación (180g).',
      preWorkoutNote:
        'Antes de un entreno se sugiere reemplazar el huevo entero por una clara, es decir quedarían 3 claras.',
    },
    {
      id: 'desayuno-4',
      label: 'Opción 4',
      shortName: 'Super Bowl',
      description:
        'Infusión + Super Bowl: yogur natural tipo griego bajo en grasas, 175g (por ejemplo SER PRO) + granola media taza (50g) + fruta de estación, 1 unidad 160-180g.',
    },
  ],

  lunch: {
    title: 'Almuerzo',
    components: [
      buildVegetableComponent('Un bowl pequeño (podés incluirlos en el plato principal)'),
      {
        name: 'Fuente de proteínas',
        portion: 'Medio plato',
        options: [
          '190g (peso cocido) de pechuga de pollo o pescado o carnes rojas magras + 1 huevo',
          '220g (peso cocido) de pechuga de pollo o pescado o carnes rojas magras',
        ],
        note: 'En caso de pesar en crudo, adicionar 30g al peso indicado.',
      },
      {
        name: 'Fuente de hidratos de carbono',
        portion: 'Medio plato',
        options: [
          'Arroz integral yamaní (peso crudo 45g o peso cocido 120g)',
          'Pastas simples integrales (fideos) (peso crudo 45g o peso cocido 150g)',
          'Papa o batata o boniato (peso hervida o crudo 150g)',
        ],
      },
    ],
    drink: DRINK,
    dressing: DRESSING,
  },

  dinnerTraining: {
    title: 'Cena - día de entreno',
    components: [
      buildVegetableComponent('Cuarto de plato'),
      {
        name: 'Fuente de proteínas',
        portion: 'Medio plato',
        options: [
          '220g (peso cocido) de pechuga de pollo o pescado o carnes rojas magras + 2 claras de huevo',
          '250g (peso cocido) de pechuga de pollo o pescado o carnes rojas magras',
        ],
        note: 'En caso de pesar en crudo, adicionar 30g al peso indicado.',
      },
      {
        name: 'Fuente de hidratos de carbono',
        portion: 'Cuarto de plato',
        options: [
          'Arroz integral yamaní o quinoa (peso crudo 30g o peso cocido 80g)',
          'Papa o batata o boniato (peso hervida o crudo 100g). Preferentemente enfriada 4 hs o más en heladera y después podés recalentar',
          'Legumbres (lentejas, arvejas, garbanzos, porotos) (peso crudo 40g o peso cocido 100g)',
        ],
      },
    ],
    drink: DRINK,
    dressing: DRESSING,
  },

  dinnerRest: {
    title: 'Cena - día sin entreno',
    components: [
      buildVegetableComponent('Medio plato'),
      {
        name: 'Fuente de proteínas',
        portion: 'Medio plato',
        options: [
          '240g (peso cocido) de pechuga de pollo o pescado o carnes rojas magras + 2 claras de huevo',
          '270g (peso cocido) de pechuga de pollo o pescado o carnes rojas magras',
        ],
        note: 'Si se pesa en crudo, adicionar 30g al peso indicado.',
      },
    ],
    drink: DRINK,
    dressing: DRESSING,
  },

  dailySupplements: [
    { name: 'Vitamina C', dose: '2g (podés usar REDOXON efervescente)', timing: 'Al levantarte' },
    {
      name: 'Monohidrato de creatina',
      dose: '5g diluido en 1 vaso de agua',
      timing: 'Al levantarte',
    },
    {
      name: 'Vitamina D3 + K2',
      dose: '1 comprimido (marca sugerida Natier)',
      timing: 'Al levantarte',
    },
    { name: 'Ubiquinol', dose: '1 comprimido', timing: 'Al levantarte' },
    { name: 'Omega 3', dose: '1 cápsula (marca sugerida INNOVANATURALS)', timing: 'En cenas' },
  ],

  trainingSupplements: [
    {
      name: 'Aminoácidos BCAA',
      dose: '12g en 200-300ml de agua (marca sugerida BCAA BEST, HOTCHSPORT)',
      timing: 'Al finalizar el entreno',
    },
  ],

  menuIdeas: {
    lunch: [
      'Hortalizas variadas (zanahoria en bastones, pimiento en tiras, zucchini en rodajas finas), arroz integral o quínoa y trozos de pechuga de pollo o carnes magras trozados salteadas al wok.',
      'Papas, calabaza, zanahoria, morrones y cebollas horneadas con suprema o milanesa casera horneada.',
      'Hamburguesas de pollo o pescado o carne caseras con hortalizas cocidas al vapor (por ejemplo, espárragos, brócoli, calabaza, zanahoria).',
      'Filete de pollo o pescado o bife con revueltos de hortalizas, zapallito o zucchini o espinaca, salteada con cebolla y morrón y mezclar con el huevo y quínoa.',
      'Omelette relleno de hortalizas grilladas (berenjenas, cebolla y morrón) relleno con queso acompañado de ensaladas de arroz y hortalizas rúcula, cherries, aceitunas y hebras de queso.',
      'Ensaladas completas con huevo o trozos de pechuga de pollo, hortalizas (hojas verdes, tomate, zanahoria rallada, remolacha, champiñones y lentejas).',
      'Fajitas o wraps integrales rellenos con salteado de vegetales (zanahoria, cebolla, morrón, zucchini o zapallitos), trozos de pechuga de pollo, huevo y quínoa.',
      'Tartas de una sola masa integral, rellenos con hortalizas variadas (cebolla de base y podés variar con espinaca, o zapallitos o calabaza o kale), queso o ricota magra, huevo o trozos de pollo o pescado.',
    ],
    dinner: [
      'Hortalizas variadas (puerro, brócoli, zanahoria en bastones, pimiento el color que tengas en tiras), y trozos de pechuga de pollo o carnes magras trozados salteadas al wok.',
      'Hamburguesas de pollo o pescado o carnes caseras con ensaladas zanahoria, remolacha y huevo.',
      'Filete de pollo o pescado con ensaladas variadas de hortalizas crudas y cocidas (chauchas, zanahoria, tomate).',
      'Omelette relleno de hortalizas grilladas (berenjenas, tomates caramelizados, albahaca) y queso acompañado de ensaladas hortalizas (hojas verdes, tomate).',
      'Brochetas de pollo con ensaladas variadas (por ejemplo podés variar una ensalada distinta, apio o hinojo, con manzana y nueces).',
      'Carnes horneadas rojas o blancas con budín de hortalizas, de calabaza o zanahoria o brócoli o combinando estas.',
    ],
  },

  foodGroups: [
    {
      name: 'Hidratos',
      items: [
        'Cereales y derivados (arroz, avena, pastas, harinas, panes, polenta).',
        'Pseudo cereales (quínoa, trigo sarraceno y amaranto).',
        'Legumbres (lentejas, arvejas, garbanzos, porotos, y sus derivados, pastas, medallones, etc.).',
        'Papa y batata.',
        'Frutas.',
      ],
    },
    {
      name: 'Proteína',
      items: [
        'Carnes blancas o rojas.',
        'Clara de huevo.',
        'Lácteos y derivados (en poca cantidad).',
        'Legumbres (lentejas, arvejas, garbanzos, porotos, y sus derivados, pastas, medallones, etc.).',
        'Pseudo cereales (quínoa y amaranto).',
        'Levadura nutricional.',
      ],
    },
    {
      name: 'Grasas',
      items: [
        'Saturadas (deben ser de menor consumo: carnes cortes grasas, yema de huevo, manteca, crema).',
        'Insaturadas (de mayor consumo: frutos secos: nueces, almendras, castañas, maní, pistachos; semillas y aceites vegetales: oliva, colza, pepita de uva, girasol, maíz; frutas oleosas: aceituna y palta).',
      ],
    },
    {
      name: 'Fibra',
      items: ['Hortalizas', 'Frutas', 'Cereales integrales y legumbres.', 'Levadura nutricional.'],
    },
  ],

  foodGroupsNote:
    'El intercambio de alimentos se basa en agrupar aquellos que tienen una composición química y nutricional similar en términos de sus macronutrientes principales (carbohidratos, proteínas, grasas, y fibras o nutrientes reguladores). Esto permite sustituir o "intercambiar" un alimento por otro dentro del mismo grupo sin alterar significativamente el aporte total de energía y macronutrientes del plan.',

  recommendations: [
    'Comer despacio en un ambiente tranquilo, masticar bien cada bocado.',
    'No saltear ingestas principales, realizar las indicadas diariamente (3 ingestas).',
    'Moderar el consumo de alimentos ultra procesados, golosinas, galletitas, aderezos, bebidas gaseosas y alcohólicas.',
    'Evitar el consumo de comidas rápidas, embutidos y fiambres.',
    'Consumir agua suficiente durante el día: 2,5 a 3l al día.',
    'Respetar cronograma de suplementación en tiempos indicados.',
    'Priorizá el sueño: dormir bien es parte de tu rendimiento y recuperación.',
  ],

  observations: [
    'Las CENAS presentan diferente distribución dependiendo si es día de entreno o no. ¡Prestar atención!',
    'Las ideas de menú son solo opciones, vos podés pensar otras que te gusten con los ingredientes del plato.',
    'Se presentan medidas caseras, es decir medio plato, 1 cda, un cuarto de plato, etc., por lo cual no es necesario pesar los alimentos sino guiarse por las medidas caseras indicadas.',
    'Para que una opción sea equilibrada deberá contener todos los ítems indicados.',
    'La suplementación es opcional, pero es la herramienta para complementar tu propuesta nutricional haciéndola más efectiva en la promoción de tu bienestar.',
  ],
};
