/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/19/2023
 * Authors: Jenny Lam
 * Description: Unit tests for algorithm functions
 */

const functions = require('../scripts/algorithm.js');

// Zodiac tests
test('getZodiac outputs correct zodiac 1', () => {
    const res = functions.getZodiac("2000-1-19");
    expect(res).toBe("Capricorn");
});

test('getZodiac outputs correct zodiac 2', () => {
    const res = functions.getZodiac("2000-11-18");
    expect(res).toBe("Scorpio");
});

test('getZodiac outputs correct zodiac 3', () => {
    const res = functions.getZodiac("2001-5-8");
    expect(res).toBe("Taurus");
});

// Destiny number tests
test('name returns right destiny number', () => {
    const res = functions.calculateDestinyNumber("JANICE");
    expect(res).toBe(6);
});

test('name returns right destiny number (lowercase)', () => {
    const res = functions.calculateDestinyNumber("janice");
    expect(res).toBe(6);
});

test('name returns right destiny number (has non-letter chars)', () => {
    const res = functions.calculateDestinyNumber("janice01!!");
    expect(res).toBe(6);
});

test('name returns right destiny number (100% non-letter chars)', () => {
    const res = functions.calculateDestinyNumber("9824*()&");
    expect(res).toBe(0);
});

// getScore tests
test('getScore outputs score btwn 0 and 1', () => {
    const res = functions.getScore("name1", "name2", "2003-04-11", "2003-09-17", 1000);
    expect(res).toBeGreaterThanOrEqual(0);
    expect(res).toBeLessThanOrEqual(1);
});

test('score to time maps correctly', () => {

    const scoresToTimes = [
        { score: 0, time: '1 month' },
        { score: 0.4, time: '6 months' },
        { score: 0.7, time: '5 years' },
        { score: 1, time: 'Forever' },
        { score: -1, time: 'Error: Invalid Score' },
    ]
    for (const item of scoresToTimes) {
        const { score, time } = item;
        expect(functions.convertScoreToTime(score)).toBe(time);
    }
})

