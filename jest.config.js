module.exports = {
  testTimeout: 30000,
  testSequencer: "<rootDir>/tests/testSequencer.js",
  roots: ["<rootDir>/tests/src"],
  testEnvironment: "node",
  testMatch: [
    "**/tests/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      // ts-jest configuration goes here
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/database/*.ts",
    "!<rootDir>/src/server.ts",
  ],
};
