/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 06/02/2023
 * Authors: Steve Padmanaban, Brandon Reponte, Alvaro Ramos
 * Description: Javascript Event Listener for Submit Button
 */

/**
 * AddEventListener for accessing Canvas to enable freehand drawing on it
 * @author Steve Padmanaban, Brandon Reponte, Alvaro Ramos
 */
window.addEventListener('load', function () {
    // access Canvas elements
    const canvas = document.querySelector('#drawCanvas');
    const canvasContext = canvas.getContext('2d');
    const clearButton = document.getElementById('clearScreen');

    // set Canvas as a square that is half of the screen width
    canvas.width = window.innerWidth * 0.50;
    canvas.height = canvas.width;

    let isDrawing = false;

    /**
     * Interpret a click/touch and convert into drawing mode
     * @author Steve Padmanaban
     * @param {Event} event - mouse click or screen touch
     */
    function startDraw(event) {
        event.preventDefault();

        isDrawing = true;
        whileDraw(event);
    }

    /**
     * Follow the mouse/touch, drawing until mouse up or touch end
     * @author Steve Padmanaban, Brandon Reponte
     * @param {Event} event - mouse click or screen touch
     */
    function whileDraw(event) {
        // check if click/touch began on canvas
        if (!isDrawing) {
            return;
        }

        // pen configurations
        canvasContext.lineWidth = 10;
        canvasContext.lineCap = 'round';

        // get mouse/touch position
        const boundary = canvas.getBoundingClientRect();
        const xOffset = (event.clientX || event.touches[0].clientX) - boundary.left;
        const yOffset = (event.clientY || event.touches[0].clientY) - boundary.top;

        // only draw within the canvas
        if (xOffset >= 0 && xOffset < canvas.width && yOffset >= 0 && yOffset < canvas.height) {
            canvasContext.lineTo(xOffset, yOffset);
            canvasContext.stroke();
            canvasContext.beginPath();
            canvasContext.moveTo(xOffset, yOffset);
        }

    }

    /**
     * Interpret a mouse/touch release and convert out of drawing mode
     * @author Steve Padmanaban
     * No parameters and No return values 
     */
    function finishDraw() {
        isDrawing = false;
        // prevents pen from picking up where it left off last click/touch
        canvasContext.beginPath();
    }

    /**
     * Clears the content of the canvas
     * @author Steve Padmanaban
     * No parameters and No return values 
     */
    function clearScreen() {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    }

    // desktop events
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', finishDraw);
    canvas.addEventListener('mousemove', whileDraw);

    // mobile events
    canvas.addEventListener('touchstart', startDraw);
    canvas.addEventListener('touchend', finishDraw);
    canvas.addEventListener('touchmove', whileDraw);

    // clear canvas
    clearButton.addEventListener('click', clearScreen);
});

/**
 * AddEventListener for resizing Canvas proportional to the new screenview size
 * @author Brandon Reponte
 */
window.addEventListener('resize', function () {
    const canvas = document.querySelector('#drawCanvas');
    canvas.width = window.innerWidth * 0.50;
    canvas.height = canvas.width;
})