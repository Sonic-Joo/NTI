let numbers = [5, -3, 12, -7, 8, 0, -2, 15, 20, -10];
let positive = 0;

for (let value of numbers) {
  if (value > 0) positive += value;
  else continue;
}

console.log(positive);
console.log(eval(numbers.join("+")));

numbers.push(numbers.shift());
