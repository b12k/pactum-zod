import type { Config } from 'jest';

import './lib/pactum';

const config: Config = {
  moduleNameMapper: {
    '@lib': '<rootDir>/lib',
    '@schemas': '<rootDir>/contracts/schemas',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  transform: {
    '^.+\\.ts?$': '@swc/jest',
  },
};

export default config;
