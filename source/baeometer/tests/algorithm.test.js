const functions = require('../algorithm.js');

test('example input is btwn 0 and 1', () => {
    const res = functions.getScore("name1", "name2", "2003-04-11", "2003-09-17");
    expect(res).toBeGreaterThanOrEqual(0);
    expect(res).toBeLessThanOrEqual(1);
});

