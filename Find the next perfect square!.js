/*
                            The Question
   You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square                         
*/

//the soln
function findNextSquare(sq) {
              // Return te next square if sq is a perfect square, -1 otherwise
              var sqRoot = Math.sqrt(sq);
              if (Number.isInteger(sqRoot)) {//checking if the number is a perfect square/an interger

                            var x = sqRoot + 1
                            return x * x;
              }

              else { //if the input isnt a perfect square,-1 is returned

                            return -1;
              }
}