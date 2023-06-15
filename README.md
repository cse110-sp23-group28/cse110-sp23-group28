# Bae-O-Meter | _Team 28_
![version](https://img.shields.io/github/v/release/cse110-sp23-group28/cse110-sp23-group28?include_prereleases)
![website status](https://img.shields.io/website?url=http%3A%2F%2Fbaeometer.com%2F)
![jest status](https://img.shields.io/github/actions/workflow/status/cse110-sp23-group28/cse110-sp23-group28/jest.yml)

[Link to Project Site](http://baeometer.com/)
[Link to Public Project Video](https://www.youtube.com/watch?v=Mk5UDK28VeA)
[Link to Private Project Video](https://youtu.be/hyIOlS1RTag)

## Project Description:
The Bae-O-Meter™ is a state of the art fortune telling website that can predict the strength of a relationship between any two entities. After entering some basic information about each party, the Bae-O-Meter™ will factor each piece of data into its algorithm, and precisely and mathematically determine exactly how long their hypothetical relationship would last, and how it will end.

## How to use the Bae-O-Meter:
1. Click the "start" button on the home page
2. Enter the names and birthdays of you and your potential bae, pressing "next" to continue
3. Ensure the above information is correct, and then press the "test" button to move on
4. Draw something on the envelope using your mouse (or finger if you are on mobile), and press the "next" button
5. Finally, choose one of the three love letters on screen, and press the "next" button
6. The results should be displayed on the screen. If you would like to explore another potential relationship, press the "test again" button to start over.

## First-time development setup
1. Clone the repo using `git clone https://github.com/cse110-sp23-group28/cse110-sp23-group28.git` and cd into the repo (`cd cse110-sp23-group28`).
2. cd into the `source` directory (`cd source`) and run `npm install` to install dependencies.
3. This should set up the unit tests with Jest, and also the linting with ESLint. You can test that these work by running the commands `npm test` and `npm run lint`. If for some reason the commands are not recognized, follow the setup guides in `specs/documentation`.
4. In the `.git/hooks` directory, add a file called "pre-commit" (no file extension), and paste the code in `specs/documentation/hook_content.md` into the file. This should enable the pre-commit script to run whenever you do a `git commit`, and will enforce the linter and unit tests to pass. If you have a Unix system, run `chmod ug+x .git/hooks/*` to make the file executable.
5. Finally, make sure to read through our other documentation files to get a better sense for our styling and code practices.

[Link to team page (credits)](https://github.com/cse110-sp23-group28/cse110-sp23-group28/blob/main/admin/team.md)

_© UC Sussy Developers (Team 28)_
