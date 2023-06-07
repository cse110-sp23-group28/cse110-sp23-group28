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
    //const CANVAS_WIDTH_BIG = 569;
    //const CANVAS_WIDTH_SMALL = 278;
    //const CANVAS_HEIGHT_BIG = 400;
    //const CANVAS_HEIGHT_SMALL = 220;

    // access Canvas elements
    const canvas = document.querySelector('#canvasArea');
    const canvasContext = canvas.getContext('2d');
    const clearButton = document.getElementById('clearScreen');

    // set Canvas as a square that is half of the screen width
    let cssWidth = getComputedStyle(document.body).getPropertyValue('--canvas-width-big');
    let cssHeight = getComputedStyle(document.body).getPropertyValue('--canvas-height-big');

    canvas.width = cssWidth.slice(0, cssWidth.length - 2);
    canvas.height = cssHeight.slice(0, cssHeight.length - 2);

    let isDrawing = false;

    /**
     * Interpret a click/touch and convert into drawing mode
     * @author Steve Padmanaban
     * @param {object} event - Event for mouse click or screen touch
     */
    function startDraw(event) {
        event.preventDefault();

        isDrawing = true;
        whileDraw(event);
    }

    /**
     * Follow the mouse/touch, drawing until mouse up or touch end
     * @author Steve Padmanaban, Brandon Reponte
     * @param {object} event - Event for mouse click or screen touch
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
        const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
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

    /**
     * Change canvas size for based on window size
     * @author Alvaro Ramos-Sanchez
     * @param {object} smallWindow - MediaQueryList storing information about css media query
     * No parameters and No return values
     */
    function handleWindowChange(smallWindow) {
        // if document matches media query list in smallWindow change the canvas size
        if (smallWindow.matches){
            canvas.width = 278;
            canvas.height = 220;

        }
        else {
            canvas.width = 569;
            canvas.height = 400;
        }

    }

    // object storing information about media query for small window
    const smlWn = window.matchMedia('screen and (max-width: 767px),screen and (max-height: 480px)');

    // Initial check for small window at runtime
    handleWindowChange(smlWn);
    // Event listener to check for small window
    smlWn.addEventListener('change', handleWindowChange);

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