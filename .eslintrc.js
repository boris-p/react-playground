module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'space-before-function-paren': ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'max-len': ['error', 120],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'arrow-parens': [2, 'as-needed'],
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-handler-names': 1,
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-is-mounted': 1,
    'react/no-multi-comp': 0,
    'react/no-set-state': 1,
    'react/no-string-refs': 0,
    'react/no-unknown-property': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/require-extension': 0,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'react/wrap-multilines': 0
  }
}
