let name = '  Frank Pigeon   '

//  length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lowercase
console.log(name.toLowerCase())

// includes method
let password1 = 'abc123nonyabusiness098'
let password2 = 'hello'
let password3 = 'password1234'
// console.log(password.includes('password'))

// trim
console.log(name.trim())

// challenge area

// isValidPassword
// length is more than 8
// does not contain the word password

let isValidPassword = function(password) {
  let passwordTrim = password.trim()
  if (passwordTrim.includes('password') || passwordTrim.length < 8) {
    return false
  } else {
    return true
  }
}

console.log(isValidPassword(password1))
console.log(isValidPassword(password2))
console.log(isValidPassword(password3))
