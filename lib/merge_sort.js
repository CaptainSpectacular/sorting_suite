const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    };

    var middle = parseInt(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    var result = [];

    while ( left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        };
    };

    while (left.length > 0) {
        result.push(left.shift());
    };

    while (right.length > 0) {
        result.push(right.shift());
    };

    return result;
};

array = [3, 4, 5, 2, 1, 7, 1, 8, 2, 1, 10];

module.exports = mergeSort;
