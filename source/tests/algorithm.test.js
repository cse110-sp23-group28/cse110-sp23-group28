/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/19/2023
 * Authors: Jenny Lam
 * Description: Unit tests for algorithm functions
 */

const functions = require('../scripts/algorithm.js');

test('getZodiac outputs correct zodiac 1', () => {
    const res = functions.getZodiac("2000-1-19");
    expect(res).toBe("Capricorn");
});

test('getZodiac outputs correct zodiac 2', () => {
    const res = functions.getZodiac("2000-11-18");
    expect(res).toBe("Scorpio");
});

test('sumAscii outputs correct sum 1', () => {
    const res = functions.sumAscii("this is a test");
    expect(res).toBe(1301);
});

test('sumAscii outputs correct sum 2', () => {
    const res = functions.sumAscii("");
    expect(res).toBe(0);
});

test('getScore outputs score btwn 0 and 1', () => {
    const res = functions.getScore("name1", "name2", "2003-04-11", "2003-09-17");
    expect(res).toBeGreaterThanOrEqual(0);
    expect(res).toBeLessThanOrEqual(1);
});

test('score to time maps correctly', () => {

    const scoresToTimes = [
        { score: 0, time: '1 month' },
        { score: 0.1, time: '1 month' },
        { score: 0.2, time: '6 months' },
        { score: 0.4, time: '1 year' },
        { score: 0.5, time: '1.5 years' },
        { score: 0.6, time: '2 years' },
        { score: 0.7, time: '3 years' },
        { score: 0.8, time: '5 years' },
        { score: 0.9, time: 'Forever' },
        { score: 1, time: 'Forever' },
        { score: -1, time: 'Error: Invalid Score' },
    ]
    for (const item of scoresToTimes) {
        const { score, time } = item;
        expect(functions.convertScoreToTime(score)).toBe(time);
    }
})

