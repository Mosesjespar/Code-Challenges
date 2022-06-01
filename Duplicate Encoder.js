// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word) {
    // ...
    word = word.toLowerCase()
    let words = word.split('')
    let result = []
    for (var i = 0; i < words.length; i++) {

        word.split(words[i]).length > 2 ? result.push(')') : result.push('(')


    }
    return result.join('')
}
