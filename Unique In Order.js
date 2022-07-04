
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
var uniqueInOrder = function (i) {
    //your code here - remember iterable can be a string or an array
    //   i = i.join('')
    y = []
    if (typeof (i) === typeof (y)) {
        x = []
        for (var a = 0; a < i.length; a++) {
            if (i[a] !== i[a + 1]) {
                x.push(i[a])
            }
        }
        return x
    }
    else {
        i = i.split('')
        x = []
        for (var a = 0; a < i.length; a++) {
            if (i[a] !== i[a + 1]) {
                x.push(i[a])
            }
        }
        return x
    }
}