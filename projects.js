#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleepAndStart = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function rainbowTitle() {
    let addRainbowTitle = chalkAnimation.rainbow(`Let's PLAY the GAME! \n
    __    
    (/.----------------------------'()'--o
     (_    _GUESS THE NUMBER GAME_    /~" 
      (_)_)                      (_)_)    \n\n`);
    await sleepAndStart();
    addRainbowTitle.stop();
}
await rainbowTitle();
async function playerInput() {
    let random = chalk.yellowBright(Math.round(Math.random() * 10));
    let playerGuessed = await inquirer.prompt([
        {
            type: "number",
            name: "num",
            message: "Guess the number! (Between 1 to 10):"
        }
    ]);
    console.log(`Generated number by game ${random}`);
    let playerGuessedInput = chalk.yellowBright(playerGuessed.num);
    if (playerGuessedInput === random) {
        console.log('You Win The Game!');
    }
    else {
        console.log(`You have guessed a wrong number ${playerGuessedInput}! Try Again!`);
    }
}
async function startAgain() {
    do {
        await playerInput();
        var restart = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Type 'Yes' to continue and 'no' to uncontinue:"
        });
    } while (restart.restart.toLowerCase() === "yes");
}
startAgain();
