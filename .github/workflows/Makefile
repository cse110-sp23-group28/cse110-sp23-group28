# Team: CSE 110 SP23 Team 28, UC Sussy Developers
# Date: 5/19/2023
# Authors: Brandon Reponte
# Description: CI/CD Makefile for local testing

.PHONY: is-eslint-installed

# Clean up linter files
clean: 
	rm package.json .eslintrc.js package-lock.json
	rm -r node_modules

# if all dependencies present, run command:
# `make lint files=source/baeometer/*.js`
# if in root directory
lint: package.json .eslintrc.js is-eslint-installed \
package-lock.json node_modules
	npx eslint ${files} || \
	(echo 'Error. Try deleting package-lock.js, package.json, node_modules'; exit 1)

# Initialize ESLint configurations
.eslintrc.js:
	echo "module.exports = {\n    // define parser version\n    \'parserOptions\': {\n        \'ecmaVersion\': 6,\n        \'sourceType\': \'script\',\n        \'ecmaFeatures\': {}\n    },\n\n    // import JSDocs for format\n    \'plugins\': [\n        \'jsdoc\',\n        \'filenames-simple\',\n        \'header\',\n    ],\n    \'extends\': [\'plugin:jsdoc/recommended-error\'],\n\n    // ESLint configuration options\n    rules: {\n        /* JSDocs: *\n        // param format\n        \'jsdoc/require-param\': 1,\n        \'jsdoc/check-param-names\': 1,\n        \'jsdoc/require-param\': 1,\n        \'jsdoc/require-param-description\': 1,\n        \'jsdoc/require-param-name\': 1,\n        \'jsdoc/require-param-type\': 1,\n\n        // return format\n        \'jsdoc/require-returns\': 1,\n        \'jsdoc/require-returns-check\': 1,\n        \'jsdoc/require-returns-description\': 1,\n        \'jsdoc/require-returns-type\': 1,\n\n        // description and misc tags (like author)\n        \'jsdoc/check-values\': 1,\n        /* JSDocs */\n\n        // require JSDoc description for each function\n        \'jsdoc/require-description\': \'error\',\n\n        /* ESLinter: */\n        // disables arrow callback function notation\n        \'arrow-body-style\': \'off\', // Does this work?\n        // requires camelcase in all variables, except for magic globals\n        \'camelcase\': [\'error\', { \n            \'properties\': \'always\',\n            \'ignoreGlobals\': true,\n        }],\n        // only allows single and backticks\n        \'quotes\': [\'error\', \'single\', { allowTemplateLiterals: true }],\n        // requires a limit of 100 characters per line\n        \'max-len\': [\'error\', { \'code\': 100 }],\n        // requires comments to be above a line\n        \'line-comment-position\': [\'error\', { \'position\': \'above\' }],\n        \'no-inline-comments\': \'error\',\n        \'multiline-comment-style\': [0, \'separate-lines\'],\n        \'padding-line-between-statements\': [\n            // requires line break between functions\n            \'error\', { \n                \'blankLine\': \'always\', \n                \'prev\': \'function\', \n                \'next\': \'function\' \n            },\n        ],\n\n        // file header convention\n        \'header/header\': [\'error\', \'block\', [\n                \'*\',\n                \' * CSE 110 SP23 Team 28, UC Sussy Developers\',\n                {\'pattern\': \' * Date: \\\\\\d{2}/\\\\\\d{2}/\\\\\\d{4}\'},\n                {\'pattern\': \' * Authors: [\\s\\S]*\'},\n                {\'pattern\': \' * Description: [\\s\\S]*\'},\n                \' \', \n            ], 2,\n        ],\n\n        // file name convention (lowercase separated by underscores)\n        \'filenames-simple/naming-convention\': [\'error\', {\'rule\': \'snake_case\'}],\n        /* ESLinter */\n    },\n  };" >> .eslintrc.js
	sed -i "s/\\\'/'/g" .eslintrc.js

# Initialize package.json
package.json:
	npm init -y

# ChatGPT: Install ESLint if necessary
is-eslint-installed:
	@if ! command -v eslint >/dev/null 2>&1 ; then \
		npm install --global eslint@latest \
	else \
		echo 'ESLint is installed.'; \
	fi

# Install plugins
node_modules package-lock.json:
	npm install eslint-plugin-jsdoc@latest --save-dev
	npm install eslint-plugin-filenames-simple@latest --save-dev
	npm install eslint-plugin-header@latest --save-dev