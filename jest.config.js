module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  setupFilesAfterEnv: ["<rootDir>/tests/__tests__/setup.js"],
  testPathIgnorePatterns: ["setup.js"],
  verbose: true
};
