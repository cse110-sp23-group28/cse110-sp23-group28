/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 06/11/2023
 * Authors: Brandon Reponte
 * Description: End to end testing for experience
 */

const functions = require('../scripts/algorithm.js');

describe('Basic user flow for Website', function () {
    // First, visit baeometer through local host or hosted page
    beforeAll(async function () {
        try {
            await page.goto('http://127.0.0.1:5500/source/');
        } catch {
            await page.goto('http://baeometer.com/');
        }
    });
  
    // Next, start baeometer by clicking on start button
    it('Initial Home Page - Click to progress to next page', async function () {
        // get reference to button and click it
        await page.$eval('button > nav > a > p', function (startButton) {
            startButton.click();
        });
        // match to either local host or hosted page
        await expect(page.url()).toMatch
            (/^((http:\/\/127\.0\.0\.1:5500\/source.*)|baeometer\.com)\/baeometer\.html$/);
    });

    // User fills out their name and birthday
    it('Baeometer Name and Birthday - YOU', async function () {
        // get reference to name input field and type in it
        const nameField = await page.$(
            '#yourNameBirthday #yourNameBirthdayContainer #yourNameBirthdayForm #yourNameForm'
        );
        await nameField.type('Sussy Gus');

        // get reference to date input field and input a date
        const dateField = await page.$(
            '#yourNameBirthday #yourNameBirthdayContainer #yourNameBirthdayForm #yourBirthdayForm'
        );
        await dateField.click();
        await page.keyboard.type('12-31-2022');
        await page.keyboard.press('Enter');

        // get updated name input
        const nameValue = await page.$eval(
            '#yourNameBirthday #yourNameBirthdayContainer #yourNameBirthdayForm #yourNameForm',
            function (nameField) {
                return nameField.value;
            }
        );

        // get updated birthday input
        const dateValue = await page.$eval(
            '#yourNameBirthday #yourNameBirthdayContainer #yourNameBirthdayForm #yourBirthdayForm',
            function (dateField) {
                return dateField.value;
            }
        );

        // verify that the information is stored
        expect(nameValue).toBe('Sussy Gus');
        expect(dateValue).toBe('2022-12-31');
    });

    // User fills out their bae's name and birthday
    it('Baeometer Name and Birthday - BAE', async function () {
        // get reference to name input field and type in it
        const nameField = await page.$(
            '#baeNameBirthday #baeNameBirthdayContainer #baeNameBirthdayForm #baeNameForm'
        );
        await nameField.type('Thomas Powell');

        // get reference to date input field and input a date
        const dateField = await page.$(
            '#baeNameBirthday #baeNameBirthdayContainer #baeNameBirthdayForm #baeBirthdayForm'
        );
        await dateField.click();
        await page.keyboard.type('01-01-1930');
        await page.keyboard.press('Enter');

        // get updated name input
        const nameValue = await page.$eval(
            '#baeNameBirthday #baeNameBirthdayContainer #baeNameBirthdayForm #baeNameForm',
            function (nameField) {
                return nameField.value;
            }
        );

        // get updated birthday input
        const dateValue = await page.$eval(
            '#baeNameBirthday #baeNameBirthdayContainer #baeNameBirthdayForm #baeBirthdayForm',
            function (dateField) {
                return dateField.value;
            }
        );

        // verify that the information is stored
        expect(nameValue).toBe('Thomas Powell');
        expect(dateValue).toBe('1930-01-01');
    });

    // User clicks the test button to test the inputted couple
    it('Baeometer Name and Birthday - Test couple', async function () {
        // click the test button
        const testButton = await page.$('#inputNameBirthday #testBtn');
        await testButton.click();
        
        // get display of canvas
        const canvasVisible = await page.$eval('#drawCanvas #canvasContainer #canvasContent #canvasArea', function (canvas) {
            return window.getComputedStyle(canvas).display;
        });

        // check if canvas is visible to user (i.e. not display: "none")
        expect(canvasVisible).toBe("block");
    });

    // User draws something on the canvas
    it('Baeometer Canvas - Test canvas', async function () {
        const canvas = await page.$('#drawCanvas #canvasContainer #canvasContent #canvasArea');
        await canvas.hover();
        await page.mouse.down();
        await page.mouse.move(20, 0);
        await page.mouse.up();

        // expect(functions.getCanvasPixels(canvas.getContext('2d').getImageData())).toBe(200);
    });

    // 
    it('Baeometer Card - Test couple', async function () {
        return;
    });
});
  