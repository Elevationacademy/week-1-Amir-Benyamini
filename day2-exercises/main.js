// Variables,IDENTIFIERS & PRIMITIVE TYPES

console.log("Hello, world!")

const name = "Taylor" //initialized with the value of "Taylor"
let shoppingCartItems //not initialized, only defined - we'll learn about let in a second

   console.log(shoppingCartItems)

let example = 25
example = 24
console.log (example)

let moneyInBank = 600

   console.log ('My money:' + moneyInBank * 1.5)


// CONCATENATION

const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString

   console.log(bothStrings)

let firstStrings = "bar"
firstStrings += "man"

   console.log(firstStrings) // will print "barman"

let galaxyVersion = "S"
galaxyVersion += 7

   console.log(galaxyVersion) // will print "S7"

// COMPARISON OPERATORS

console.log(3 < 5) // will output true
console.log(3 > 5) // will output false
console.log(2 >= 2) // will output true
console.log(1 <= -1) // will output  false
console.log("this string" == "that string") // will output false

console.log(1 == "1")// prints true
console.log(1 === "1")// prints false 

// MATHEMATICAL OPERATORS

console.log(27 + 15)
console.log(81 / 9)
console.log(3.14 * 10)

const num1 = 17
const num2 = 3
console.log(num1 + num2) // will print 20

console.log( (3 + 5) * 2 ) // same as 8*2, which will print 16

// MODULO

console.log(14 % 5) // will print 4

const x = 41223
console.log(x % 2 == 0)

// TRUTHY
console.log(3 < 5)
23 == "23"
41 === 41
"this string" == "this string"
972 % 2 == 0

// FALSEY
23 == 22
"home" == "house"

// LOGICAL OPERATORS
// &&
// ||
// !

console.log((3 < 2) ||  (1 > 0)) // prints true because the right side resolves to true, even though the left side resolves to false

console.log(("a" == "a") && (32 === "32")) // prints false because the right side resolves to false

console.log(!(10 > 5)) // prints false, because the 10 IS greater than 5 (true), but the ! flips the true to a false

console.log("51" !== 52)



let startPosition
let newPosition = (startPosition || 0) + 10

console.log(newPosition) //prints 10     // good use of Or logical operator


let numGoalsAchieved = 3
//achieve another goal
numGoalsAchieved+=2
numGoalsAchieved ++
console.log(numGoalsAchieved)
