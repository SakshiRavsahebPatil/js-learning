
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

console.log(`---------------------------descending order of emp ID's---------------------------`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_id>=p2.emp_id ? -1 : 1
});

arrayEmployees.forEach(employee => {
    console.log(`ID : ${employee.emp_id} , Name : ${employee.emp_name}, Dept : ${employee.emp_dept}`);
});

console.log(`---------------------------ascending order of emp ID's---------------------------`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_dept>=p2.emp_dept ? 1 : -1
});

arrayEmployees.forEach(employee => {
    console.log(`ID : ${employee.emp_id} ,Dept : ${employee.emp_dept} , Company : ${employee.emp_company}, `);
});

console.log(`---------------------------descending order of emp ID's---------------------------`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_salary>=p2.emp_salary ? -1 : 1
});

arrayEmployees.forEach(employee => {
    console.log(` Name : ${employee.emp_name} ,Salary : ${employee.emp_salary} , Company : ${employee.emp_company}, `);
});