const { moduleNameMapper, transformIgnorePatterns } = require('./.jest');

// jest config for server render environment
module.exports = {
  setupFiles: ['./tests/setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'md'],
  moduleNameMapper,
  transform: {
    '\\.tsx?$': './node_modules/@greendeck/atomic-tools/lib/jest/codePreprocessor',
    '\\.js$': './node_modules/@greendeck/atomic-tools/lib/jest/codePreprocessor',
    '\\.md$': './node_modules/@greendeck/atomic-tools/lib/jest/demoPreprocessor',
    '\\.(jpg|png|gif|svg)$': './node_modules/@greendeck/atomic-tools/lib/jest/imagePreprocessor',
  },
  testRegex: 'demo\\.test\\.js$',
  testEnvironment: 'node',
  transformIgnorePatterns,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json',
    },
  },
};
