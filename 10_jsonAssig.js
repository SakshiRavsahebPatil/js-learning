let person = `{ 
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,

    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012" 
}`
console.log(`JSON person is`, (person));

console.log(`=======================convert JSON to object======================`);
const result = JSON.parse(person);
console.table(result);

console.log(`-----------`);
console.log(`role ==>`,result.role[0]);

console.log(`------------`);
const melon = result.name.split(" ");
console.log(`lastname ==> ${melon[1]}`);

console.log(`------------`);
const joiningYear = result.doj.split("-");
console.log(`joining year ==> ${joiningYear[2]}`);
