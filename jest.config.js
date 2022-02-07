module.exports = {
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'vue'
    ],
    "moduleDirectories": ["node_modules", "bower_components", "shared"],
    transform: {},
    transformIgnorePatterns: ['/node_modules/(?!@vue/test-utils)'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
      '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
      '**/**.test.js'
    ],
    testEnvironment: 'jest-environment-node'
  }
  