module.exports = {
    transform: {
      "^.+\\.[tj]sx?$": "babel-jest",
    },
    testEnvironment: "node",
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x|mjs)" 
    ],
    testPathIgnorePatterns: ["\\node_modules\\"],
  };
  