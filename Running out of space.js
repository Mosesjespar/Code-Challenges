/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array
 showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce
  ['i','ihave','ihaveno','ihavenospace'].
*/

function spacey(array) {
    let r = []
    for (var i = 1; i <= array.length; i++) {
        let x = array.slice(0, i).join('')
        r.push(x)


    }
    return (r)
}