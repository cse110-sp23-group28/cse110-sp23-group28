/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 06/02/2023
 * Authors: Brandon Reponte, Steve Padmanaban, Alvaro Ramos
 * Description: Unit tests for canvas functions
 */

describe('Basic user flow for Website', () => {
    // First, visit the lab 8 website
    beforeAll(async () => {
        await page.goto('http://127.0.0.1:5500/source/baeometer.html');
    });
  
    // Next, check to make sure that all 20 <product-item> elements have loaded
    it('Check for drawing of a dot on canvas', async () => {
        console.log('Checking for dot...');
        // draw a dot
        await page.click('#drawCanvas');
        // get pixels of drawn dot
        const pixelCount = await page.$eval('#drawCanvas', async (canvas) => {
            const canvasContext = canvas.getContext('2d');
            const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
            return getCanvasPixels(imageData);
        });
        expect(pixelCount).toBe(94);
    });
});
  
  