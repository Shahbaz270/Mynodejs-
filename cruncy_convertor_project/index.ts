import inquirer from "inquirer";

let convertion = {
    "PKR":{
        "USD": 0.0034148,
        "GBP": 0.00278974,
        "EUR": 0.00320536,
        "PKR": 1
    },
    "GBP":{
        "USD": 1.22402,
        "PKR": 358.447,
        "EUR": 1.14911,
        "GBP": 1
    },
    "EUR":{
        "USD": 1.06519,
        "PKR": 311.933,
        "GBP": 0.870236,
        "EUR": 1
    },  
    "USD":{
        "EUR": 0.9388,
        "PKR": 292.843,
        "GBP": 0.816977,
        "USD": 1
    }, 

}

const answer :{
    from: "PKR"| "USD"|"GBP"|"EUR",
    to: "PKR"| "USD"|"GBP"|"EUR",
    amount: number
 }= await inquirer.prompt([
    {
        type : "list",
        name : "from",
        choices: ["PKR", "USD", "GBP", "EUR"],
        message: "Select your currency:"
    },
    {
        type : "list",
        name : "to",
        choices: ["PKR", "USD", "GBP", "EUR"],
        message: "Select your convertion currency:"
    },
    {
        type : "number",
        name : "amount",
        message: "Select your convertion currency:"
    }
]);

const {from, to, amount} = answer;

if(from && to && amount) {
    let result= convertion[from][to] * amount;
    console.log(`your convertion from ${from} to ${to} is ${result}`)
}else {
    console.log("Invalid inputs")
}
   
