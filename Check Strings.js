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

