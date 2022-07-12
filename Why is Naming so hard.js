// Given a preloaded function

// function print(obj) {}
// your challenge is to modify/extend the given function

// function User() {}
// so that print function displays what is expected.

// For example:

// print({}) === 'Object'
// print(1) === 'Number'
// print(Number) === 'Function'
// print(Array) === 'Function'
// print(new Array()) === 'Array'
// print(Array()) === 'Array'

// // this is your challenge
// print(new User()) === 'User'
// print(User) === 'User'

function User() {
    return User
}

User[Symbol.toStringTag] = 'User'