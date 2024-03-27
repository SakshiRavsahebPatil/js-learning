let professor ={
    name: "JK",
    city: "Pune",
    experience: 7,
    salary: "1L",
    mobileNumber: 1122334455,
    degrees : {
        engineering : 'CSC',
        PHD :'Adv Computing',
        doctorate :'MBBS',
    },
    certificates : ["Hacker Rank Participation", 'Certificate in IFE course', 'Certificate in Adv Programming'],
}
console.log(`STEP 1`);
console.log(`--------------------Add Minimum 5 Properties--------------------`);
console.log(professor);
// console.table(professor);

console.log(`STEP 2`);
console.log(`--------------------include nested object 'degrees'--------------------`);
console.log(professor.degrees);

console.log(`STEP 3`);
console.log(`--------------------add one array--------------------`);
console.log(professor.certificates);


console.log(`STEP 4`);
console.log(`--------------------add new property like totalExperience--------------------`);
professor.totalExperience = "14years";
console.log(professor);

console.log(`STEP 5`);
console.log(`--------------------Modify any existing property--------------------`);
professor.mobileNumber = 1234567890;
console.log(professor);

console.log(`STEP 6`);
console.log(`--------------------Add one new certificate--------------------`);
professor.certificates.splice(2,0, "Oracle Certified")
console.log(professor.certificates);

console.log(`STEP 7`);
console.log(`-------------------- last element of the array certificates.--------------------`);
const lastelement = professor.certificates[professor.certificates.length-1];
console.log(lastelement);

console.log(`STEP 8`);
console.log(`--------------------  complete object --------------------`);
console.log(professor);

console.log(`STEP 9`);
console.log(`-------------------- Traverse array certificates using for of loop--------------------`);
for(const element of professor.certificates){
   console.log(element);
}