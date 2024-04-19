#! /usr/bin/env node
// importing inquirer & chalk packajes
import inquirer from "inquirer";
import chalk from "chalk";
// display a colorful welcome message
console.log(chalk.bold.cyanBright("\n \t\tCode With Huzaifah - Word Counter"));
console.log("=".repeat(60));
//prompt the usr to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
// triming the sentence and spiting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold.magentaBright("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(60));
