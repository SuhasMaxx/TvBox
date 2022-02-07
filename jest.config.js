module.exports = {
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'vue'
    ],
    transform: {
      "^.+\\.js$": "babel-jest",
      ".*\\.(vue)$": "@vue/vue3-jest"
    },
    transformIgnorePatterns: [
        '/node_modules/'
      ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
      '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
      '**/**.test.js'
    ],
    testEnvironment: 'jsdom'
  }
  