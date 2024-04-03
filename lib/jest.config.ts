import type { Config } from 'jest';

import './globals';
import './pactum';

type Extension = 'js' | 'ts';

type CreateJestConfigConfig = {
  extension: Extension;
  libDir: `<rootDir>${string}`;
};

const defaultConfig: CreateJestConfigConfig = {
  extension: 'js',
  libDir: '<rootDir>',
};

export const createJestConfig = (
  config?: Partial<CreateJestConfigConfig>,
): Config => {
  const { extension, libDir } = {
    ...defaultConfig,
    ...config,
  };

  return {
    moduleNameMapper: {
      '@lib': libDir,
      '@schemas': '<rootDir>/contracts/schemas',
    },
    modulePathIgnorePatterns: ['<rootDir>/dist'],
    transform:
      extension === 'ts'
        ? {
            '^.+\\.ts?$': '@swc/jest',
          }
        : undefined,
  };
};

const config: Config = createJestConfig();
export default config;
