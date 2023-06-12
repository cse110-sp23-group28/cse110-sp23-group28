/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 06/11/2023
 * Authors: Brandon Reponte
 * Description: End to end testing for experience
 */

describe('Basic user flow for Website', function () {
    // First, visit baeometer through local host or hosted page
    beforeAll(async function () {
        try {
            await page.goto('http://127.0.0.1:5500/source/');
        } catch {
            await page.goto('baeometer.com');
        }
    });
  
    // Next, start baeometer by clicking on start button
    it('Initial Home Page - Click to progress to next page', async function () {
        await page.$eval('button', function (buttonElement) {
            const startButton = buttonElement.querySelector('nav')
                .querySelector('a').querySelector('p');
            startButton.click();
        });
        await expect(page.url()).toMatch
            (/^((http:\/\/127\.0\.0\.1:5500\/source.*)|baeometer\.com)\/baeometer\.html$/);
    });
});
  