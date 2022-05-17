/*
    Write a function that takes two strings s1 and s2 as parameters.The function should return true if the characters in s1 can be arranged
    to form s2 otherwise return false
*/

function checkStrings(s1, s2) {
    if (s1.length < s2.length) {
        return false
    }
    for (var i = 0; i < s2.length; i++) {


        return s1.split(s2[i]).length >= s2.split(s2[i]).length


    }



}

//              ALGORITHM
/*
    For the condition to be true,all characters in s2 must appear in s1 at least once.
    Therefore the soln to this is going through all characters in s2 and counting the number of times each character appears in s1.
    If all chars appear in s1 then the thing is true else false
*/

