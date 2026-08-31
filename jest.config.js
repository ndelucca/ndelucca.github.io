export default {
  preset: 'ts-jest',
  // jsdom rather than node: the storage and rendering modules are exercised
  // against a real localStorage and a real DOM.
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: ['src/ts/**/*.ts', '!src/ts/**/index.ts'],
};
