const array = [2, 7, 11, 0, 2, 17, 23, 9];
const doubleElements = array.map (x => x * 2);
// console.log (doubleElements);

/** Problem 1 */

const numbers = [2, 4, 6, 8, 10];
const doubsleNumbers = numbers.map (z => z * 2);
// console.log (doubsleNumbers);

/** Problem 2 */

const names = ["ahkamul", "rahim", "karim", "salma"];
/**map() ব্যবহার করে সব নামকে uppercase এ রূপান্তর করে একটি নতুন array তৈরি করুন। */

const upperNames = names.map (name => name.toUpperCase());
// console.log (upperNames);

/** Problem 3 */
const users = [
  { id: 1, name: "Ahkamul", age: 35 },
  { id: 2, name: "Rahim", age: 28 },
  { id: 3, name: "Karim", age: 40 }
];
/** map() ব্যবহার করে প্রতিটি object থেকে শুধু name property নিয়ে একটি নতুন array তৈরি করুন। */

const usersNames = users.map (name => name.name);
// console.log (usersNames);

/** Problem 4 */
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];
/** map() ব্যবহার করে একটি নতুন array তৈরি করুন, যেখানে প্রতিটি object-এর সাথে
discountedPrice নামে একটি নতুন property যোগ হবে (১০% ছাড় ধরে নিন)। */

const discountedPrice = products.map (discountedPrice => discountedPrice.price * 0.90);
// console.log (discountedPrice);


/** Problem 5 */

const people = [
  { firstName: "Ahkamul", lastName: "Hoque" },
  { firstName: "Rahim", lastName: "Uddin" },
  { firstName: "Salma", lastName: "Begum" }
];
/** map() ব্যবহার করে একটি নতুন array তৈরি করুন, যেখানে প্রতিটি element হবে এই format-এর একটি string:
 * "Full Name: firstName lastName"
 */

// const fullName = people[0].firstName + people[0].lastName;
// // console.log (fullName);

// const fullNamesArrow = (array) => {
//     let newArray = [];
//     for (let element of array){
//         element = `${element.firstName}  ${element.lastName}`;
//         // console.log (element.firstName + element.lastName);
//         newArray.push (element);
//         // console.log (newArray);
//     }
//     return newArray;
// }
// // fullNamesArrow (people);
// console.log (fullNamesArrow(people));

const fullNames = people.map (element => `Full Name: ${element.firstName}  ${element.lastName}`);
console.log (fullNames);