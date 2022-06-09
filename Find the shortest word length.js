
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s) {
    let x = []

    s = s.split(' ')
    for (var i = 0; i < s.length; i++) {
        x.push(s[i].length)
    }
    return Math.min(...x)
}