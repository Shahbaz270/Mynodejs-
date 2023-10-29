import inquirer from "inquirer";

class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  students: Student[] = [];

  addStudent(obj: any) {
    this.students.push(obj);
  }
}

const persons = new Person();

console.log(persons);

const projectStart = async (persons: Person) => {
  console.log("Welcome to chief guest");

  const ans = await inquirer.prompt({
    type: "list",
    message: "Whom would you prefer to talk to ...?",
    choices: ["Self", "Student"],
  });

  if (ans.choices == "Self") {
    console.log("I talk to myself");
    console.log("I am very happy to join the PIAIC program.");
  }
  if (ans.choices == "Student") {
    const ans = await inquirer.prompt({
      type: "input",
      message: "Which student would you like to talk to?",
      name: "student",
    });

    const student = persons.students.find((val) => val.name == ans.student);

    if (!student) {
      const name = new Student(ans.student);
      persons.addStudent(name);

      console.log(`Hello i am ${name.name}, or I am good.`);
      console.log(persons, name);
    }
    if (student) {
      console.log(`Hello i am ${student.name}, or I am good.......`);
      console.log(persons, student);
    }
  }
};

projectStart(persons);
