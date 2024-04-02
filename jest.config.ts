import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.ts?$': '@swc/jest',
  },
  setupFiles: ['<rootDir>/src/config/index.ts'],
  moduleNameMapper: {
    '@schemas': '<rootDir>/src/schemas',
    '@contracts': '<rootDir>/src/contracts',
  },
};

export default config;