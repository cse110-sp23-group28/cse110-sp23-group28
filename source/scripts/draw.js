/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 06/02/2023
 * Authors: Steve Padmanaban
 * Description: Javascript Event Listener for Submit Button
 */


/**
 * AddEventListener for accessing Canvas
 * to enable freehand drawing on it
 * @author Steve Padmanaban
 * No parameters and No return values 
 */

window.addEventListener('load', function () {
    const canvas = document.querySelector('#drawCanvas');
    const canvasContext = canvas.getContext('2d');
    const clearButton = document.getElementById('clearScreen');

    canvas.height = 350;
    canvas.width = 700;

    let isDrawing = false;

    function startDraw(event) {
        isDrawing = true;
        whileDraw(event);
    }

    function finishDraw() {
        isDrawing = false;
        canvasContext.beginPath();
    }

    function whileDraw(event) {
        if (!isDrawing) {
            return;
        }
        canvasContext.lineWidth = 10;
        canvasContext.lineCap = 'round';

        let boundary = canvas.getBoundingClientRect();
        let xOffset = event.clientX - boundary.left;
        let yOffset = event.clientY - boundary.top;

        if (xOffset >= 0 && xOffset < canvas.width && yOffset >= 0 && yOffset < canvas.height) {
            canvasContext.lineTo(xOffset, yOffset);
            canvasContext.stroke();
            canvasContext.beginPath();
            canvasContext.moveTo(xOffset, yOffset);
        }
            
    }

    function clearScreen() {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', finishDraw);
    canvas.addEventListener('mousemove', whileDraw);
    clearButton.addEventListener('click', clearScreen);
});
