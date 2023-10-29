import inquirer from "inquirer";

const counter =(paragraph:string)=> paragraph.replace(/\s/g,"").length

async function startWordCount(counter:(text:string)=>number) {
    do{
        let res =await inquirer.prompt({
            type:"input",
            message:" write text here....",
            name: "text"
        })
        console.log(counter(res.text))
    }
    while(true)
        
}
startWordCount(counter)