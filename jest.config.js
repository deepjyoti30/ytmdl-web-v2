module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.js"],
  testPathIgnorePatterns: ["setup.js"]
};
