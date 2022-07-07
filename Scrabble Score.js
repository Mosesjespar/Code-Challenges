// Write a program that, given a word, computes the scrabble score for that word.

// Letter Values
// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

// Examples
// "cabbage" --> 14
// "cabbage" should be scored as worth 14 points:

// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:

// 3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

// Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.

// ""           --> 0
// "STREET"    --> 6
// "st re et"    --> 6
// "ca bba g  e" --> 14
function scrabbleScore(str) {
    // ...
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; ++i) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'l' || str[i] == 'n' || str[i] == 'r' || str[i] == 's' || str[i] == 't')
            count++;
        if (str[i] == 'd' || str[i] == 'g')
            count += 2;
        if (str[i] == 'b' || str[i] == 'c' || str[i] == 'm' || str[i] == 'p')
            count += 3;
        if (str[i] == 'f' || str[i] == 'h' || str[i] == 'v' || str[i] == 'w' || str[i] == 'y')
            count += 4;
        if (str[i] == 'k')
            count += 5;
        if (str[i] == 'j' || str[i] == 'x')
            count += 8;
        if (str[i] == 'q' || str[i] == 'z')
            count += 10;
    }
    return count;

}