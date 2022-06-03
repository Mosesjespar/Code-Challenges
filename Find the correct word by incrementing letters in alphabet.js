// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
/*Test Cases:c
myFunction('bnchmf')
Expected
'coding'
myFunction('bgddrd')
Expected
'cheese'
myFunction('sdrshmf')
Expected
'testing'
 */
function myFunction(str) {
    const arr = [...str];
    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt() + 1));
    return correctedArray.join('');
}