const assert = require("chai").assert;
const quickSort = require("../lib/quick_sort");

describe("quick sort", function () {
    it ("Sorts an array", function() {
        var array    = [7, 4, 6, 0, 1, 3, 2, 8, 9, 5];
        var expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        assert.deepEqual(quickSort(array), expected);
    });
});
