// const tellAJoke = function() {
//     console.log('knock knock...');
// }

// tellAJoke()


// const greet = function(name, timeOfDay) {
//     console.log("Good " + timeOfDay + ", " + name);
// }
// const friends = ["Ben", "Yogev", "Yona", "Tomer", "Noam"];

// const time = {
//     morning: "Morning",
//     afternoon: "Afternoon",
//     evening:"Evening"

// };

// let timer = time.evening;

// if (timer == time.morning){
//     for (let f of friends){
//         greet(f, time.morning);
//     };
// } else if (timer == time.afternoon) {
//     for (let f of friends){
//         greet(f, time.afternoon);}

// } else {
//     for (let f of friends){
//         greet(f, time.evening);
//     }

// }


// const creatUser = function(name, age){

//     const newUser = {
//         name: name,
//         age: age,}

//     console.log (newUser);
// };

// creatUser("Amir", 30);

// const user1 ={
//     name:"Lotem",
//     age: 24
// };

// const grow = function (user){
//     user.age++
//     console.log(user1)
// };

// grow(user1);



// const add = function(x, y){
//     const sum = x + y
//     return sum
//     console.log("Returned " + sum)
//   }

//   add(1, 2)


// const person = {
//     name: "Julius",
//     speak: function (food) {
//     console.log(food)
//     }
//   }
//   let cheesToast = "I like cheese toast"
//   person.speak(cheesToast)


// Exercise 1

// const calcAge = function(year, birth){
//     const sumAge = year - birth;
//     return sumAge

// };

// const age = calcAge(2017, 1989)
// console.log(age)

// // Exercise 2
// const calcAge2 = function(year, birth){
//     const age = year - birth;
//     const age1 = age - 1;
//     console.log("You are either " + age + " or " + age1);
// }

// calcAge2(2020, 1990);

// Exercise 3

const isEven = function (number) {
    const modulo = number % 2
    if (modulo === 0) {
        return true;
    } else {
        return false;
    }
};

const numbers = [8, 5, 22, 27,];

for (let number in numbers) {
    console.log(isEven(number));
};


// Exercise 4

// פונקציה מקבלת מערך ועוברת עליו באמצעות לופ שבודק האם המספר אי זוגי באמצעות הפונקציה הקיימת ומדפיסה את המספר
const printOdd = function (arr) {
    for (let number in arr) {
        const result = isEven(number)
        if (result === false) {
            console.log(number);
        }
    }
}
printOdd(numbers)


// Exercise 4
// לכתוב פונקציה עם 2 פרמטרים: אחד מערך מספרים והשני מספר בודד. הפונקציה צריכה להחזיר אמת או לא אמת לפי הקיימות של המספר הבודד במערך.

const checkExists = function (arr, num) {
    for (let number of arr) {
        const result = number
        if (result === num) {
            return true
        } 
    }

    return false
    

};

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(checkExists(numList, 11));



