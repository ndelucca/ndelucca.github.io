# Prompt para Conversión de Rutinas de Entrenamiento

## Instrucciones para Claude

Necesito que conviertas un archivo de rutina de entrenamiento en formato .docx a markdown estructurado. Usa exactamente este formato y estructura:

## Reglas de Conversión:

### 1. Interpretación de Notaciones:
- **Números como 55, 65, 75**: Son PORCENTAJES del 1RM (55%, 65%, 75%)
- **E**: Rango de trabajo entre 80% - 87.5% del 1RM
- **F**: Rango de trabajo entre 87.5% - 95% del 1RM (siguiente patrón)
- **T (ejemplo 6T)**: "Tiempos" - bajada en X tiempos (ej: 6T = bajada en 6 tiempos)
- **E.C.**: Entrada en Calor

### 2. Estructura del Markdown:
- Título principal con el mes/período
- Sección "Estructura General" con duración, frecuencia y entrada en calor
- Sección "Rangos de Trabajo" explicando E, F, etc.
- Una sección por semana
- Tres días por semana
- Cada día debe tener entrada en calor, ejercicios principales y circuito final

### 3. Formato de Tablas:

#### Entrada en Calor:
```markdown
## Entrada en Calor (E.C.) - Todos los días
| Ejercicio | Series/Repeticiones |
|-----------|-------------------|
| [Ejercicio 1] | [Series/Reps] |
| [Ejercicio 2] | [Series/Reps] |
| **Total** | **x[número]** |
```

#### Ejercicios Principales:
```markdown
**Ejercicios Principales:**
| Ejercicio | 55% | 65% | 75% | Rango E |
|-----------|-----|-----|-----|---------|
| [Ejercicio 1] | X reps | X reps | X reps | XxX |
| [Ejercicio 2] | X reps | X reps | X reps | XxX |
| [Ejercicio 3] | X reps | X reps | X reps | XxX |
```

**Importante**:
- Headers = porcentajes o rangos
- Celdas = repeticiones exactas
- Si un ejercicio no tiene cierto porcentaje, omitir esa columna para ese día
- Formato XxX = series x repeticiones (ej: 4x2 = 4 series de 2 repeticiones)

#### Circuito Final:
```markdown
**Circuito Final (X rondas):**
| Ejercicio | Repeticiones |
|-----------|-------------|
| [Ejercicio 1] | X |
| [Ejercicio 2] | X+X |
| [Ejercicio 3] | X" |
```

### 4. Reglas Importantes:
- **NO resumir circuitos**: Cada día debe tener su circuito completo, aunque se repita
- **NO usar "Igual al Día X"**: Siempre escribir el circuito completo
- Mantener todas las notaciones técnicas (T, +, ", etc.)
- Respetar el orden exacto de ejercicios
- Incluir sección de "Notas Técnicas" al final

### 5. Ejemplo de Salida Esperada:
El markdown debe ser completamente interpretable por Claude Code y seguir exactamente la estructura del ejemplo que tienes como referencia.

## Tu Tarea:
Convierte el archivo adjunto siguiendo estas reglas exactamente. Mantén toda la información técnica, no agregues interpretaciones propias, y estructura todo en tablas claras y precisas.
