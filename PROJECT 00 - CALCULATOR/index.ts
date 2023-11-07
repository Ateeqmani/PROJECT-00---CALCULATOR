#! /usr/bin/env node
import inquirer from "inquirer";
import { add } from "./addition.js";
import { sub } from "./subtraction.js";
import { mul } from "./multiplication.js";
import { div } from "./division.js";

async function runCalculator() {
    console.log("Welcome, How can I help you :) ?");
    
    const openCalculator = await inquirer.prompt([
        {
            type: "input",
            name: "open",
        },
    ]);
    
    if (openCalculator.open.toLowerCase() !== "cal") {
        console.log("Invalid input. Exiting calculator.");
        return;
    }

    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter your first number:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your second number:",
        },
        {
            type: "list",
            name: "operators",
            choices: ["/", "*", "+", "-"],
            message: "Which operation do you want to perform?",
        },
    ]);

    if (answer.operators === "/") {
        let result1 = div(answer.num1, answer.num2);
        console.log("Result:", result1);
    } else if (answer.operators === "*") {
        let result2 = mul(answer.num1, answer.num2);
        console.log("Result:", result2);
    } else if (answer.operators === "+") {
        let result3 = add(answer.num1, answer.num2);
        console.log("Result:", result3);
    } else if (answer.operators === "-") {
        let result4 = sub(answer.num1, answer.num2);
        console.log("Here Is Your Result:", result4);
    }
}

runCalculator();
