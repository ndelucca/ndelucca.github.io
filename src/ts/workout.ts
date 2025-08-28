import { routine2025_08, getWorkoutByWeekAndDay } from './routines/2025_08';
import { DayWorkout } from './routines/types';

// Hardcoded gym table data from gym_table.csv
const gymData = [
  ["27.5", "32.5", "37.5", "40", "45", "45", "50", "50"],
  ["30", "35", "40", "42.5", "47.5", "47.5", "52.5", "52.5"],
  ["32.5", "37.5", "42.5", "45", "50", "50", "55", "55"],
  ["32.5", "37.5", "45", "47.5", "52.5", "52.5", "57.5", "57.5"],
  ["35", "40", "45", "50", "52.5", "55", "60", "60"],
  ["37", "42.5", "47.5", "50", "55", "57.5", "62.5", "62.5"],
  ["37.5", "42.5", "50", "52.5", "57.5", "60", "65", "65"],
  ["37.5", "45", "52.5", "55", "60", "62.5", "67.5", "67.5"],
  ["40", "47.5", "52.5", "57.5", "62.5", "65", "70", "70"],
  ["40", "47.5", "55", "55", "60", "67.5", "72.5", "72.5"],
  ["42.5", "50", "57.5", "60", "67.5", "70", "75", "75"],
  ["45", "52.5", "60", "62.5", "70", "70", "77.5", "77.5"],
  ["45", "52.5", "60", "65", "70", "72.5", "80", "80"],
  ["47.5", "55", "62.5", "67.5", "72.5", "75", "82.5", "82.5"],
  ["47.5", "57.5", "65", "70", "75", "77.5", "85", "85"],
  ["50", "57.5", "67.5", "70", "77.5", "80", "87.5", "87.5"],
  ["50", "60", "67.5", "72.5", "80", "82.5", "90", "90"],
  ["52.5", "62.5", "70", "75", "82.5", "85", "92.5", "92.5"],
  ["52.5", "62.5", "72.5", "77.5", "85", "87.5", "95", "95"],
  ["55", "65", "75", "80", "87.5", "90", "97.5", "97.5"],
  ["55", "65", "75", "80", "87.5", "90", "97.5", "100"],
  ["57.5", "67.5", "77.5", "82.5", "90", "92.5", "100", "102.5"],
  ["60", "70", "80", "85", "92.5", "95", "102.5", "105"],
  ["60", "70", "82.5", "87.5", "95", "97.5", "105", "107.5"],
  ["62.5", "72.5", "82.5", "90", "97.5", "100", "107.5", "110"],
  ["62.5", "75", "85", "90", "100", "102.5", "110", "112.5"],
  ["65", "75", "85", "92.5", "102.5", "105", "112.5", "115"],
  ["65", "77", "90", "95", "105", "107.5", "115", "117.5"],
  ["67.5", "80", "90", "97.5", "107.5", "110", "117.5", "120"],
  ["67.5", "80", "92.5", "100", "107.5", "112.5", "120", "122.5"],
  ["70", "82.5", "95", "100", "110", "115", "122.5", "125"],
  ["72.5", "85", "97.5", "102.5", "112.5", "115", "125", "127.5"],
  ["72.5", "85", "97.5", "105", "115", "117.5", "127.5", "130"],
  ["75", "87.5", "100", "107", "117.5", "120", "130", "132.5"],
  ["75", "90", "102.5", "110", "120", "122.5", "132.5", "135"],
  ["77.5", "90", "105", "110", "122.5", "125", "135", "137.5"],
  ["77.5", "92.5", "105", "112.5", "122.5", "127.5", "137.5", "140"],
  ["82.5", "95", "107.5", "115", "125", "130", "140", "142.5"],
  ["80", "95", "110", "117.5", "127.5", "132.5", "142.5", "145"],
  ["82.5", "97.5", "112.5", "120", "130", "135", "145", "147.5"],
  ["82.5", "97.5", "112.5", "120", "132.5", "135", "147.5", "150"],
  ["85", "100", "115", "122.5", "135", "137.5", "150", "152.5"],
  ["87.5", "102.5", "117.5", "125", "135", "140", "152.5", "155"],
  ["87.5", "102.5", "120", "127.5", "140", "142.5", "155", "157.5"],
  ["90", "105", "120", "130", "140", "145", "157.5", "160"],
  ["90", "107", "122.5", "130", "142.5", "147.5", "160", "162.5"],
  ["92.5", "107", "125", "132.5", "145", "150", "162.5", "165"],
  ["92.5", "110", "127.5", "135", "147.5", "152.5", "165", "167.5"],
  ["95", "112.5", "127.5", "137.5", "150", "155", "167.5", "170"],
  ["95", "112.5", "130", "140", "152.5", "157.5", "170", "172.5"],
  ["97.5", "115", "132.5", "140", "155", "157.5", "172.5", "175"],
  ["100", "117.5", "135", "142.5", "157.5", "160", "175", "177.5"],
  ["100", "117.5", "135", "145", "157.5", "162.5", "177.5", "180"],
  ["102.5", "120", "137.5", "147.5", "160", "165", "180", "182.5"],
  ["102.5", "122.5", "140", "150", "162.5", "167.5", "182.5", "185"],
  ["105", "122.5", "142.5", "150", "165", "170", "185", "187.5"],
  ["105", "125", "142.5", "152.5", "167.5", "172.5", "187.5", "190"],
  ["107.5", "127.5", "145", "155", "170", "175", "190", "192.5"],
  ["107.5", "127.5", "147.5", "157.5", "172.5", "177.5", "192.5", "195"],
  ["110", "130", "150", "160", "175", "180", "195", "197.5"],
  ["110", "130", "150", "160", "175", "180", "195", "200"]
];

