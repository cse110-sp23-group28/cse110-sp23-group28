module.exports = {
    // import JSDocs for format
    "plugins": ["jsdoc"],
    "extends": ["plugin:jsdoc/recommended"],

    // ESLint configuration options
    rules: {
        /* JSDocs: *
        // param format
        "jsdoc/require-param": 1,
        "jsdoc/check-param-names": 1,
        "jsdoc/require-param": 1,
        "jsdoc/require-param-description": 1,
        "jsdoc/require-param-name": 1,
        "jsdoc/require-param-type": 1,

        // return format
        "jsdoc/require-returns": 1,
        "jsdoc/require-returns-check": 1,
        "jsdoc/require-returns-description": 1,
        "jsdoc/require-returns-type": 1,

        // description and misc tags (like author)
        "jsdoc/require-description": "author",
        "jsdoc/check-values": 1,
        /* JSDocs */
    },
  };