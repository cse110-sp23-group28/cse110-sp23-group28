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
        expect(page.url()).toMatch
            (/^((http:\/\/127\.0\.0\.1:5500\/source.*)|baeometer\.com)\/baeometer\.html$/);
    });

    // User fills out their name and birthday
    it('Baeometer Name and Birthday - YOU', async function () {
        // user enters name and date input
        await page.type('#yourNameForm', 'Sussy Gus');
        await page.type('#yourBirthdayForm', '12-31-2022');
        await page.keyboard.press('Enter');

        // get updated name and date input
        const nameBirthdayValues = await page.$eval('#yourNameBirthdayForm',
            function (form) {
                return [form.querySelector('#yourNameForm').value,
                    form.querySelector('#yourBirthdayForm').value];
            }
        );

        // verify that the information is stored
        expect(nameBirthdayValues[0]).toBe('Sussy Gus');
        expect(nameBirthdayValues[1]).toBe('2022-12-31');
    });

    // User fills out their bae's name and birthday
    it('Baeometer Name and Birthday - BAE', async function () {
        // user enters name and date input
        await page.type('#baeNameForm', 'Thomas Powell');
        await page.type('#baeBirthdayForm', '01-01-1930');
        await page.keyboard.press('Enter');

        // get updated name and date input
        const nameBirthdayValues = await page.$eval('#baeNameBirthdayForm',
            function (form) {
                return [
                    form.querySelector('#baeNameForm').value,
                    form.querySelector('#baeBirthdayForm').value
                ];
            }
        );

        // verify that the information is stored
        await expect(nameBirthdayValues[0]).toBe('Thomas Powell');
        await expect(nameBirthdayValues[1]).toBe('1930-01-01');

        // click the test button
        const testButton = await page.$('#inputNameBirthday #testBtn');
        await testButton.click();
    });

    // User clicks the test button to test the inputted couple NOT WORKING YET
    it('Baeometer Name and Birthday - Test couple', async function () {
        // get display of canvas
        const canvasVisible = await page.$eval('#drawCanvas', function (canvas) {
            return window.getComputedStyle(canvas).display;
        });

        // check if canvas is visible to user (i.e. not display: "none")
        await expect(canvasVisible).toBe("block");
    });

    // 
    it('Baeometer Canvas - Test canvas', async function () {
        // const canvas = await page.$('#drawCanvas #canvasContainer #canvasContent #canvasArea');
        // await canvas.hover();
        // await page.mouse.down();
        // await page.mouse.move(20, 0);
        // await page.mouse.up();

        // expect(functions.getCanvasPixels(canvas.getContext('2d').getImageData())).toBe(200);
    });

    // Yet to implement
    it('Baeometer Card - Select card for story', async function () {
        return;
    });

    // Yet to implement
    it('Baeometer Result - Generate story', async function () {
        return;
    });
});
  