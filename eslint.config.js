import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['build/**', 'node_modules/**', 'src/data/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // The style guide in .claude/CLAUDE.md: arrow functions with explicit
      // return types, no `function` declarations, no `any`.
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: false, allowTypedFunctionExpressions: true },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
  {
    files: ['src/__tests__/**/*.ts'],
    languageOptions: {
      globals: { ...globals.jest, ...globals.browser },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    files: ['*.cjs', '*.config.js'],
    languageOptions: {
      globals: { ...globals.node },
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  }
);
