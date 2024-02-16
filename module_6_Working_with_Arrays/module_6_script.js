
// Creating an array
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);

// Accessing array elements
console.log(fruits[0]); // Apple

// Array methods
fruits.push('Date');
console.log(fruits); // Adds 'Date' to the end

fruits.pop();
console.log(fruits); // Removes 'Date'

// Iterating over an array
fruits.forEach(function(item, index) {
    console.log(item, index);
});

// Multidimensional array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]); // 5