let currentWeek = 1;
let currentDay = 1;

document.addEventListener('DOMContentLoaded', () => {
  loadWorkoutData();
  setupRoutineSelector();
  loadRoutineDisplay();
});

function loadWorkoutData() {
  const tbody = document.getElementById('workout-data');
  if (!tbody) return;

  gymData.forEach((rowData, index) => {
    const row = document.createElement('tr');

    // Row number (starting from 1)
    const rowNum = document.createElement('td');
    rowNum.textContent = (index + 1).toString();
    rowNum.className = 'row-number';
    row.appendChild(rowNum);

    // Add each data cell
    rowData.forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
}

function setupRoutineSelector() {
  // Handle day link clicks only
  const dayLinks = document.querySelectorAll('.day-link');
  dayLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const week = parseInt(target.dataset.week || '1');
      const day = parseInt(target.dataset.day || '1');
      selectDay(week, day);
    });
  });
}

function selectWeek(week: number) {
  currentWeek = week;

  // Update active week header
  document.querySelectorAll('.week-header').forEach(header => {
    const element = header as HTMLElement;
    element.classList.remove('active');
    if (element.dataset.week === week.toString()) {
      element.classList.add('active');
    }
  });

  // Load first day of the week
  selectDay(week, 1);
}

function selectDay(week: number, day: number) {
  currentWeek = week;
  currentDay = day;

  // Update active week header
  document.querySelectorAll('.week-header').forEach(header => {
    const element = header as HTMLElement;
    element.classList.remove('active');
    if (element.dataset.week === week.toString()) {
      element.classList.add('active');
    }
  });

  // Update active day link
  document.querySelectorAll('.day-link').forEach(link => {
    const element = link as HTMLElement;
    element.classList.remove('active');
    if (element.dataset.week === week.toString() && element.dataset.day === day.toString()) {
      element.classList.add('active');
    }
  });

  loadRoutineDisplay();
}

function setupCollapsibleSections() {
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = (header as HTMLElement).dataset.section;
      const content = document.querySelector(`[data-content="${section}"]`) as HTMLElement;
      const icon = header.querySelector('.collapse-icon') as HTMLElement;
      
      if (!content || !icon) return;
      
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        header.classList.remove('collapsed');
        header.classList.add('expanded');
        icon.textContent = '▲';
      } else {
        content.style.display = 'none';
        header.classList.remove('expanded');
        header.classList.add('collapsed');
        icon.textContent = '▼';
      }
    });
  });
}

// This function is no longer needed since all days are pre-rendered in HTML

function loadRoutineDisplay() {
  const routineContent = document.getElementById('routine-content');
  if (!routineContent) return;

  const workout = getWorkoutByWeekAndDay(currentWeek, currentDay);
  if (!workout) {
    routineContent.innerHTML = '<p>No se encontró entrenamiento para este día.</p>';
    return;
  }

  routineContent.innerHTML = generateRoutineHTML(workout);
  
  // Setup collapsible sections after DOM update
  setTimeout(() => {
    setupCollapsibleSections();
  }, 0);
}

function generateRoutineHTML(workout: DayWorkout): string {
  let html = `<h3>Semana ${workout.week} - Día ${workout.day}</h3>`;

  // Warmup section
  html += `
    <div class="routine-section">
      <h4 class="collapsible-header collapsed" data-section="warmup">
        Entrada en Calor - ${routine2025_08.warmup.totalRounds} rondas
        <span class="collapse-icon">▼</span>
      </h4>
      <div class="collapsible-content" data-content="warmup" style="display: none;">
        <table class="routine-table">
          <thead>
            <tr>
              <th>Ejercicio</th>
              <th>Series/Repeticiones</th>
            </tr>
          </thead>
          <tbody>`;

  routine2025_08.warmup.exercises.forEach(exercise => {
    html += `
      <tr>
        <td>${exercise.name}</td>
        <td>${exercise.sets}</td>
      </tr>`;
  });

  html += `
          </tbody>
        </table>
      </div>
    </div>`;

  // Main exercises section
  html += `
    <div class="routine-section">
      <h4>Ejercicios Principales</h4>
      <table class="routine-table">
        <thead>
          <tr>
            <th>Ejercicio</th>
            <th>55%</th>
            <th>65%</th>
            <th>75%</th>
            <th>Rango E</th>
          </tr>
        </thead>
        <tbody>`;

  workout.mainExercises.forEach(exercise => {
    html += `
      <tr>
        <td>${exercise.name}</td>
        <td>${exercise.warmupSets.percentage55 || '-'}</td>
        <td>${exercise.warmupSets.percentage65 || '-'}</td>
        <td>${exercise.warmupSets.percentage75 || '-'}</td>
        <td>${exercise.workingSets}</td>
      </tr>`;
  });

  html += `
        </tbody>
      </table>
    </div>`;

  // Circuit section
  html += `
    <div class="routine-section">
      <h4>Circuito Final (${workout.circuitRounds} rondas)</h4>
      <table class="routine-table">
        <thead>
          <tr>
            <th>Ejercicio</th>
            <th>Repeticiones</th>
          </tr>
        </thead>
        <tbody>`;

  workout.circuit.forEach(exercise => {
    html += `
      <tr>
        <td>${exercise.name}</td>
        <td>${exercise.reps}</td>
      </tr>`;
  });

  html += `
        </tbody>
      </table>
    </div>`;

  return html;
}
