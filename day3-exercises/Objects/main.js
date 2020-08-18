// Objects
// let car ={

//     color: 'black',
//     numWheels: 4,
//     isFancy: false
// }

// console.log ('The ' + car.color + ' car has ' + car.numWheels + ' wheels.')

// if (car.isFancy){
//     console.log(' It is fancy')
// } 
// else {
//     console.log(' It is not fancy')

// }

// let package = {
//     item: 'coffe kit',
//     toBeginning: false,
//     items: ['sleeping bag', 'tent', 'beers']
// }

// if (package.toBeginning){
//    package.items.unshift (package.item)
// } else {
//    package.items.push (package.item) 
// }

// console.log (package.items)

// const human = {
//     age: 0
// }

// const babyNameKey = "name"
// const babyNameValue = "Goojibear"


// human[babyNameKey] = babyNameValue


// console.log(human)

// const bag = {
//     weight: 10,
//     owner: "Larissa",
//     items: [                   // an array with objects in it!
//       {item: "Pen", count: 2},
//       {item: "Bottle", count: 1},
//       {item: "Book", count: 3}
//     ]
//   }
//   console.log(bag.items[0].item)



// Exercise 1

// let p1 = {
// name: 'Robert',
// age: 30,
// city: 'Oranit'
// }

// let p2 = {
//     name: 'Jill',
//     age: 29,
//     city: 'Tel-aviv'
// }

// if (p1.age === p2.age || p1.city === p2.city) {
//     console.log("Jill wanted to date Robert")
// } else {
//     console.log("Jill wanted to date Robert, but couldn't")
// }


// // Exercise 2

// let veggies = {
//     tommato: 10,
//     carrot: 5,
//     department: "veggies"
// }

// let meat = {
//     chiken: 5,
//     beef: 3,
//     department: "meat"
// }

// let sweets = {
//     choclate: 3,
//     iceCream: 1,
//     department: "sweets"
// }

// veggies.tommato = 8

// const myList = [veggies, meat, sweets]

// myList.splice (1, 1)


// // Exercise 3

// let carbs = {
//     rice:4,
//     pasta:2,
//     department:'carbs'
// }

// let saltySnacks = {
//     bamba:4,
//     chips:2,
//     department:'saltysnacks'
// }

// const lotemList = [saltySnacks, carbs]

// myList.push(...lotemList)



// // Exercise 4


// let zen = {
//     title:'zen',
//     author:'ben'
// }

// let tao = {
//     title:'tao',
//     author:'amir'
// }

// const book =[tao, zen]

// let libery = {
//     books: book,
// }

// myList.push(...libery.books)

// console.log (myList)

// Exercise 5
// const reservations = {
// 	bob: { claimed: false },
// 	ted: { claimed: true }
// }

// const name = prompt('Please enter the name for your reservation').toLowerCase();

// if (reservations[name] && !reservations[name].claimed) {
// 	alert("Welcome, " + name)
// } else if (reservations[name] && reservations[name].claimed) {
// 	alert("Hmm, someone already claimed this reservation")
// } else if (!reservations[name]) {
// 	alert("You have no reservation")
// 	reservations[name] = { claimed: true }
// };


// Extensions

const date = 3
const kitchen = {
    owner: "Geraldine",
    hasOven: false,
    fridge: {
        price: 500,
        works: false, 
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const hasOven = kitchen.hasOven
const experationDate = date - kitchen.fridge.items[1].expiryDate
const calPrice = kitchen.fridge.price / 2
if (hasOven && kitchen.fridge.works){

	console.log(kitchen.owner + " " + kitchen.fridge.items[1].name + " expired " + experationDate + " day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.") 
} else if (!hasOven && kitchen.fridge.works){
	console.log(kitchen.owner + " " + kitchen.fridge.items[1].name + " expired " + experationDate + " day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.") 
} else if (hasOven && !kitchen.fridge.works){
	console.log(kitchen.owner + " " + kitchen.fridge.items[1].name + " expired "  + experationDate +  " day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay " + calPrice + " to fix the fridge.") 
} else if(!hasOven && !kitchen.fridge.works){
	console.log(kitchen.owner + " " + kitchen.fridge.items[1].name + " expired "  + experationDate +  " day ago.  Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay " + calPrice + " to fix the fridge.") 
}

