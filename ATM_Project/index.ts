//  Atm


import inquirer from "inquirer";

interface AnsType {
    userId: string;
    userPin: number;
    accountType: string;
    transactionType?: string;
    amount?: number;
}

async function atm() {
    const answers: AnsType = await inquirer.prompt([
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
            when: (answers: AnsType) => answers.accountType !== undefined
        },
        {
            type: "list",
            name: "amount",
            choices: [1000, 2000, 5000, 10000, 20000],
            message: "Select your transaction amount ",
            when: (answers: AnsType) => answers.transactionType === "Fast Cash"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter the withdrawal amount ",
            when: (answers: AnsType) => answers.transactionType === "Withdraw"
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
            } else {
                console.log("Insufficient balance");
            }
        } else if (answers.transactionType === "Fast Cash" && answers.amount) {
            console.log("Fast Cash Dispensed: ", answers.amount);
            const remaining = balance - answers.amount;
            console.log("Your remaining balance is", remaining);
        } else {
            console.log("Invalid transaction type or amount.");
        }
    }
}

atm();
