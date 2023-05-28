Add a new file called "pre-commit" (no file extension) in this repository's `.git/hooks` directory with the following content:

```
#!/usr/bin/env bash

# force commit to abort if any script fails
set -eo pipefail

# cd into proper directory with scripts
cd source

# Run ESLint
npm run lint

# Run Jest
npm test

# If all checks pass, allow the commit to proceed (the extra junk at the beginning and end is just making the text green)
printf "\e[0;32mPassed linter and unit tests. You're clear to push :)\x1b[0m\n"
exit 0
```