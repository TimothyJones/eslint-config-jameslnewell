module.exports = {

  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },

  plugins: [
    'import'
  ],

  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.json'
        ]
      }
    }
  },

  rules: {
    'arrow-body-style': [1, 'as-needed'],
    'arrow-parens': 0,
    'arrow-spacing': [2, {before: true, after: true}],
    'constructor-super': 2,
    'generator-star-spacing': [2, {before: true, after: false}],
    'no-confusing-arrow': ['error'],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 1,
    'prefer-const': 2,
    'prefer-reflect': 1,
    'prefer-spread': 2,
    'prefer-template': 1,
    'require-yield': 2,

    'import/no-unresolved': 2,
    'import/named': 2,
    //'import/default': 2, //doesn't work with jsx - https://github.com/benmosher/eslint-plugin-import/issues/94
    'import/namespace': 2,
    'import/export': 2,
    'import/no-commonjs': 2,
    'import/no-named-as-default': 2,
    'import/no-duplicates': 2,
    'import/imports-first': [2, 'absolute-first'],

    'no-undef': 0 //clashes with ecmaFeature experimentalObjectRestSpread - https://github.com/eslint/eslint/issues/3271

  },

  extends: [
    './es5.js'
  ]

};
