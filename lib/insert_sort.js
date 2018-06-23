
const insertSort = (array) => {
    for(i = 0; i < array.length; i++){
        var placeholder = array[i];
        var subject     = i - 1;
        while(subject >= 0 && array[subject] > placeholder){
            array[subject + 1] = array[subject];
            subject--;
        };

        array[subject + 1] = placeholder;
    };

    return array;
};

module.exports = insertSort;
