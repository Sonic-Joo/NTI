//                                         Task Three

// let users = [
//   { name: "Ali", age: 22 },
//   { name: "Sara", age: 28 },
//   { name: "Mona", age: 35 },
//   { name: "Ahmed", age: 45 },
// ];

// let obj = {
//   Young: [],
//   Middle: [],
//   Old: [],
// };
// for (let i = 0; i < users.length; i++) {
//   if (users[i].age < 25) obj.Young.push(users[i]);
//   else if (users[i].age > 40) obj.Old.push(users[i]);
//   else obj.Middle.push(users[i]);
// }
// console.log(obj);

// ======================================================================================

//                                         Task Four

// let categories = [
//   { category: "Fruits", products: ["Apple", "Banana", "Apple"] },
//   { category: "Vegetables", products: ["Carrot", "Apple"] },
//   { category: "Dairy", products: ["Milk", "Cheese", "Milk"] },
// ];

// let obj = categories
//   .flatMap((cat) => cat.products)
//   .reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});

// console.log(obj);
