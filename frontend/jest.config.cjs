module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Mock CSS and asset files (images, lotties, styles)
    '\\.(css|less|scss|sass)$': '<rootDir>/src/maps/styleMock.js',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$': '<rootDir>/src/maps/fileMock.js'
  },
  setupFilesAfterEnv: [],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)']
};
