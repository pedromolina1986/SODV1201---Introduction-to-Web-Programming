/*
TASKS

Create a basic HTML document. - OK

Create a JavaScript file and name it GLA2_YourFirstName_YourStudentID.js - OK
E.g.: GLA2_John_123456.js - OK

Link your JavaScript file to your HTML file declaring the script tag and its source attribute. - OK

For each of the following steps, use console.log to display the answer. (-1 for each missing log).

Use the requested method (map, filter, or reduce)
Original array: [1, 3, 5, 2, 4, 8, 2, 3, 1, 11, 7, 4, 9, 9, 1]
*/
const originalArray = [1, 3, 5, 2, 4, 8, 2, 3, 1, 11, 7, 4, 9, 9, 1];
/*
1) Use “.map” to create a new array without modifying the original array’s elements:
a) Multiply each element by 2. ( /3 marks)
*/
const newMapArray1A = originalArray.map((element) => element * 2);
console.log("originalArray", originalArray)
console.log("1.a)", newMapArray1A);
/*
b) Add 1 to each element. ( /3 marks)
*/
const newMapArray1B = originalArray.map((element) => element + 1);
console.log("originalArray", originalArray)
console.log("1.b)", newMapArray1B);
/*
c) Multiply each element by your Student ID number. ( /3 marks)
*/
const studentID = 467777;
const newMapArray1C = originalArray.map((element) => element * studentID);
console.log("originalArray", originalArray)
console.log("1.c)", newMapArray1C);
/*
2) Use “.filter” to create a new array containing elements that meet the following conditions:
a) For the array resulting from step 1a, all numbers smaller than 10. ( /3 marks)
*/
const newFilterArray2A = newMapArray1A.filter((element) => element < 10);
console.log("originalArray", originalArray)
console.log("2.a)", newFilterArray2A);
/*
b) For the array resulting from step 1b, all odd numbers. ( /3 marks)
*/
const newFilterArray2B = newMapArray1B.filter((element) => element % 2 !== 0);
console.log("originalArray", originalArray)
console.log("2.b)", newFilterArray2B);  
/*
c) For the array resulting from step 1c, all numbers greater than 1,000,000. ( /3 marks)
*/
const newFilterArray2C = newMapArray1C.filter((element) => element > 1000000);
console.log("originalArray", originalArray)
console.log("2.c)", newFilterArray2C);  
/*
3) Use “.reduce” to calculate a single value from the array:
a) Calculate the sum of all elements from the original array. ( /3 marks)
*/
const sumOriginalArray = originalArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("originalArray", originalArray)
console.log("3.a)", sumOriginalArray);  
/*
b) Remove all duplicates from the original array. ( /3 marks)
*/
const uniqueElements = originalArray.reduce((accumulator, currentValue) => {       
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);
console.log("originalArray", originalArray)
console.log("3.b)", uniqueElements);    
/*
c) Flatten the following multidimensional array into a one-dimensional array:
[[1, 2], [3, 4], [5, [6, 7]]] ( /3 marks)
*/
const multiDimensionalArray = [[1, 2], [3, 4], [5, [6, 7]]];
const flattenedArray = multiDimensionalArray.reduce((accumulator, currentValue) => {
    if (Array.isArray(currentValue)) {
        return accumulator.concat(currentValue.flat());
    }
    return accumulator.concat(currentValue);
}, []);
console.log("multiDimensionalArray", multiDimensionalArray);
console.log("3.c)", flattenedArray); 