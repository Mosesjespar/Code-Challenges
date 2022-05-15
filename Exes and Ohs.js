/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
 */

function XO(str) {
    //code here
  let smallO = str.split("o").length-1,
  smallX=str.split("x").length-1,
  bigX=str.split("X").length-1,
  bigO=str.split("O").length-1;
  
 return ((smallO+bigO) == (bigX+smallX))
}