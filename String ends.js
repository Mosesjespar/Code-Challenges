/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
              // TODO: complete

              return ending.length < 1 ? true : (str.slice(-ending.length) === ending);

              //                          OR
              //                          return str.endsWith(ending); also works
}

//ending.length < 1 ? true will solve the incidence where the ending string is null
//also the ending of str is null