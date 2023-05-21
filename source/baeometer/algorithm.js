/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/19/2023
 * Authors: Jenny Lam
 * Description: Algorithm to compute fortune
 */

/**
 * Returns zodiac sign given date
 * @author Jenny Lam
 * @param {string} date 
 * @returns {string} zodiac sign
 */
function getZodiac(dateString) {

    const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
    let dateParts = dateString.split("-");
    let month = parseInt(dateParts[1]);
    let day = parseInt(dateParts[2]);
    console.log(month)

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
 * @param {*} str 
 * @returns {number}
 */
function sumAscii(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return sum;
  }

/**
 * Returns score from 0-1 given names and birthdays
 * @author Jenny Lam
 * @param {string} name1 
 * @param {string} name2 
 * @param {string} bday1 
 * @param {string} bday2 
 * @returns {number} score
 */  
function getScore(name1, name2, bday1, bday2) {

    const zodiac1 = getZodiac(bday1);
    const zodiac2 = getZodiac(bday2);

    const score = Math.min(
        (sumAscii(zodiac1) + sumAscii(name2))/(sumAscii(zodiac2) + sumAscii(name1)), 
        (sumAscii(zodiac2) + sumAscii(name1))/(sumAscii(zodiac1) + sumAscii(name2))
        );
    return score;
}

// Export for Jest unit testing
if (typeof module !== 'undefined') {
    module.exports.getScore = getScore
}