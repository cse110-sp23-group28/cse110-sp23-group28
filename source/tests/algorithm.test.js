/**
 * CSE 110 SP23 Team 28, UC Sussy Developers
 * Date: 05/19/2023
 * Authors: Jenny Lam, Brandon Reponte, Alvaro Ramos
 * Description: Unit tests for algorithm functions
 */

const functions = require('../scripts/algorithm.js');

// Zodiac test 1
test('getZodiac outputs correct zodiac 1', () => {
    const res = functions.getZodiac("2000-1-19");
    expect(res).toBe("Capricorn");
});

// Zodiac test 2
test('getZodiac outputs correct zodiac 2', () => {
    const res = functions.getZodiac("2000-11-18");
    expect(res).toBe("Scorpio");
});

// ASCII test 1
test('sumAscii outputs correct sum 1', () => {
    const res = functions.sumAscii("this is a test");
    expect(res).toBe(1301);
});

// ASCII test 2
test('sumAscii outputs correct sum 2', () => {
    const res = functions.sumAscii("");
    expect(res).toBe(0);
});

// getScore test 1
test('getScore outputs score btwn 0 and 1', () => {
    const res = functions.getScore("name1", "name2", "2003-04-11", "2003-09-17");
    expect(res).toBeGreaterThanOrEqual(0);
    expect(res).toBeLessThanOrEqual(1);
});