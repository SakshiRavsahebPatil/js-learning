class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company=emp_company;
    }

    detail(){
        console.log(`completeEmp_Details => emp_id: ${this.emp_id }, emp_name: ${this.emp_name}, emp_dept: ${this.emp_dept}, emp_salary: ${this.emp_salary}, emp_company: ${this.emp_company}`);
    }

}
const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR",85000,"Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`STEP 01`);
console.log(`------------------------------find all the emp work in "TCS"------------------------------`);
arrayEmployees.forEach(employee => {
    if (employee.emp_company=="TCS") {
        console.log(`emp_name : ${employee.emp_name} , emp_company : ${employee.emp_company}`);
    }
});

console.log(`STEP 02`);
console.log(`------------------------------find the "Finance" dept emp------------------------------`);
arrayEmployees.forEach(employee => {
    if (employee.emp_dept=="Finance") {
        console.log(`emp_dept : ${employee.emp_dept} , emp_name : ${employee.emp_name}`);
    }
});

console.log(`STEP 03`);
console.log(`------------------------------find the emp name starts with "R"------------------------------`);
arrayEmployees.forEach(employee => {
    if (employee.emp_name.startsWith('R')) {
        employee.detail();;
    }
});

console.log(`STEP 04`);
console.log(`------------------------------find the emp salary >75000------------------------------`);
arrayEmployees.forEach(employee => {
    if (employee.emp_salary > 75000) {
        console.log(`emp_name : ${employee.emp_name}, emp_company : ${employee.emp_company} ,emp_salary : ${employee.emp_salary} ,`);
    }
});

console.log(`STEP 05`);
console.log(`------------------------------find the emp salary >= 50000 & from "IT" dept------------------------------`);
arrayEmployees.forEach(employee => {
    if (employee.emp_salary >=50000 && employee.emp_dept=="IT") {
        employee.detail();
    }
});

console.log(`STEP 06`);
console.log(`------------------------------find the all emp from company "Infy"------------------------------`);
arrayEmployees.forEach(employee => {
    if (employee.emp_company=="Infy") {
        employee.detail();
    }
});

