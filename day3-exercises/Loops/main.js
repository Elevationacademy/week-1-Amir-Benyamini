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

// const name = ['amir', 'ben', 'lotem', 'shani']
// const age =  [30, 29, 25, 26]

// for (let userIndex in name && age){
//     console.log(name [userIndex] + " is " + age [userIndex] + " years old")
// }

// Exercise 2

// const coins = [6, 7, 8, 9];
// let sum = 0;

// for (let coin of coins){
//     sum += coin;
// }
// console.log(sum);


// let _$sum = 0;
// for (let i = 0; i < coins.length; i++) {
//     _$sum +=  coins[i];
// }
// console.log(_$sum);

// Exercise 3
// let avg = sum / coins.length;

// console.log(avg)


// Exercise 4

// const nums = [];

// for (let i = 0; i < 100; i++){
//   nums.push(i);
// }

// console.log(nums);

// Exercise 5

// for (let num of coins){
//     if (num % 2 == 1){
//         console.log(num)
//     }
// }

// // Exercise 6

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

// for (let num in nums){
// 	if (nums[num] == 709 ){
// 		console.log(num)
// 	}
// }
//  Exercise 7

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for (let i in names){
// 	people.push({names: names[i], ages: ages[i]})
// }

// console.log(people)

// for (let i = 0; i < people.length; i++){
// 	console.log(people[i])

// }
//  Exercise 8
// for (let i in people){
// 	console.log(people[i].names +  " is " + people[i].ages  + " years old.")
// }

// find id = 2
// delete post

// Exercise 9
// const posts = [
// 	{id: 1, text: "Love this product"},
// 	{id: 2, text: "This is the worst. DON'T BUY!"},
// 	{id: 3, text: "So glad I found this. Bought four already!"}
//  ]
 
// for (let i = 0; i < posts.length; i++ ){
// 	if (posts[i].id === 2){
// 		posts.splice(i, 1)
// 	}

// }

// console.log(posts)
	

// Exercise 10 find id === 2, find comments id === 3, delete it.

// const posts = [
// 	{
// 	  id: 1, 
// 	  text: "Love this product",
// 	  comments: []
// 	},
// 	{ 
// 	  id: 2, 
// 	  text: "This is the worst. DON'T BUY!", 
// 	  comments: [
// 					  {id: 1, text: "Idiot has no idea"}, 
// 					  {id: 2, text:"Fool!"}, 
// 					  {id: 3, text: "I agree!"}
// 					]
// 	 },
// 	 {
// 	  id: 3, 
// 	  text: "So glad I found this. Bought four already!",
// 	  comments: []
// 	 }
//  ]

//  for(i =  0; i < posts.length; i++){
// 	 let post = posts[i]
// 	 if (post.id === 2){
// 		 for (x = 0; x < post.comments.length; x++){
// 			 let comment = post.comments[x]
// 			 if (comment.id === 3){
// 				 post.comments.splice(x, 1)
// 			 }
// 		 }
// 	 }
//  }
//  console.log(posts)


const dictionary = {
	"A": ["Aardvark", "Abacus", "Actually", "Atomic"],
	"B": ["Banana", "Bonkers", "Brain", "Bump"],
	"C": ["Callous", "Chain", "Coil", "Czech"]
 }

//  Extension