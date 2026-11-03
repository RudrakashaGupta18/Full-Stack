
let numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

console.log("First Element:", numbers[0]);

numbers.push(60);
console.log("After Push:", numbers);

numbers.pop();
console.log("After Pop:", numbers);

console.log("Array Length:", numbers.length);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}

console.log("Sum:", sum);
