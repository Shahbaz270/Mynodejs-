
// #!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = (ms: number | undefined) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Let\'s start command line calculator');
    await sleep(2000);
    rainbowTitle.replace('with NODE.js, INQUIRER, and CHALK');
    await sleep(2000);
    rainbowTitle.replace('Let\'s enjoy calculation!!!');
    await sleep(2000);
    rainbowTitle.stop();

    const pulseTitle = chalkAnimation.pulse('Developed by SHAHBAZ AKHTER for typeScript faculty test');
    await sleep(2000);
    pulseTitle.stop();

    startloop();
}

async function askQuestion() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.yellowBright("Which operation do you want to perform?\n"),
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division"],
        },
        {
            type: "number",
            name: "num1",
            message: chalk.greenBright("Enter first number:"),
        },
        {
            type: "number",
            name: "num2",
            message: chalk.greenBright("Enter second number:"),
        },
    ]);

    switch (answer.operator) {
        case "+ Addition":
            console.log(chalk.blue(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
            break;
        case "- Subtraction":
            console.log(chalk.blue(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
            break;
        case "* Multiplication":
            console.log(chalk.blue(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
            break;
        case "/ Division":
            console.log(chalk.blue(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
            break;
        default:
            console.log("Invalid operator");
            break;
    }
}

async function startloop() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["Yes", "No"],
                message: chalk.yellowBright("Do you want to continue?"),
            },
        ]);
    } while (again.restart === 'Yes');
}

welcome();



