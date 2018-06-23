
const quickSort = (array) => {
    if(array.length <= 1) {
      return array;
    }

    var pivot = array[0];
    var lesser  = [];
    var greater = [];

    for(var i = 1; i < array.length; i++) {
        if(array[i] < pivot) {
            lesser.push(array[i]);
        } else {
            greater.push(array[i]);
        };
    };

    return quickSort(lesser).concat(pivot, quickSort(greater));
};

module.exports = quickSort;
