class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company=emp_company;
    }

    detail(){
        console.log(`Emp_Details => emp_id: ${this.emp_id }, emp_name: ${this.emp_name}, emp_dept: ${this.emp_dept}, emp_salary: ${this.emp_salary}, emp_company: ${this.emp_company}`);
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

console.log(`==========STEP 01==========`);
console.log(`-------------------------------find all the emp from "Wipro"-------------------------------`);
const arrayEmps =arrayEmployees.filter( (employee)=>{
    return employee.emp_company =="Wipro";
} );
arrayEmps.forEach( (employee)=>{
    employee.detail();
} );

console.log(`==========STEP 02==========`);
console.log(`-------------------------------find all the emp from "IT" or "HR" dept-------------------------------`);
const empDept =arrayEmployees.filter( (employee)=>{
    return employee.emp_dept =="IT" || employee.emp_dept=="HR";
} );
empDept.forEach( (employee)=>{
    employee.detail();
} );

console.log(`==========STEP 03==========`);
console.log(`-------------------------------find all the emp whose emp id are >50-------------------------------`);
const empID =arrayEmployees.filter( (employee)=>{
    return employee.emp_id >50;
} );
empID.forEach( (employee)=>{
    employee.detail();
} );

console.log(`==========STEP 04==========`);
console.log(`-------------------------------find all the emp whose names start with "A" or "V" or "M"-------------------------------`);
const empNameStart =arrayEmployees.filter( (employee)=>{
    return employee.emp_name.startsWith('A') ||employee.emp_name.startsWith('V') || employee.emp_name.startsWith('M');
} );
empNameStart.forEach( (employee)=>{
    employee.detail();
} );


console.log(`==========STEP 05==========`);
console.log(`-------------------------------find the avr salary of the emp for all the dept------------------------------`);
const empAvrSalary =arrayEmployees.filter( (employee)=>{
    return employee.emp_salary < 90000 ;
} );

const sumSalary = empAvrSalary.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(`Sum salary of the emp for all the department is: ${sumSalary}`);
console.log(`Average salary of the emp for all the department is: ${sumSalary/empAvrSalary.length}`);


console.log(`==========STEP 06==========`);
console.log(`-------------------------------find the avr salary for "IT" dept------------------------------`);
const empAvrITSalary = arrayEmployees.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const sumITSalary = empAvrITSalary.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(`Sum salary from IT department is: ${sumITSalary}`);
console.log(`Average salary from IT department is: ${sumITSalary/empAvrITSalary.length}`);