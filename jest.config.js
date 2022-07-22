// module.exports = {
//   preset: 'jest-preset-angular',
//   snapshotSerializers: [
//     'jest-preset-angular/build/serializers/index.js'
//   ],
//   moduleNameMapper: {
//     '\\.(jpg|jpeg|png)$': '<rootDir>/__mocks__/image.js',
//     '^@lib/(.*)$': '<rootDir>/src/lib/$1'
//   },
//   coverageReporters : ['cobertura', "html"],
//   modulePathIgnorePatterns: ["./cypress"],
//   transformIgnorePatterns: ['^.+\\.js$', '/node_modules/(?!deck\.gl)'],
//   setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
//   reporters: [
//     'default',
//     ['jest-junit', {
//       outputName: 'junit.xml'
//     }]
//   ]
// };

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
};
