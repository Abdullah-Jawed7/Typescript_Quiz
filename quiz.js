#!  /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright(`\n\t\t Welcome to Typescript Quiz `));
console.log("");
let totalScore = 0;
let score = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
let play = true;
do {
    let permission = await inquirer.prompt([
        {
            name: "confirmation",
            type: "confirm",
            message: "Do you want to play this game? press y or n",
            default: true,
        },
    ]);
    if (permission.confirmation === true) {
        console.log("NOTE : Every topic contain 10 questions");
        console.log("Every question contain 4 options ");
        console.log("Every correct option contain 5 marks");
        console.log("");
        let topics = await inquirer.prompt([
            {
                name: "topic",
                type: "list",
                message: chalk.bgGray `Select the topic you want to play`,
                choices: [
                    "Data types",
                    "Function",
                    "Array and its Method",
                    "Operators",
                    //"Control Statement",
                    "All of them",
                    // "Loop", "Array Methods", "Object Methods", "String Methods",
                    //"Regular Expression", "Date and Time", "Error Handling",
                ],
            },
        ]);
        console.log("");
        console.log("");
        //                 Data types
        if (topics.topic === "Data types") {
            console.log(chalk.bgBlue(`\n\t\t Data types`));
            let datatypes = await inquirer.prompt([
                {
                    name: "Q1",
                    type: "list",
                    message: "Q1. What is the data type of the following variable declaration in TypeScript?    let person: { name: string, age: number } = { name: 'Bob', age: 25 };",
                    choices: ["Undefined", "Number", "Array", "Object"],
                },
                {
                    name: "Q2",
                    type: "list",
                    message: "Q2. What the answer of the following typescript code ? let num:string = 100   console.log(num)",
                    choices: ["Undefined", "NaN", "Error", "100"],
                },
                {
                    name: "Q3",
                    type: "list",
                    message: "Q3. What is the output of the following code ? console.log(typeof(100))",
                    choices: ["Number", "String", "Undefined", "NaN"],
                },
                {
                    name: "Q4",
                    type: "list",
                    message: "Q4. Which of the following  is a primitive data type in typescript ?",
                    choices: ["Function", "String", "Object", "Array"],
                },
                {
                    name: "Q5",
                    type: "list",
                    message: "Q5. Which data type represent a collection of ordered values ?",
                    choices: ["Array", "Boolean", "String", "Number"],
                },
                {
                    name: "Q6",
                    type: "list",
                    message: "Q6. Which data type is used to represent logical True and False values ?",
                    choices: ["Boolean", "Number", "String", "Array"],
                },
                {
                    name: "Q7",
                    type: "list",
                    message: "Q7. Which data type is used to represent a collection of Key pair values ?",
                    choices: ["Array", "Boolean", "String", "Object"],
                },
                {
                    name: "Q8",
                    type: "list",
                    message: "Q8. How can you access the type information of a variable at runtime in TypeScript? ",
                    choices: [
                        "typeof variable",
                        " variable.type ",
                        "TypeScript doesn't provide runtime type information",
                        "typeOf(variable) ",
                    ],
                },
                {
                    name: "Q9",
                    type: "list",
                    message: "Q9. What is the data type of the following variable declaration in TypeScript?   let colors: string[] = ['red', 'blue', 'green'] ",
                    choices: ["Array", "Boolean", "Object", "Number"],
                },
                {
                    name: "Q10",
                    type: "list",
                    message: " Q10. Which data type is used to represent whole numbers in TypeScript?",
                    choices: [" string ", "Number", "boolean ", "array "],
                },
            ]);
            if (datatypes.Q1 === "Object") {
                score++;
            }
            else {
                console.log("The correct answer of Q1 is Object");
            }
            if (datatypes.Q2 === "Error") {
                score++;
            }
            else {
                console.log("The correct answer of Q2 is Error ");
            }
            if (datatypes.Q3 === "Number") {
                score++;
            }
            else {
                console.log("The correct answer of Q3 is Number");
            }
            if (datatypes.Q4 === "String") {
                score++;
            }
            else {
                console.log("The correct answer of Q4 is String");
            }
            if (datatypes.Q5 === "Array") {
                score++;
            }
            else {
                console.log("The correct answer of Q5 is Array");
            }
            if (datatypes.Q6 === "Boolean") {
                score++;
            }
            else {
                console.log("The correct answer of Q6 is Boolean");
            }
            if (datatypes.Q7 === "Object") {
                score++;
            }
            else {
                console.log("The correct answer of Q7 is Object");
            }
            if (datatypes.Q8 === "typeof variable") {
                score++;
            }
            else {
                console.log("The correct answer of Q8 is typeof variable");
            }
            if (datatypes.Q9 === "Array") {
                score++;
            }
            else {
                console.log("The correct answer of Q9 is Array");
            }
            if (datatypes.Q10 === "Number") {
                score++;
            }
            else {
                console.log("The correct answer of Q10 is Number");
            }
            console.log("Your score is " + score);
        }
        else if (topics.topic === "Function") {
            console.log(chalk.bgBlue(`\n\t\t Function `));
            let functions = await inquirer.prompt([
                {
                    type: "list",
                    name: "Q1",
                    choices: ["Function", "Function()", "function", "function()"],
                    message: "Q1. What is the correct syntax of a function?",
                },
                {
                    type: "list",
                    name: "Q2",
                    message: "Q2. What is the output of the following code snippet?   function greet(name: string): string {  return `Hello, ${name}!`; }     console.log(greet('Alice'));",
                    choices: ["Hello, Alice!", "Hello, ${name}!", "undefined", "Error"],
                },
                {
                    name: "Q3",
                    type: "list",
                    message: "Q3. WhatWhat is the correct way to call a upper  function with default parameters in TypeScript?",
                    choices: [
                        "greet()",
                        "greet('Alice', 'Bob')",
                        "greet('Alice')",
                        "greet('Alice', undefined)",
                    ],
                },
                {
                    name: "Q4",
                    type: "list",
                    message: "Q4.What is the output of the following code snippet? function multiply(a: number, b: number = 2): number {   return a * b; } console.log(multiply(3)); ",
                    choices: ["6", "3", "Error", "undefined"],
                },
                {
                    name: "Q5",
                    type: "list",
                    message: "Q5. Which of the following is true about higher-order functions in TypeScript?",
                    choices: [
                        "They cannot take other functions as arguments",
                        "They must return a value",
                        "They can return another function",
                        "They can only be arrow functions",
                    ],
                },
                {
                    name: "Q6",
                    type: "list",
                    message: "Q6. What keyword is used to define a function in TypeScript?",
                    choices: ["func", "def", "function", "fn"],
                },
                {
                    name: "Q7",
                    type: "list",
                    message: "Q7. What is the output of the following code snippet?   const add = (a: number, b: number): number => a + b;    console.log(add(2, 3, 4));",
                    choices: ["5", "Error", "undefined", "9"],
                },
                {
                    name: "Q8",
                    type: "list",
                    message: "Q8. How can you define an arrow functions in typescript ?",
                    choices: [
                        "using the => syntax after the parameter",
                        "with the function key word and the braces ",
                        "Arrow functio is not supported in typescript",
                        "same syntax as regular function functio, but with Arrow word",
                    ],
                },
                {
                    name: "Q9",
                    type: "list",
                    message: "Q9. What is the purpose of a function in TypeScript?",
                    choices: [
                        " Memory Management",
                        "Dynamic Typing",
                        "Code Reusability",
                        "File I/O",
                    ],
                },
                {
                    name: "Q10",
                    type: "list",
                    message: "Q10.Which TypeScript feature allows a function to accept a variable number of arguments?",
                    choices: [
                        "Functiion overloading",
                        "Rest parameter",
                        "Default parameter",
                        "optional parameters",
                    ],
                },
            ]);
            if (functions.Q1 === "function") {
                score2++;
            }
            else {
                console.log("The correct answer of Q1 is function ");
            }
            if (functions.Q2 === "Hello, Alice!") {
                score2++;
            }
            else {
                console.log("The correct answer of Q2 is Hello, Alice!");
            }
            if (functions.Q3 === "greet('Alice')") {
                score2++;
            }
            else {
                console.log("The correct answer of Q3 is Greet('Alice') ");
            }
            if (functions.Q4 === "6") {
                score2++;
            }
            else {
                console.log("The correct answer of Q4 is 6 ");
            }
            if (functions.Q5 === "They must return a value") {
                score2++;
            }
            else {
                console.log("The correct answer of Q5 is They must return a value");
            }
            if (functions.Q6 === "function") {
                score2++;
            }
            else {
                console.log("The correct answer of Q6 is function");
            }
            if (functions.Q7 === "5") {
                score2++;
            }
            else {
                console.log("The correct answer of Q7 is  5");
            }
            if (functions.Q8 === "using the => syntax after the parameter") {
                score2++;
            }
            else {
                console.log("The correct answer of Q8 is using the => syntax after the parameter");
            }
            if (functions.Q9 === "Code Reusability") {
                score2++;
            }
            else {
                console.log("The correct answer of Q9 is Code reusability");
            }
            if (functions.Q10 === "Rest parameter") {
                score2++;
            }
            else {
                console.log("The correct answer of Q10 is Rest parameter");
            }
            console.log("Your score is " + score2);
        }
        else if (topics.topic === "Array and its Method") {
            console.log(chalk.bgBlue(`\n\t\t Arrray and its Method`));
            let array = await inquirer.prompt([
                {
                    name: "Q1",
                    type: "list",
                    message: "Q1. What is an array in TypeScript?",
                    choices: [
                        "A collection of key-value pairs",
                        " A collection of elements of the same type",
                        "A single variable that can hold multiple values ",
                        " A data structure that can store only numbers        ",
                    ],
                },
                {
                    name: "Q2",
                    type: "list",
                    message: "Q2. How do you declare an array in TypeScript?",
                    choices: [
                        "let myArray = [];",
                        "let myArray = {};",
                        "let myArray = new Array();",
                        "let myArray = (1, 2, 3);",
                    ],
                },
                {
                    name: "Q3",
                    type: "list",
                    message: "Q3. How do you access an element in an array in TypeScript?",
                    choices: [
                        "myArray[0]",
                        "myArray(0)",
                        "myArray.get(0)",
                        "myArray.fetch(0)",
                    ],
                },
                {
                    name: "Q4",
                    type: "list",
                    message: "Q4. How do you concatenate two arrays in TypeScript? ",
                    choices: [
                        "myArray.concat(myArray2)",
                        "myArray1 + myArray2",
                        "myArray1.join(myArray2)",
                        "myArray1.push(myArray2)",
                    ],
                },
                {
                    name: "Q5",
                    type: "list",
                    message: "Q5.  How do you check if an array is empty in TypeScript?",
                    choices: [
                        "if (myArray.length === 0)",
                        "if (myArray === null)",
                        "if (myArray === undefined)",
                        "if (myArray.isEmpty())",
                    ],
                },
                {
                    name: "Q6",
                    type: "list",
                    message: "Q6. How do you check if an array contains a specific value in TypeScript?",
                    choices: [
                        "if (myArray.includes(value))",
                        "if (myArray.contains(value))",
                        "if (myArray.has(value))",
                        "if (myArray.indexOf(value) !== -1)",
                    ],
                },
                {
                    name: "Q7",
                    type: "list",
                    message: "Q7. Select the answer of code : let myArray: number [ ] = [10, 15, 20, 25];   myArray.unshift('70' );  console.log(myArray)",
                    choices: [
                        "[70, 10, 15, 20, 25]",
                        "[10, 15, 20, 25, 70]",
                        "[15, 20, 25]",
                        "Error",
                    ],
                },
                {
                    name: "Q8",
                    type: "list",
                    message: "Q8. What method removes the last element of an array in TypeScript?",
                    choices: [
                        "pop()",
                        "push()",
                        "shift()",
                        "unshift()",
                    ],
                },
                {
                    name: "Q9",
                    type: "list",
                    message: "09. What will be the output of the following TypeScript Code?    let myArray: number  [ ] = [1, 5, 2, 2];   myArray.push(7);  console.log(myArray)",
                    choices: [
                        "[ 1, 5, 2, 2, 7 ]",
                        "[ 7, 1, 5, 2, 2, ]",
                        "[ 1, 5, 2, ]",
                        "Error",
                    ],
                },
                {
                    name: "Q10",
                    type: "list",
                    message: "10. What will be the output of the following TypeScript Code?  let myArray: number  [ ] = [1, 2, 3, 4];    myArray.pop();  console.log(myArray)",
                    choices: [
                        " [2, 3, 4]",
                        "[1, 2, 3]",
                        "4",
                        "Error",
                    ],
                },
            ]);
            if (array.Q1 === " A collection of elements of the same type") {
                score3++;
            }
            else {
                console.log("The correct answer of Q1 is :  A collection of elements of the same type");
            }
            if (array.Q2 === "let myArray = [];") {
                score3++;
            }
            else {
                console.log("The correct answer of Q2 is : let myArray = [];");
            }
            if (array.Q3 === "myArray[0]") {
                score3++;
            }
            else {
                console.log("The correct answer of Q3 is : myArra[0] ");
            }
            if (array.Q4 === "myArray.concat(myArray2)") {
                score3++;
            }
            else {
                console.log("The correct answer of Q4 is : myArray.concat(myArray2)");
            }
            if (array.Q5 === "if (myArray.length === 0)") {
                score3++;
            }
            else {
                console.log("The correct answer of Q5 is : if (myArray.length === 0)");
            }
            if (array.Q6 === "if (myArray.includes(value))") {
                score3++;
            }
            else {
                console.log("The correct answer of Q6 is : if (myArray.includes(value))");
            }
            if (array.Q7 === "[70, 10, 15, 20, 25]") {
                score3++;
            }
            else {
                console.log("The correct answer of Q7 is : [70, 10, 15, 20, 25] ");
            }
            if (array.Q8 === "pop()") {
                score3++;
            }
            else {
                console.log("The correct answer of Q8 is : pop()       ");
            }
            if (array.Q9 === "[ 1, 5, 2, 2, 7 ]") {
                score3++;
            }
            else {
                console.log("The correct answer of Q9 is : [ 1, 5, 2, 2, 7 ]");
            }
            if (array.Q10 === "[1, 2, 3]") {
                score3++;
            }
            else {
                console.log("The correct answer of Q10 is : [1, 2, 3]");
            }
            console.log("Your score is " + score3);
        }
        else if (topics.topic === "Operators") {
            console.log(chalk.bgBlue(`\n\t\t Arrray and its Method`));
            let operators = await inquirer.prompt([
                {
                    type: "list",
                    name: "Q1",
                    message: "Q1. What is the purpose of the + operator in TypeScript?",
                    choices: [
                        "To add two numbers",
                        "To substract two numbers",
                        "To exponential two numbers",
                        "To divide two strings",
                    ],
                },
                {
                    name: "Q2",
                    type: "list",
                    message: "Q2. What is the difference between == and === operators in TypeScript?          ",
                    choices: [
                        "== checks value, === checks value and type",
                        "not sure",
                        "== checks value and type, === checks value only",
                        "No difference",
                    ],
                },
                {
                    name: "Q3",
                    type: "list",
                    message: "What is the purpose of the ! operator in TypeScript?",
                    choices: [
                        "Negative",
                        "Addition",
                        "Multiplication",
                        "Division",
                    ],
                },
                {
                    name: "Q4",
                    type: "list",
                    message: "Q4. What is the purpose of the ** operator in TypeScript?",
                    choices: [
                        "Exponentiation",
                        "Addition",
                        "Multiplication",
                        "Division",
                    ],
                },
                {
                    name: "Q5",
                    type: "list",
                    message: "Q5. What is the purpose of the % operator in TypeScript?",
                    choices: [
                        "Modulus",
                        "Addition",
                        "Multiplication",
                        "Division",
                    ],
                },
                {
                    name: "Q6",
                    type: "list",
                    message: "Q6.What is the difference between || and | operators in TypeScript?  ",
                    choices: [
                        "|| is the logical OR operator, | is the bitwise OR operator",
                        "|| is bitwise OR, | is logical OR",
                        "No difference",
                        "Not sure",
                    ],
                },
                {
                    name: "Q7",
                    type: "list",
                    message: "Q7. What is the difference between >= and = operators in TypeScript? ",
                    choices: [
                        " No difference            ",
                        "Not sure            ",
                        " >= checks greater than, > checks greater than or equal",
                        " >= checks greater than or equal, > checks greater than", //
                    ],
                },
                {
                    name: "Q8",
                    type: "list",
                    message: "Q8.  What is the purpose of the **= operator in TypeScript?",
                    choices: [
                        "Modulus assignment",
                        "Multiplication assignment",
                        "Exponentiation assignment",
                        "Division assignment",
                    ],
                },
                {
                    name: "Q9",
                    type: "list",
                    message: "Q9. What does the != operator do in TypeScript?",
                    choices: [
                        " Checks less than",
                        " Checks greater than",
                        "Checks equal",
                        "Checks not equal", //
                    ],
                },
                {
                    name: "Q10",
                    type: "list",
                    message: "Q10.Which operator is used for string concatenation in TypeScript?",
                    choices: ["+", "-", "%", "^"],
                },
            ]);
            if (operators.Q1 === "To add two numbers") {
                score4++;
            }
            else {
                console.log("The correct answer of Q1 is : To add two numbers");
            }
            if (operators.Q2 === "== checks value, === checks value and type") {
                score4++;
            }
            else {
                console.log("The correct answer of Q2 is : == checks value, === checks value and type");
            }
            if (operators.Q3 === "Negative") {
                score4++;
            }
            else {
                console.log("The correct answer of Q3 is : Negative");
            }
            if (operators.Q4 === "Exponentiation") {
                score4++;
            }
            else {
                console.log("The correct answer of Q4 is : Exponentiation");
            }
            if (operators.Q5 === "Modulus") {
                score4++;
            }
            else {
                console.log("The correct answer of Q5 is : Modulus");
            }
            if (operators.Q6 ===
                "|| is the logical OR operator, | is the bitwise OR operator") {
                score4++;
            }
            else {
                console.log("The correct answer of Q6 is : || is the logical OR operator, | is the bitwise OR operator");
            }
            if (operators.Q7 ===
                " >= checks greater than or equal, > checks greater than") {
                score4++;
            }
            else {
                console.log("The correct answer of Q7 is :   >= checks greater than or equal, > checks greater than");
            }
            if (operators.Q8 === "Exponentiation assignment") {
                score4++;
            }
            else {
                console.log("The correct answer of Q8 is : Exponentiation assignment ");
            }
            if (operators.Q9 === "Checks not equal") {
                score4++;
            }
            else {
                console.log("The correct answer of Q9 is : Checks not equal");
            }
            if (operators.Q10 === "+") {
                score4++;
            }
            else {
                console.log("The correct answer of Q10 is : +");
            }
            console.log("Your score is " + score4);
        }
        else if (topics.topic === "All of them") {
            console.log(chalk.bgBlue(`\n\t\t All of them `));
            let allofthem = await inquirer.prompt([
                {
                    name: "Q1",
                    type: "list",
                    message: "Q1. What is the data type of the following variable declaration in TypeScript?    let person: { name: string, age: number } = { name: 'Bob', age: 25 };",
                    choices: ["Undefined", "Number", "Array", "Object"],
                },
                {
                    name: "Q2",
                    type: "list",
                    message: "Q2. What the answer of the following typescript code ? let num:string = 100   console.log(num)",
                    choices: ["Undefined", "NaN", "Error", "100"],
                },
                {
                    name: "Q3",
                    type: "list",
                    message: "Q3. WhatWhat is the correct way to call a upper  function with default parameters in TypeScript?",
                    choices: [
                        "greet()",
                        "greet('Alice', 'Bob')",
                        "greet('Alice')",
                        "greet('Alice', undefined)",
                    ],
                },
                {
                    name: "Q4",
                    type: "list",
                    message: "Q4.What is the output of the following code snippet? function multiply(a: number, b: number = 2): number {   return a * b; } console.log(multiply(3)); ",
                    choices: ["6", "3", "Error", "undefined"],
                },
                {
                    name: "Q5",
                    type: "list",
                    message: "Q5. Which of the following is true about higher-order functions in TypeScript?",
                    choices: [
                        "They cannot take other functions as arguments",
                        "They must return a value",
                        "They can return another function",
                        "They can only be arrow functions",
                    ],
                },
                {
                    name: "Q6",
                    type: "list",
                    message: "Q6. How do you check if an array contains a specific value in TypeScript?",
                    choices: [
                        "if (myArray.includes(value))",
                        "if (myArray.contains(value))",
                        "if (myArray.has(value))",
                        "if (myArray.indexOf(value) !== -1)",
                    ],
                },
                {
                    name: "Q7",
                    type: "list",
                    message: "Q7. Select the answer of code : let myArray: number [ ] = [10, 15, 20, 25];   myArray.unshift('70' );  console.log(myArray)",
                    choices: [
                        "[70, 10, 15, 20, 25]",
                        "[10, 15, 20, 25, 70]",
                        "[15, 20, 25]",
                        "Error",
                    ],
                },
                {
                    name: "Q8",
                    type: "list",
                    message: "Q8. What method removes the last element of an array in TypeScript?",
                    choices: [
                        "pop()",
                        "push()",
                        "shift()",
                        "unshift()",
                    ],
                },
                {
                    name: "Q9",
                    type: "list",
                    message: "Q9. What does the != operator do in TypeScript?",
                    choices: [
                        " Checks less than",
                        " Checks greater than",
                        "Checks equal",
                        "Checks not equal", //
                    ],
                },
                {
                    name: "Q10",
                    type: "list",
                    message: "Q10.Which operator is used for string concatenation in TypeScript?",
                    choices: ["+", "-", "%", "^"],
                },
            ]);
            if (allofthem.Q9 === "Checks not equal") {
                score5++;
            }
            else {
                console.log("The correct answer of Q9 is : Checks not equal");
            }
            if (allofthem.Q10 === "+") {
                score5++;
            }
            else {
                console.log("The correct answer of Q10 is : +");
            }
            if (allofthem.Q6 === "if (myArray.includes(value))") {
                score5++;
            }
            else {
                console.log("The correct answer of Q6 is : if (myArray.includes(value))");
            }
            if (allofthem.Q7 === "[70, 10, 15, 20, 25]") {
                score5++;
            }
            else {
                console.log("The correct answer of Q7 is : [70, 10, 15, 20, 25] ");
            }
            if (allofthem.Q8 === "pop()") {
                score5++;
            }
            else {
                console.log("The correct answer of Q8 is : pop()       ");
            }
            if (allofthem.Q3 === "greet('Alice')") {
                score5++;
            }
            else {
                console.log("The correct answer of Q3 is Greet('Alice') ");
            }
            if (allofthem.Q4 === "6") {
                score5++;
            }
            else {
                console.log("The correct answer of Q4 is 6 ");
            }
            if (allofthem.Q5 === "They must return a value") {
                score5++;
            }
            else {
                console.log("The correct answer of Q5 is They must return a value");
            }
            if (allofthem.Q1 === "Object") {
                score5++;
            }
            else {
                console.log("The correct answer of Q1 is Object");
            }
            if (allofthem.Q2 === "Error") {
                score5++;
            }
            else {
                console.log("The correct answer of Q2 is Error ");
            }
            console.log("Your score is " + score5);
        }
        else {
            console.log("You have selected an invalid option");
        }
        totalScore = score + score2 + score3 + score4 + score5;
        console.log("Your  your total score is " + totalScore);
    }
    else {
        play = false;
    }
} while (play);
