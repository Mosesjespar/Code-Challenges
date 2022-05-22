/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"
*/
function getMiddle(s)
{
  //Code goes here!
  let len=s.length
 
  return len%2==0? s.slice((len/2)-1,(len/2)+1):s.slice(((len+1)/2)-1,(len+1)/2)
}