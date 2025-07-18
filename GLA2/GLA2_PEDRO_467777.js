//Start of GLA2_PEDRO_467777.js
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

/*
Consider the following array:
[ { name: "Alice Johnson", program: "Rocket Science", GPA: "3.75" }, { name: "Brian Smith",
program: "Rocket Science", GPA: "3.89" }, { name: "Chloe Brown", program: "Rocket Science",
GPA: "3.63" }, { name: "David Lee", program: "Rocket Science", GPA: "3.94" }, { name: "Ella
White", program: "Rocket Science", GPA: "3.47" }, { name: "Finn Walker", program: "Rocket
Science", GPA: "3.71" }, { name: "Grace Hall", program: "Rocket Science", GPA: "3.99" }, { name:
"Henry Adams", program: "Rocket Science", GPA: "3.54" }, { name: "Isla Carter", program:
"Rocket Science", GPA: "3.68" }, { name: "Jack Moore", program: "Rocket Science", GPA: "3.85"
} ]
It is a list of 10 students with the following properties: “name”, “program”, and “GPA”.
*/
const students = [
    { name: "Alice Johnson", program: "Rocket Science", GPA: "3.75" },
    { name: "Brian Smith", program: "Rocket Science", GPA: "3.89" },
    { name: "Chloe Brown", program: "Rocket Science", GPA: "3.63" },
    { name: "David Lee", program: "Rocket Science", GPA: "3.94" },
    { name: "Ella White", program: "Rocket Science", GPA: "3.47" },
    { name: "Finn Walker", program: "Rocket Science", GPA: "3.71" },
    { name: "Grace Hall", program: "Rocket Science", GPA: "3.99" },
    { name: "Henry Adams", program: "Rocket Science", GPA: "3.54" },
    { name: "Isla Carter", program: "Rocket Science", GPA: "3.68" },
    { name: "Jack Moore", program: "Rocket Science", GPA: "3.85" }
];

/*
4) Without modifying the original array, sort the elements according to the students’ GPA in
descending order (higher GPA first) and add a new property “status” to all of the students,
with the value “active”. ( /15 marks)
After the modifications, display both your original students array and the final updated array on
console. ( /3 marks)
Modified student example:
{
name: “Will”,
program: “Rocket Science”,
GPA: “4.0”,
status: “active”
}
*/
const sortedStudents = students
    .map(student => ({ ...student, status: "active" }))
    .sort((a, b) => parseFloat(b.GPA) - parseFloat(a.GPA));
console.log("4)", sortedStudents);
console.log("Original students array:", students);
// End of GLA2_PEDRO_467777.js