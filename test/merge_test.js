const assert = require("chai").assert;
const mergeSort = require("../lib/merge_sort");

describe("Merge sort", function () {
    it ("Sorts an array", function() {
        var array    = [7, 4, 6, 0, 1, 3, 2, 8, 9, 5];
        var expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        assert.deepEqual(mergeSort(array), expected);
    });
});
