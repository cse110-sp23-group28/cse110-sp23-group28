/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 06/02/2023
 * Authors: Brandon Reponte, Steve Padmanaban, Alvaro Ramos
 * Description: Unit tests for canvas functions
 */

// JSDOM setup
const functions = require('../scripts/algorithm.js');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = (new JSDOM(`...`)).window;

let canvas, ctx;

beforeEach(() => {
    canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 500;
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
});

test('getCanvasPixels on drawn rectangle', () => {
    // draw rectangle
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 200, 200);

    expect(functions.getCanvasPixels(
        ctx.getImageData(0, 0, canvas.width, canvas.height))
    ).toBe(200*200);
});

test('getCanvasPixels on 5 pixel long horizontal line', () => {
    // pen configurations
    ctx.lineWidth = 10;
    ctx.lineCap = 'butt';

    // start at (5,5)
    ctx.lineTo(5, 5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(5, 5);

    // draw to (10,5)
    ctx.lineTo(10, 5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(10, 5);

    // end drawing
    ctx.beginPath();

    expect(functions.getCanvasPixels(
        ctx.getImageData(0, 0, canvas.width, canvas.height))
    ).toBe(50);
});

test('getCanvasPixels on 5 pixel long vertical line', () => {
    // pen configurations
    ctx.lineWidth = 10;
    ctx.lineCap = 'butt';

    // start at (5,5)
    ctx.lineTo(5, 5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(5, 5);

    // draw to (10,5)
    ctx.lineTo(5, 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(5, 10);

    // end drawing
    ctx.beginPath();

    expect(functions.getCanvasPixels(
        ctx.getImageData(0, 0, canvas.width, canvas.height))
    ).toBe(50);
});