#!/usr/bin/evn node
"use strict";
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
let score = 0;
function startLoop() {
    return __awaiter(this, void 0, void 0, function* () {
        let again;
        do {
            yield guessNumber();
            again = yield inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "restart",
                    choices: ["Yes", "No"],
                    message: "Do you want to continue:"
                }
            ]);
        } while (again.restart === "Yes");
    });
}
startLoop();
function guessNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        let guessNum = Math.floor(Math.random() * 10);
        let tip;
        if (guessNum % 2 === 0) {
            tip = "Tip: Number is even.";
        }
        else {
            tip = "Tip: Number is odd.";
        }
        const answer = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: "usergusss",
                message: `Guess a number between 1 to 10 (${tip})`
            }
        ]);
        console.log(`your Guess ${answer.userguess} and system genrates ${guessNum}`);
        if (answer.userguess === guessNum) {
            score++;
            console.log(`Congratulation your answer is correct. Your score is : ${score}`);
        }
        else {
            console.log(`Wrong guess. your score is ${score}.Better luck nexttime.`);
        }
    });
}
