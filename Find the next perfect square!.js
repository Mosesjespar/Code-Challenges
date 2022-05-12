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