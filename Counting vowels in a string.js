//counting vowels in a string
function getCount(str) {
              let vowelsCount = 0;
              // enter your magic here
              var vowels = ["a", "e", "i", "o", "u"];
              for (var i = 0; i < str.length; i++) {

                            for (var j = 0; j < vowels.length; j++) {
                                          if (str[i] == vowels[j]) {
                                                        vowelsCount++;
                                          }
                            }

              }

              return vowelsCount;
}