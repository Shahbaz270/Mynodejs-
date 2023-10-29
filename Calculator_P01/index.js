"use strict";
// #!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
function welcome() {
    return __awaiter(this, void 0, void 0, function* () {
        const rainbowTitle = chalk_animation_1.default.rainbow('Let\'s start command line calculator');
        yield sleep(2000);
        rainbowTitle.replace('with NODE.js, INQUIRER, and CHALK');
        yield sleep(2000);
        rainbowTitle.replace('Let\'s enjoy calculation!!!');
        yield sleep(2000);
        rainbowTitle.stop();
        const pulseTitle = chalk_animation_1.default.pulse('Developed by SHAHBAZ AKHTER for typeScript faculty test');
        yield sleep(2000);
        pulseTitle.stop();
        startloop();
    });
}
function askQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "operator",
                message: chalk_1.default.yellowBright("Which operation do you want to perform?\n"),
                choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division"],
            },
            {
                type: "number",
                name: "num1",
                message: chalk_1.default.greenBright("Enter first number:"),
            },
            {
                type: "number",
                name: "num2",
                message: chalk_1.default.greenBright("Enter second number:"),
            },
        ]);
        switch (answer.operator) {
            case "+ Addition":
                console.log(chalk_1.default.blue(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
                break;
            case "- Subtraction":
                console.log(chalk_1.default.blue(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
                break;
            case "* Multiplication":
                console.log(chalk_1.default.blue(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
                break;
            case "/ Division":
                console.log(chalk_1.default.blue(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
                break;
            default:
                console.log("Invalid operator");
                break;
        }
    });
}
function startloop() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield askQuestion();
            var again = yield inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "restart",
                    choices: ["Yes", "No"],
                    message: chalk_1.default.yellowBright("Do you want to continue?"),
                },
            ]);
        } while (again.restart === 'Yes');
    });
}
welcome();
