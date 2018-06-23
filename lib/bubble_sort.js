
const swap = (array, j) => {
    temp = array[j];
    array[j] = array[j - 1];
    array[j - 1] = temp;
};

const bubbleSort = (array) => {
    for (i = 0; i < array.length; i++) {
        for(j = 0; j < array.length; j++){
            if (array[j] < array[j - 1]){
                swap(array, j);
            };
        };
    };
    return array;
};

arr = [3, 5, 2 ,72, 1]

module.exports = bubbleSort;
