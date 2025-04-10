// Declare a variable with a specific type, e.g., `username` (`string`) and `score` (`number`).
var username = "Sachin";
var score = 10;
console.log(username + ' ' + score, '\n');
// Declare a variable that uses a union type and can hold either a number or a string.
var myVariable;
myVariable = 42;
myVariable = "hello";
console.log('Union_myVariable : ' + myVariable, '\n');
// Create an array of numbers and print each number in the array.
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < myArray.length; i++) {
    console.log('Numbers : ' + myArray[i], '\n');
}
//Subtraction with Type Declaration:- Declare two variables `num1` and `num2` with type `number`. 
// Assign values to them and print their difference.
var num1 = 55;
var num2 = 15;
var result = num1 - num2;
console.log('Difference is : ' + result, '\n');
//Average Calculation:- Create a variable `scores` that holds an array of numbers. 
// Calculate and print the average of the numbers in the array.
var scores = [5, 3, 2, 5, 7, 8, 2];
var sum = 0;
var length1 = 0;
for (var i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
    length1++;
}
console.log('Array Sum is: ' + sum, '\n' + 'Array average is : ' + sum / length1, '\n');
//Area of a Circle:- Declare a variable `radius` with type `number`. 
// Use it to calculate the area of a circle (πr²) and print the result. Use `Math.PI` for the value of π.
var radius = 5;
radius = Math.PI * radius * radius;
console.log('Area of circle for radius 5 is : ' + radius);
