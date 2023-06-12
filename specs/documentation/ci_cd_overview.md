# CI/CD Pipeline Brief Overview

## Git Hooks (local)

Each developer has a `pre-commit` script that runs the tester and linter upon making a commit. If either of them fail, the commit aborts. The script can be found in `hook_content.md`.

1. Jest

    Jest is used to run our unit tests and end-to-end tests.

2. ESLint

    ESLint is our linter that is used to enforce style, particularly with .js files. See `/specs/adrs/05192023-ESLint.md` for our reasoning behind using ESLint over other linters.

## GitHub Actions

This runs the same workflows as the local pre-commit hook does, but instead runs it through GitHub after it is pushed. The GitHub Actions works as another line of defense to ensure we have a fully working version on our main deployment.

1. Jest
2. ESLint
3. Pages Deployment
   
   Our site is hosted with GitHub pages, on the custom URL http://baeometer.com/.