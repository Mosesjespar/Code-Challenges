/*

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise*/

function isSortedAndHow(array) {

    let ascending = null;
    let nextArr = array.slice(1);
    for (var i = 0; i < nextArr.length; i++) {
        if (nextArr[i] === array[i]) {
            continue;
        } else if (ascending === null) {
            ascending = nextArr[i] > array[i];
        } else if (ascending !== nextArr[i] > array[i]) {
            return 'no';
        };
    }
    if (ascending === null) {
        return 'all items are equal';
    };
    return ascending ? 'yes, ascending' : 'yes, descending';
}
