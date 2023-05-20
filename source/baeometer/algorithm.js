/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/19/2023
 * Authors: Jenny Lam
 * Description: Algorithm to compute fortune
 */

/**
 * Returns zodiac sign given date
 * @param {Date} date 
 * @returns {string} zodiac sign
 */
function getZodiac(date) {

    const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo",    "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
    let month = date.getMonth();
    let day = date.getDate();

    if (month == 0 && day <= 20) {
        month = 11;
    } else if (day < days[month]) {
        month--;
    };
    return signs[month];
}

function sumAscii(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return sum;
  }

function getScore(name1, name2, bday1, bday2) {

    const zodiac1 = getZodiac(bday1);
    const zodiac2 = getZodiac(bday2);

    const score = min(
                    sumAscii(zodiac1)/sumAscii(zodiac2), 
                    sumAscii(zodiac2)/sumAscii(zodiac1)
                    );
    return score;
}


console.log(getScore("s",4,"2001-03-03", "2001-03-03"));