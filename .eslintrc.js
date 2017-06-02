module.exports = {
  extends: 'airbnb',
  rules: {
    'comma-dangle': 0,
    'no-plusplus': 0,
    'arrow-parens': 0,
    'prefer-template': 0,
    'global-require': 0,
    'no-constant-condition': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-boolean-value': 0,
    'react/prop-types': 0,
    'no-use-before-define': [2, {
      functions: false
    }],
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0
  },
  env: {
    'browser': true,
    'node': true
  }
};
