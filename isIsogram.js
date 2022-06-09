
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
*/
function isIsogram(str) {
    //...
    let n = 0
    str = str.toLowerCase()
    for (var i = 0; i < str.length; i++) {
        if (str.split(str[i]).length > 2) {
            n--;
        }
    }
    return n > 0 || n === 0
}