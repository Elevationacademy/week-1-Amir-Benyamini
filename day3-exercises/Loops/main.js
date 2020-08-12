// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

// console.log(companies[0])
// console.log(companies[1])
// console.log(companies[2])
// console.log(companies[companies.length -1])

// for(let companyIndex in companies){
//     console.log(companies[companyIndex])
//   }

//   for(let companyIndex in companies){
//     console.log(companyIndex)
//   }

//   for(let company of companies){
//     console.log("One day I will work at " + company)
//   }
  
// while(companies.length > 0){
//     companies.splice(0, 1)
// }
  
// console.log("One day I will work at " + companies[0])

// for(let i = 80; i < 100; i+=2){
//     console.log(i)
//   }

// Exercise 1

const name = ['amir', 'ben', 'lotem', 'shani']
const age =  [30, 29, 25, 26]

for (let userIndex in name && age){
    console.log(name [userIndex] + " is " + age [userIndex] + " years old")
}

// Exercise 2

const coins = [6, 7, 8, 9];
let sum = 0;

for (let coin of coins){
    sum += coin;
}
console.log(sum);


let _$sum = 0;
for (let i = 0; i < coins.length; i++) {
    _$sum +=  coins[i];
}
console.log(_$sum);

// Exercise 3
let avg = sum / coins.length;

console.log(avg)


// // Exercise 4
const nums = [];

for (let i = 0; i < 100; i++){
  nums.push(i);
}

console.log(nums);


// for(let i=0; i < 4; i++) {
//     console.log(i);
// }

// let i=0;
// while(i<4) {
//     console.log(i);
//     i++;
// }

//while (count < 100) {

//console.log (count);

// }
