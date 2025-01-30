const { createDefaultPreset } = require('ts-jest');

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    ...createDefaultPreset().transform,
  },
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@dynamic-framework/ui-react/jest/setup.js',
    '<rootDir>/tests/setupTests.ts',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/node_modules/@dynamic-framework/ui-react/jest/__mocks__/fileMock.js',
    '\\.(css|sass)$': '<rootDir>/node_modules/@dynamic-framework/ui-react/jest/__mocks__/styleMock.js',
  },
};
