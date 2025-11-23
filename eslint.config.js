import js from '@eslint/js';

export default [
  // Apply recommended rules
  js.configs.recommended,

  // Configuration for JavaScript files
  {
    files: ['app/javascript/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        // Stimulus globals
        Application: 'readonly',
        Controller: 'readonly',
      },
    },
    rules: {
      // Prettier compatibility - disable rules that conflict with Prettier
      'max-len': 'off',
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'only-multiline'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],

      // Best practices
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',

      // Code quality
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'brace-style': ['error', '1tbs'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
    },
  },

  // Ignore patterns
  {
    ignores: [
      'node_modules/',
      'public/',
      'tmp/',
      'log/',
      'storage/',
      'vendor/',
      'bin/',
      'config/',
      'db/',
      'lib/',
      'test/',
    ],
  },
];
