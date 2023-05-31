/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/19/2023
 * Authors: Jenny Lam, Brandon Reponte, Alvaro Ramos
 * Description: Algorithms that process user input into a fortune of time
 */

/**
 * Returns zodiac sign given date
 * @author Jenny Lam
 * @param {string} dateString The string representation of the given date
 * @returns {string} zodiac sign
 */
function getZodiac(dateString) {

    const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const signs = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 
                   'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    let dateParts = dateString.split('-');
    let month = parseInt(dateParts[1])-1;
    let day = parseInt(dateParts[2]);

    if (month === 0 && day <= 20) {
        month = 11;
    } else if (day < days[month]) {
        month--;
    };
    return signs[month];
}

/**
 * Returns sum of ascii values from string
 * @author Jenny Lam
 * @param {*} str The string to perform the operation on
 * @returns {number} The total sum of each character's ascii value
 */
function sumAscii(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return sum;
  }

/**
 * Returns number of inputted pixels from canvas by reading the alpha value of each pixel
 * @author Brandon Reponte, Alvaro Ramos
 * @param {object} canvasData The data of the entire context of the canvas element
 * @param {Array<number>} canvasData.data The array holding the RGBA data of canvas element
 * @returns {number} The number of pixels user inputs into canvas
 */
function getCanvasPixels(canvasData) {
    let pixelCount = 0;
    // iterate over the pixels of the canvas
    // data is a 1D array in which each pixel is 4 indices (R,G,B,A)
    for (let i = 0; i < canvasData.data.length; i += 4) {
        // if pixel is opaque (default black pixel), increment pixelCount
        if (canvasData.data[i+3]) {
            pixelCount++;
        }
    }
    return pixelCount;
}

/**
 * Returns score from 0-1 given names and birthdays
 * @author Jenny Lam
 * @param {string} name1 The name of the first person
 * @param {string} name2 The name of the second person
 * @param {string} bday1 The birthday of the first person
 * @param {string} bday2 The birthday of the second person
 * @param {object} canvasData The data of the entire context of the canvas element
 * @param {Array<number>} canvasData.data The array holding the RGBA data of canvas element
 * @returns {number} score
 */  
function getScore(name1, name2, bday1, bday2, canvasData) {
    const zodiac1 = getZodiac(bday1);
    const zodiac2 = getZodiac(bday2);

    // Note: dummy value for canvasData
    let mockCanvasData = {
        width: 200,
        height: 200,
        // 4 bytes per pixel (RGBA)
        data: new Uint8ClampedArray(200 * 200 * 4) 
    }

    // The number of pixels user inputs into canvas
    const canvasPixels = getCanvasPixels(mockCanvasData);

    const score = Math.min(
        (sumAscii(zodiac1) + sumAscii(name2))/(sumAscii(zodiac2) + sumAscii(name1)), 
        (sumAscii(zodiac2) + sumAscii(name1))/(sumAscii(zodiac1) + sumAscii(name2))
        );
    return score;
}

// Export for Jest unit testing
if (typeof module !== 'undefined') {
    module.exports.sumAscii = sumAscii;
    module.exports.getScore = getScore;
    module.exports.getCanvasPixels = getCanvasPixels;
    module.exports.getZodiac = getZodiac;
}