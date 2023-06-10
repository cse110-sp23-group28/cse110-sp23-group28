# Features Documentation

## Cards
### Authors: @jackiepiepkorn @wesleyhuhuhu

Cards are 3 button elements with images as the background,
and look like clickable envelopes.
- Created using 3 html button elements
- CSS contains a background image of envelopes
- Javascript has event listeners to process clicks
- Clicks will activate a selection animation
- Next button on page doesn't work if a card isn't clicked
- Purpose of the cards: Determine which story will be outputted at the end about the user's potential relationship

## Canvas
### Authors: @spadmanaban25 @breponte @AlvaroRamos44

Canvas allows for simple pen drawing with the ability to,
clear the canvas.
- Used built in HTML canvas and its tools in order to minimize dependencies
- Clear button removes the canvas' image data when clicked/pressed to allow for user's mistakes
  - No erase tool yet, only clearing entire canvas
- Canvas size adjusts according to the size of the screen in order to support mobile capabilities
- Passes in the pixel count to the score algorithm

## Algorithm
### Authors: @jenetic @IshanBanerjee2003

When the user adds in all inputs, the algorithm takes the names, birthdays, and canvas pixels, and outputs a time range of how long the relationship will last.

Names
- Each name is converted into a "Destiny number". Each letter in the name is mapped to a number, then all numbers are summed up. If the sum is not a single digit, it gets reduced to a single digit by repeatedly summing up the digits.
- Each combination of Destiny numbers is mapped to a value between 0 and 1 using a 2D matrix. These values are compatibility values taken from the compatibility chart from [this site](https://www.lovetoknow.com/life/astrology/numerology-compatibility), where "Natural Fit" maps to 1, "Compatible/Get Along Well" maps to 0.75, "Neutral" maps to 0.5, and "Challenging or in Need of Compromise" mapes to 0.25.

Birthdays
- Each birthday is converted into its corresponding Zodiac sign.
- Each combination of Zodiac signs is mapped to a value between 0 and 1 using a 2D matrix. These values are compatibility values taken from [this site](https://www.zodiacsign.com/compatibility/). 

Drawing
- The number of pixels that the user draws on the canvas is also passed into the algorithm.
- The number of pixels gets modded by 101, the the result is divided by 101 to get a value between 0 and 1.

Algorithm Result
- Each of the 3 scores (name, birthday, drawing) gets computed into a weighted average, where name has a weight of 0.3, birthday has a weight of 0.6, and the drawing has a weight of 0.1. The output of this is a number between 0 and 1.
- This number between 0 and 1 is then converted to a time range (e.g. 1 month, 6 months, 1 year, 3 years, 5, years, 10 years, Forever). The time range is returned and paired up with a corresponding story based on the card the user picked.

## User Interface/Design
### Authors: @JasonARong @TerryYan26

Description here

## Continuous Integration/Continuous Deployment (CI/CD) Pipeline
### Authors: @codyprupp @breponte

Lint
- Uses ESLint to test file conventions, which are defined in ./source/.eslintrc.js
- Supports JSDoc conventions, file headers, file names
- Check ./linter.md for more in-depth understanding of the linting process

Test
- Insert

