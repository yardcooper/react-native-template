module.exports = {
  extends: ['universe/native', '@react-native-community'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'formatjs'],
  rules: {
    complexity: ['error', 10],
    'no-shadow': 'off',
    'no-undef': 'off', // This is handled by TypeScript
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/unbound-method': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
    // https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
