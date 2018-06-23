const assert = require("chai").assert;
const insertSort = require("../insert_sort");

describe("insert sort", function() {
    it ("sorts an unsorted array", function() {
        unsorted = [1, 5, 9, 4, 7, 3, 8, 2, 6];
        expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert.deepEqual(insertSort(unsorted), expected);
    });
});
