module.exports = {
    // define parser version
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'script',
        'ecmaFeatures': {}
    },

    // import JSDocs for format
    'plugins': [
        'jsdoc',
        'filenames-simple',
        'header',
    ],
    'extends': ['plugin:jsdoc/recommended-error'],

    // ESLint configuration options
    rules: {
        /* JSDocs: *
        // param format
        'jsdoc/require-param': 1,
        'jsdoc/check-param-names': 1,
        'jsdoc/require-param': 1,
        'jsdoc/require-param-description': 1,
        'jsdoc/require-param-name': 1,
        'jsdoc/require-param-type': 1,

        // return format
        'jsdoc/require-returns': 1,
        'jsdoc/require-returns-check': 1,
        'jsdoc/require-returns-description': 1,
        'jsdoc/require-returns-type': 1,

        // description and misc tags (like author)
        'jsdoc/check-values': 1,
        /* JSDocs */

        // require JSDoc description for each function
        'jsdoc/require-description': 'error',

        /* ESLinter: */
        // disables arrow callback function notation
        'arrow-body-style': 'off', // Does this work?
        // requires camelcase in all variables, except for magic globals
        'camelcase': ['error', { 
            'properties': 'always',
            'ignoreGlobals': true,
        }],
        // only allows single and backticks
        'quotes': ['error', 'single', { allowTemplateLiterals: true }],
        // requires a limit of 100 characters per line
        'max-len': ['error', { 'code': 100 }],
        // requires comments to be above a line
        'line-comment-position': ['error', { 'position': 'above' }],
        'no-inline-comments': 'error',
        'multiline-comment-style': [0, 'separate-lines'],
        'padding-line-between-statements': [
            // requires line break between functions
            'error', { 
                'blankLine': 'always', 
                'prev': 'function', 
                'next': 'function' 
            },
        ],

        // file header convention
        'header/header': ['error', 'block', [
                '*',
                ' * CSE 110 SP23 Team 28, UC Sussy Developers',
                {'pattern': ' * Date: \\d{2}/\\d{2}/\\d{4}'},
                {'pattern': ' * Authors: [\s\S]*'},
                {'pattern': ' * Description: [\s\S]*'},
                ' ', 
            ], 2,
        ],

        // file name convention (lowercase separated by underscores)
        'filenames-simple/naming-convention': ['error', {'rule': 'snake_case'}],
        /* ESLinter */
    },
  };