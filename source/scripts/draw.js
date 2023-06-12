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
    const canvas = document.querySelector('#canvasArea');
    const canvasContext = canvas.getContext('2d');
    const clearButton = document.getElementById('clearScreen');

    let isDrawing = false;


    /**
     * Interpret a click/touch and convert into drawing mode
     * @author Steve Padmanaban
     * @param {object} event - Event for mouse click or screen touch
     */
    function startDraw(event) {
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

    /**
     * Change canvas size for based on window size
     * @author Alvaro Ramos-Sanchez, Brandon Reponte
     * @param {object} smallWindow - MediaQueryList storing information about css media query
     * No parameters and No return values
     */
    function handleWindowChange(smallWindow) {
        // if document matches media query list in smallWindow change the canvas size
        const rootStyles = window.getComputedStyle(document.documentElement);

        // Get the original canvas dimensions and image data
        const originalWidth = canvas.width;
        const originalHeight = canvas.height;
        const originalImageData = canvasContext.getImageData(0, 0, originalWidth, originalHeight);
        const standardLineWidth = 10;

        // Window is small
        // slicing is used to get rid of 'px'
        if (smallWindow.matches) {
            canvas.width = rootStyles.getPropertyValue('--canvas-width-small').slice(0, - 2);
            canvas.height = rootStyles.getPropertyValue('--canvas-height-small').slice(0, - 2);
            canvasContext.lineWidth = standardLineWidth / 2;
        }
        else {
            canvas.width = rootStyles.getPropertyValue('--canvas-width-big').slice(0, - 2);
            canvas.height = rootStyles.getPropertyValue('--canvas-height-big').slice(0, - 2);
            canvasContext.lineWidth = standardLineWidth;
        }

        // pen configurations and gradient
        const penGradient = canvasContext.createLinearGradient(0, 0, 0, canvas.height);
        penGradient.addColorStop(0, '#F9B1B1');
        penGradient.addColorStop(1, '#BD00FF');
        canvasContext.strokeStyle = penGradient;
        canvasContext.lineCap = 'round';

        // create a temporary canvas to hold the scaled drawing
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = originalWidth;
        tempCanvas.height = originalHeight;
        const tempContext = tempCanvas.getContext('2d');

        // draw the original image data onto the temporary canvas
        tempContext.putImageData(originalImageData, 0, 0);

        // clear the canvas on the original canvas
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);

        // disable image smoothing (to make drawing less blurry)
        canvasContext.imageSmoothingEnabled = false;

        // draw the temporary canvas onto the new canvas
        canvasContext.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    }


    // object storing information about media query for small window
    const smlWn = window.matchMedia('screen and (max-width: 767px),screen and (max-height: 480px)');

    // Initial check for small window at runtime
    handleWindowChange(smlWn);
    // Event listener to check for small window
    smlWn.addEventListener('change', handleWindowChange);

    // desktop events
    canvas.addEventListener('mousedown', startDraw);
    window.addEventListener('mouseup', finishDraw);
    canvas.addEventListener('mousemove', whileDraw);

    // mobile events
    canvas.addEventListener('touchstart', startDraw);
    window.addEventListener('touchend', finishDraw);
    canvas.addEventListener('touchmove', whileDraw);

    // clear canvas
    clearButton.addEventListener('click', clearScreen);

});
