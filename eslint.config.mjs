import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-var': 'error',
      eqeqeq: 'error',
      'no-unused-vars': 'error',
      'default-case': 'error',
      'no-console': 'error',
      camelcase: 'error',
      'consistent-return': 'error',
      'func-style': 'error',
      'max-depth': ['error', 2],
      'max-lines': ['error', { max: 25, skipBlankLines: true }],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'no-useless-return': 'error',
      'no-plusplus': 'error',
      quotes: ['error', 'single'],
    },
  },
];
