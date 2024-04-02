class Student {
    constructor(rollNumber,name, division){
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    detail(){
        console.log(`Student Details => RollNumber: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`);
    }
}
const jenny = new Student(22 , "Jenny" , "A");
jenny.detail();

const bill = new Student(25 , "Bill", "C");
bill.detail();

const elon = new Student(55 , "Elon" , "B");
elon.detail();