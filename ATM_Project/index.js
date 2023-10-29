"use strict";
//  Atm
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
function atm() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer_1.default.prompt([
            {
                type: "input",
                name: "userId",
                message: "Kindly Enter your Id:"
            },
            {
                type: "number",
                name: "userPin",
                message: "Kindly Enter your Pin:"
            },
            {
                type: "list",
                name: "accountType",
                choices: ["Current", "Saving"],
                message: "Select your account type "
            },
            {
                type: "list",
                name: "transactionType",
                choices: ["Fast Cash", "Withdraw"],
                message: "Select your transaction ",
                when: (answers) => answers.accountType !== undefined
            },
            {
                type: "list",
                name: "amount",
                choices: [1000, 2000, 5000, 10000, 20000],
                message: "Select your transaction amount ",
                when: (answers) => answers.transactionType === "Fast Cash"
            },
            {
                type: "number",
                name: "amount",
                message: "Enter the withdrawal amount ",
                when: (answers) => answers.transactionType === "Withdraw"
            }
        ]);
        if (answers.userId && answers.userPin) {
            const balance = Math.floor(Math.random() * 1000000);
            console.log("Current Balance: ", balance);
            if (answers.transactionType === "Withdraw" && answers.amount) {
                const enteredAmount = answers.amount;
                if (balance >= enteredAmount) {
                    const remaining = balance - enteredAmount;
                    console.log("Your remaining balance is", remaining);
                }
                else {
                    console.log("Insufficient balance");
                }
            }
            else if (answers.transactionType === "Fast Cash" && answers.amount) {
                console.log("Fast Cash Dispensed: ", answers.amount);
                const remaining = balance - answers.amount;
                console.log("Your remaining balance is", remaining);
            }
            else {
                console.log("Invalid transaction type or amount.");
            }
        }
    });
}
atm();
