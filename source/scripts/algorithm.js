/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/19/2023
 * Authors: Jenny Lam, Brandon Reponte, Alvaro Ramos
 * Description: Algorithms that process user input into a fortune of time
 */

/**
 * Returns zodiac sign given date
 * @author Jenny Lam
 * @param {string} dateString The string representation of the given date (YYYY-MM-DD)
 * @returns {string} zodiac sign
 */
function getZodiac(dateString) {

    // Define constants for zodiac cut-off days and signs
    const ZODIAC_DAYS = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const ZODIAC_SIGNS = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 
                   'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];

    const JANUARY = 0;
    const DECEMBER = 11;

    // Split the date string into its parts
    let dateParts = dateString.split('-');
    // Subtract 1 to match array index for month
    let month = parseInt(dateParts[1]) - 1;
    let day = parseInt(dateParts[2]);

    // Adjust the month if the day falls before the zodiac sign change
    // January case
    if (month === JANUARY && day <= ZODIAC_DAYS[DECEMBER]) {
        // Set month to December
        month = DECEMBER;
    // Day falls before the current zodiac sign change
    } else if (day < ZODIAC_DAYS[month]) {
        // Decrease month to match the correct zodiac sign
        month--;
    };

    // Return the zodiac sign based on the month
    return ZODIAC_SIGNS[month];
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
 * @param {string} bday1 The birthday of the first person (YYYY-MM-DD)
 * @param {string} bday2 The birthday of the second person (YYYY-MM-DD)
 * @param {object} canvasData The data of the entire context of the canvas element
 * @param {Array<number>} canvasData.data The array holding the RGBA data of canvas element
 * @returns {number} score
 */  
function getScore(name1, name2, bday1, bday2, canvasData) {

    // Map zodiacs to indices to look up compatibility in matrix
    const ZODIAC_INDICES = {
        'Aries': 0,
        'Taurus': 1,
        'Gemini': 2,
        'Cancer': 3,
        'Leo': 4,
        'Virgo': 5,
        'Libra': 6,
        'Scorpio': 7,
        'Sagittarius': 8,
        'Capricorn': 9,
        'Aquarius': 10
    }

    // Zodiac compatibility scores
    const ZODIAC_COMPATIBILITIES = [
        [1.0, 0.7, 0.5, 0.3, 0.9, 0.7, 0.6, 0.4, 0.9, 0.8, 0.5, 0.6],
        [0.7, 1.0, 0.8, 0.6, 0.7, 0.9, 0.8, 0.3, 0.6, 0.9, 0.8, 0.4],
        [0.5, 0.8, 1.0, 0.7, 0.5, 0.6, 0.9, 0.7, 0.5, 0.8, 0.9, 0.7],
        [0.3, 0.6, 0.7, 1.0, 0.4, 0.5, 0.7, 0.8, 0.4, 0.7, 0.8, 0.9],
        [0.9, 0.7, 0.5, 0.4, 1.0, 0.8, 0.7, 0.5, 0.9, 0.7, 0.6, 0.5],
        [0.7, 0.9, 0.6, 0.5, 0.8, 1.0, 0.8, 0.4, 0.7, 0.9, 0.8, 0.3],
        [0.6, 0.8, 0.9, 0.7, 0.7, 0.8, 1.0, 0.6, 0.6, 0.8, 0.9, 0.7],
        [0.4, 0.3, 0.7, 0.8, 0.5, 0.4, 1.0, 0.9, 0.3, 0.6, 0.7, 0.8],
        [0.9, 0.6, 0.5, 0.4, 0.9, 0.7, 0.6, 0.3, 1.0, 0.9, 0.6, 0.5],
        [0.8, 0.9, 0.8, 0.7, 0.7, 0.9, 0.8, 0.6, 0.9, 1.0, 0.8, 0.4],
        [0.5, 0.8, 0.9, 0.8, 0.6, 0.8, 0.9, 0.7, 0.6, 0.8, 1.0, 0.7],
        [0.6, 0.4, 0.7, 0.9, 0.5, 0.3, 0.8, 0.8, 0.5, 0.4, 0.7, 1.0]
    ]

    // Note: dummy value for canvasData
    let mockCanvasData = {
        width: 200,
        height: 200,
        // 4 bytes per pixel (RGBA)
        data: new Uint8ClampedArray(200 * 200 * 4) 
    }

    // The number of pixels user inputs into canvas
    const canvasPixels = getCanvasPixels(mockCanvasData);
    console.log(canvasPixels);  // should be 40000

    // Get zodiacs from birthdays, then convert to zodiac index to map to matrix
    const zodiac1Index = ZODIAC_INDICES[getZodiac(bday1)];
    const zodiac2Index = ZODIAC_INDICES[getZodiac(bday2)];

    const score = ZODIAC_COMPATIBILITIES[zodiac1Index][zodiac2Index];

    return score;
}

/**
 * Converts score (0-1) from getScore to a time range
 * @author Jenny Lam
 * @param {number} score between 0 and 1
 * @returns {string} time range
 */
function convertScoreToTime(score) {

    const TIME_RANGES = [
        { scoreRange: [0, 0.2], timeRange: '1 month' },
        { scoreRange: [0.2, 0.4], timeRange: '6 months' },
        { scoreRange: [0.4, 0.5], timeRange: '1 year' },
        { scoreRange: [0.5, 0.6], timeRange: '1.5 years' },
        { scoreRange: [0.6, 0.7], timeRange: '2 years' },
        { scoreRange: [0.7, 0.8], timeRange: '3 years' },
        { scoreRange: [0.8, 0.9], timeRange: '5 years' },
        // Score can be 1 but it's not possible for a score to be above 1
        { scoreRange: [0.9, 1.01], timeRange: 'Forever' }
    ];

    // Return the corresponding time range for the given score by checking all time ranges
    for (let i = 0; i < TIME_RANGES.length; i++) {
        const { scoreRange, timeRange } = TIME_RANGES[i];
        if (score >= scoreRange[0] && score < scoreRange[1]) {
            return timeRange;
        }
    }
    
    // Return an error message for scores outside the specified range
    return 'Error: Invalid Score';
}

// Export for Jest unit testing
if (typeof module !== 'undefined') {
    module.exports.sumAscii = sumAscii;
    module.exports.getScore = getScore;
    module.exports.getCanvasPixels = getCanvasPixels;
    module.exports.getZodiac = getZodiac;
    module.exports.convertScoreToTime = convertScoreToTime;
}