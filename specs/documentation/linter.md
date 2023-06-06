# Linter Documentation
### Go to correct directory
- ```cd source```

## Running ```make lint``` in command line
### Initialize package.json
- ```npm init -y```

### Globally install ESLint
- ```npm install --global eslint@latest```

### Initialize ESLint configurations (only if .eslintrc.js is not defined)
- ```eslint --init```

### Install plugins
The Makefile only installs these if node_modules is not defined. If node_modules is defined and not all plugins are installed, then an error will occur and you must install these individually
- ```npm install eslint-plugin-jsdoc --save-dev```
- ```npm install eslint-plugin-filenames-simple --save-dev```
- ```npm install eslint-plugin-header --save-dev```

### Run ESLint on JS files in ```source/scripts``` directory
- ```eslint scripts/*.js```

<!--
# Speed up subsequent runs with caching
- name: Cache node modules
  uses: actions/cache@v2
  env:
    cache-name: cache-node-modules
  with:
    # npm cache files are stored in `~/.npm` on Linux/macOS
    path: ~/.npm
    key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-build-${{ env.cache-name }}-
      ${{ runner.os }}-build-
      ${{ runner.os }}- 
-->