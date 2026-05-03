export default {
  testEnvironment: "node",
  clearMocks: true,
  testTimeout: 30000,
  forceExit: true,
  detectOpenHandles: true,
  verbose: true,
  transform: {},
  moduleNameMapper: {},
  // Tell Jest to look for tests in src/tests
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/src/tests/**/*.test.js"
  ]
};