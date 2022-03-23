export default {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: [
    "**/src/**/*.spec.ts",
    "**/src/**/*.test.ts",
  ],
  testEnvironment: "node",
  verbose: true
};