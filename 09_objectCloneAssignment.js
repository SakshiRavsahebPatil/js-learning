const bankSbi ={
    name: "Bank Of Baroda",
    location: "Mumbai",
    manager: "Ramarjuna",
    establishment: 1919,
}
console.log(`---------------------- step 1 ----------------------`);
console.log(`=====object 1=====`);
console.log(bankSbi);

const bankLocation ={
    street: "katraj",
    city: "Pune",
    pin: 976311,
}
console.log(`---------------------- step 2 ----------------------`);
console.log(`=====object 2=====`);

console.log(bankLocation);

console.log(`---------------------- step 3 ----------------------`);
console.log(`===== Cloning an Object using Object.assign() ======`);
// console.log(`=====object 1=====`);
const cloneObject1 = Object.assign({}, bankSbi);
console.log("cloned object 1 :" ,cloneObject1);
// console.log(cloneObject1);
const cloneObject2 = Object.assign({}, bankLocation);
console.log("cloned object 2 :", cloneObject2);

console.log(`---------------------- step 4 ----------------------`);
console.log(`===== create new object ======`);
const rateOfInterest ={
    homeLoanInterest: '8.50% to 14.75% PA' ,
    personalLoanInterest:'9.99% to 44% PA' ,
    dueInterest:'4.50% to 8.75% PA' 
}
console.log(rateOfInterest);

console.log(`---------------------- step 5 ----------------------`);
console.log(`======== Merging an object steps 1,2,4 ==========`);
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest );
console.table(sbiDetails)

console.log(`---------------------- step 6 ----------------------`);
console.log(`======== traverse object- step 5 ==========`);
for(const key in sbiDetails){
  console.log(`${key}: ${sbiDetails[key]}`);
}
