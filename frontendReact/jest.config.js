export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$":
      "<rootDir>/src/components/__tests__/fileMock.cjs",

    // "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    // "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
  },
};
