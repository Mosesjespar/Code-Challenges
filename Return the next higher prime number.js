// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function myFunction(a) {

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return myFunction(a += 1)
        }
    }
    return a;
}