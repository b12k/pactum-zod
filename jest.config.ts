import type { Config } from 'jest';

import { createJestConfig } from './lib';

const config: Config = createJestConfig({
  extension: 'ts',
  libDir: '<rootDir>/lib',
});
export default config;
