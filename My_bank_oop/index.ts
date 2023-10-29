import {faker} from "@faker-js/faker";
import inquirer from "inquirer";
import chalk from "chalk";

// Customer Class

class Customer {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    phoneNumber: number;
    accountNumber: number;
    constructor(firstName: string, lastName: string, age: number, gender: string, phoneNumber: number, accountNumber: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.accountNumber = accountNumber;
    }
}

// Interface BankAccount
interface BankAccount {
    accNumber: number;
    balance: number;
}

// Class Bank
class Bank {
    customer: Customer[] = [];
    account: BankAccount[] = [];

    addCustomer(obj: Customer){
     this. customer.push(obj)
    }
    addAcountNumber(obj:BankAccount){
        this.account.push(obj);
    }
    transcation(accObj: BankAccount){
     let NewAccounts = this.account.filter(acc => acc.accNumber !==accObj.accNumber);
     this.account = [...NewAccounts, accObj];
    }
}

let ublBank = new Bank();

// customer create

for(let i : number = 1; i<=4; i++) {
let fname = faker.person.firstName('male')
let lname = faker.person.lastName()
let num = parseInt(faker.phone.number('3#########')) 
const cus = new Customer(fname, lname, 22*i, "male", num, 1000+i)
ublBank.addCustomer(cus);
ublBank.addAcountNumber({accNumber: cus.accountNumber, balance:1500*i})
}

// Bank functionality 

async function bankService(Bank: Bank) {
    let service = await inquirer.prompt({
      type:"list",
      name: "select",
      message: "Please Select the, Service",
      choices: ["View Balance", "Cash Withdraw", "Cash Deposit"]  
    });

    // View Balance
    if (service.select == "View Balance") {
       let res = await inquirer.prompt({
         type : "input",
         name: "num",
         message: "Please Enter your account number:",
       });
       let account = ublBank.account.find((acc)=>acc.accNumber ==res.num)
       if(!account){
        console.log(chalk.red.bold.italic("Invalid account number"));
       }
       if(account){
        let name =  ublBank.customer.find((item)=> item.accountNumber==account?.accNumber);
        console.log(
            `Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)}
            your Account Balance is ${chalk.bold.blueBright(`$${account.balance}`)}`
        )
       }
    }
    // Cash Withdraw 
    if (service.select == "Cash Withdraw") {
        let res = await inquirer.prompt({
            type : "input",
            name: "num",
            message: "Please Enter your account number:",
          });
          let account = ublBank.account.find((acc)=>acc.accNumber ==res.num)
          if(!account){
            console.log(chalk.red.bold.italic("Invalid account number"));
           }
           if(account){
            let ans = await inquirer.prompt({
                type:"number",
                message:"Please Enter your amount.",
                name:"rupee",
            });
            if(ans.rupee > account.balance){
                console.log(chalk.red.bold("Mojuda balance nakafi hai..."))
            }
            let newBalance = account.balance- ans.rupee
            // transcation method call
            Bank.transcation({accNumber:account.accNumber,balance:newBalance});
            console.log(newBalance);
           }
    }
   // cash deposit
   if (service.select == "Cash Deposit") {
    let res = await inquirer.prompt({
        type : "input",
        name: "num",
        message: "Please Enter your account number:",
      });
      let account = ublBank.account.find((acc)=>acc.accNumber ==res.num)
          if(!account){
            console.log(chalk.red.bold.italic("Invalid account number"));
           }
           if(account){
            let ans = await inquirer.prompt({
                type:"number",
                message:"Please Enter your amount.",
                name:"rupee",
            });
            let newBalance = account.balance + ans.rupee;
             // transcation method call
             Bank.transcation({accNumber:account.accNumber,balance:newBalance});
             console.log(newBalance);
    }
} 

}
bankService(ublBank)


