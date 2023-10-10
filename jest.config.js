module.exports = {
  testEnvironment: "jsdom",
  // collectCoverage: true,
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  collectCoverageFrom: ["src/**/*.(ts|tsx)"],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/src/tests/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/tests/__mocks__/fileMock.js",
  },
};
