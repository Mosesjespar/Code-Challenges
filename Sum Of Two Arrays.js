/*
Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
*/


function addArrays(array1, array2) {

    if (array1.length === 0) {
        return array2;
    } else if (array2.length === 0) {
        return array1;
    }

    const x = array1.join('');
    const y = array2.join('');

    const z = Number(x) + Number(y);

    const q = String(z).match(/-?\d/g).map(Number);

    return q;
}