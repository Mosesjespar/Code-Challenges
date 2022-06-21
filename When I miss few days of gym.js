// Task
// As can be seen from the funny image above (or am I the only person to find the picture above hilarious?) there is lots of slang.
// Your task is to define a function gymSlang which accepts a string argument and does the following:

// Replace all instances of "probably" to "prolly"
// Replace all instances of "i am" to "i'm"
// Replace all instances of "instagram" to "insta"
// Replace all instances of "do not" to "don't"
// Replace all instances of "going to" to "gonna"
// Replace all instances of "combination" to "combo"
// Your replacement regexes should be case-sensitive, only replacing the words above with slang if the detected pattern is in lowercase.
// However, please note that apart from 100% lowercase matches, you will also have to replace matches that are correctly capitalized
// (e.g. "Probably" => "Prolly" or "Instagram" => "Insta").

// Finally, your code will be tested to make sure that you have used RegExp replace in your code.

// Enjoy :D

function gymSlang(phrase) {
    phrase = phrase.replace(/(p)robably/gi, '$1rolly');
    phrase = phrase.replace(/(i) am/ig, "$1'm");
    phrase = phrase.replace(/(i)nstagram/ig, "$1nsta");
    phrase = phrase.replace(/(d)o not/ig, "$1on't");
    phrase = phrase.replace(/(g)oing to/ig, "$1onna");
    phrase = phrase.replace(/(c)ombination/ig, "$1ombo");

    return phrase;
}