/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
*/
function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function (v) { return word == v.split('').sort().join(''); });
}
