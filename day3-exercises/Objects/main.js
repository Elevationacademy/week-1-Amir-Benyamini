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

let veggies = {
    tommato: 10,
    carrot: 5,
    department: "veggies"
}

let meat = {
    chiken: 5,
    beef: 3,
    department: "meat"
}

let sweets = {
    choclate: 3,
    iceCream: 1,
    department: "sweets"
}

veggies.tommato = 8

const myList = [veggies, meat, sweets]

myList.splice (1, 1)


// // Exercise 3

let carbs = {
    rice:4,
    pasta:2,
    department:'carbs'
}

let saltySnacks = {
    bamba:4,
    chips:2,
    department:'saltysnacks'
}

const lotemList = [saltySnacks, carbs]

myList.push(...lotemList)



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

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');

  if (reservations[name] && !reservations[name].claimed){
      alert("Welcome, " + name)
  } else if (reservations[name] && reservations[name].claimed){
    alert("Hmm, someone already claimed this reservation")
  } else{
      alert("You have no reservation")
      reservations[name]={claimed: true}
  }

  console.log(reservations)
  
