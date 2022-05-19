// Iterate with javascript while loops:
console.log("       - Iterate with javascript while loops");

// Add the numbers 5 through 0 (inclusive) in descending order to myArray using 
// a while loop.

const myArray = [];
console.log("myArray:", myArray);

let i = 5;

while (i >= 0) {
    myArray.push(i);
    i--;
}

console.log("myArray:", myArray);

console.log("---");

// Iterate with javascript for loops:
console.log("       - Iterate with javascript for loops:");

// Use a for loop to push the values 1 through 5 onto myArray2.

const myArray2 = [];
console.log("myArray2:", myArray2);

for (let i = 1; i <= 5; i++) {
    myArray2.push(i);
}

console.log("myArray2:", myArray2);

console.log("---");

// Iterate odd numbers with a for loop:
console.log("       - Iterate odd numbers with a for loop:");

// Push the odd numbers from 1 through 9 to myArray using a for loop.

const myArray3 = [];
console.log("myArray3:", myArray3);

for (let i = 1; i < 10; i += 2) {
    myArray3.push(i);
}

console.log("myArray3:", myArray3);

console.log("---");

// Count backwards with a for loop:
console.log("       - Count backwards with a for loop:");

// Push the odd numbers from 9 through 1 to myArray using a for loop.

const myArray4 = [];
console.log("myArray4:", myArray4);

for (let i = 9; i > 0; i -= 2) {
    myArray4.push(i);
}

console.log("myArray4:", myArray4);
console.log("---");

// Iterate through an array with a for loop:
console.log("       - Iterate through an array with a for loop:");

// Declare and initialize a variable total to 0. Use a for loop to add the
// value of each element of the myArr array to total.

const myArr = [2, 3, 4, 5, 6];
console.log("myArr:", myArr);

let total = 0;
console.log("total:", total);

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log("total:", total);

console.log("---");

// Nesting for loops:
console.log("       - Nesting for loops:");

// Modify function multiplyAll so that it returns the product of all the 
// numbers in the sub-arrays of arr.

const arr = [[1,2], [3, 4], [5, 6, 7]];
console.log("arr:", arr);

function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let ii = 0; ii < arr[i].length; ii++) {
            product *= arr[i][ii];
        }
    }
    
    return product;
}

console.log("multiplyAll(arr):", multiplyAll(arr));

console.log("---");

// Iterate with javascript do...while loops:
console.log("       - Iterate with javascript do...while loops:");

const myArray5 = [];
console.log("myArray5:", myArray5);

let ii = 10;

// Change the while loop in the code to a do...while loop so the loop will 
// push only the number 10 to myArray, and i will be equal to 11 when your 
// code has finished running.

// while (ii < 5) {
//     myArray5.push(ii);
//     ii++;
// }

do {
    myArray5.push(ii);
    ii++;
} while (ii < 5);

console.log("myArray5:", myArray5);

// Replace loops using recursion:
console.log("       - Replace loops using recursion:");

// Write a recursive function, sum(arr, n), that returns the sum of the first 
// n elements of an array arr.

const arr2 = [ 2, 3, 4 ];
console.log("arr2:", arr2);

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

// 4 return 0
// 3 return sum(arr, 0) + 2 = 0 + 2
// 2 return sum(arr, 1) + 3 = 2 + 3
// 1 return sum(arr, 2) + 4 = 5 + 4
// = 9

console.log("sum(arr2, 3):", sum(arr2, 3));
