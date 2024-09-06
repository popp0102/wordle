import type { Config } from '@jest/types';
import path from 'path';

const config: Config.InitialOptions = {
  roots: [path.resolve(__dirname, '../tests')],
  rootDir: path.resolve(__dirname, '../'),
  testEnvironment: 'jsdom',
  testMatch: ["<rootDir>/tests/**/*.test.tsx"],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
    }],
  },
  setupFilesAfterEnv: [path.resolve(__dirname, '../tests/jest.setup.ts')],
};

export default config;
