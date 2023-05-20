module.exports = {
    // import JSDocs for format
    'plugins': [
        'jsdoc',
        'filename',
        'header',
    ],
    'extends': ['plugin:jsdoc/recommended'],

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
        'jsdoc/require-description': 'author',
        'jsdoc/check-values': 1,
        /* JSDocs */

        /* ESLinter: */
        // disables arrow callback function notation
        'prefer-arrow-callback': 'error',
        // requires camelcase in all variables, except for magic globals
        'camelcase': { 
            'properties': 'always',
            'ignoreGlobals': true,
        },
        // only allows single and backticks
        'quotes': ['error', 'single', 'backtick'],
        // requires a limit of 100 characters per line
        'max-len': ['error', { 'code': 100 }],
        // requires comments to be above a line
        'line-comment-position': ['error', { 'position': 'above' }],
        'no-inline-comments': 'error',
        'multiline-comment-style': ['error', separate-lines],
        'padding-line-between-statements': [
            // requires line break between functions
            'error', { 
                'blankLine': 'always', 
                'prev': 'function', 
                'next': 'function' 
            },
            // requires line after between functions
            { 
                'blankLine': 'always', 
                'prev': 'function', 
                'next': '*' 
            },
            // requires line before between functions
            { 
                'blankLine': 'always', 
                'prev': '*', 
                'next': 'function' 
            },
        ],

        // file header convention
        'header/header': ['error', 'block', [
                /^CSE 110 SP23 Team 28, UC Sussy Developers$/,
                /^Date: \d{2}-\d{2}-\d{4}$/,
                'Authors:',
                'Description:',
            ]
        ],

        // file name convention (lowercase separated by underscores)
        'filenames/match-regex': ['error', 'snake_case'],
        /* ESLinter */
    },
  };