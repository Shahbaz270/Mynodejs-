// School Management System

class School {
    name : string;

    students : Student[] =[];
    teachers : Teacher[] =[];

    addStudent(stdObject){
        this.students.push(stdObject)
    }

    addTeacher(techObj:Teacher){
         this.teachers.push(techObj)
    }

    constructor(name:string){
        this. name=name;

    }
}

class Student{
    name : string;
    age : number;
    schoolName : string;

    constructor(name : string, age: number, schoolName : string){
        this .name=name;
        this.age=age;
        this.schoolName;
    }
}

class Teacher extends Student {}
// School names

let school1 = new School("St.Patrick")
let school2 = new School("Habib")
// add student

let Std1 = new Student("Ayan",13,school1.name)
let Std2 = new Student("Ali",15,school2.name)
let Std3 = new Student("Zarina",17,school1.name)

let t1 = new Teacher("Raz",32,school1.name)
let t2 = new Teacher("Usman",37,school2.name)
let t3 = new Teacher("Zaheer",45,school1.name)

// add student
school1.addStudent(Std1)
school2.addStudent(Std2)
school1.addStudent(Std3)

// add teacher

school1.addTeacher(t1)
school2.addTeacher(t2)
school1.addTeacher(t3)





console.log(school1)
console.log(school2)