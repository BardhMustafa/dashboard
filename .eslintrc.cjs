module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    semi: [2, 'always', { omitLastInOneLineBlock: true }],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: ['TSTypeParameterInstantiation'],
        SwitchCase: 1,
      },
    ],
    quotes: ['error', 'single'],
    'no-prototype-builtins': 1,
    camelcase: 1,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-unknown-property': 2,
    'react/require-render-return': 2,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': 2,
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'autofix'],
};
