const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumber);

console.log(`------------------------------Step 1---------------------------------`);
var totalNumberOfArray =arrayNumber.length;
console.log(`Total elements available OR length : ${totalNumberOfArray}`);

console.log(`------------------------------Step 2---------------------------------`);
console.log(`First element in arrayNumber : ${arrayNumber[0]}`);
console.log(`Last element in arrayNumber : ${arrayNumber[totalNumberOfArray-1]}`);

console.log(`------------------------------Step 3---------------------------------`);
console.log(`Third Last element in arrayNumber : ${arrayNumber[totalNumberOfArray-3]}`);

console.log(`------------------------------Step 4---------------------------------`);
console.log(`All Even number`);
for (const iterator of arrayNumber) {
    if(iterator%2==0){
        console.log(iterator);
    }
}

console.log(`------------------------------Step 5---------------------------------`);
console.log(`All Odd number`);
for (const iterator of arrayNumber) {
    if(iterator%2!=0){
        console.log(iterator);
    }
}

console.log(`------------------------------Step 6---------------------------------`);
// console.log(`Even Position elements from arrayNumber`);
// for (const index in arrayNumber) {
//     if (index%2==0) {
//         console.log(arrayNumber[index]);
// }
// } 
console.log(`Sum of all Even Position elements from arrayNumber`);
let sumEven = 0;
for (const index in arrayNumber) {
    if (index%2==0) {
        sumEven =sumEven + arrayNumber[index]
    } 
}
console.log(sumEven);

console.log(`------------------------------Step 7---------------------------------`);
console.log(`Sum of all Odd Position elements from arrayNumber`);
let sumOdd = 0;
for (const index in arrayNumber) {
    if (index%2!=0) {
        sumOdd =sumOdd + arrayNumber[index]
    } 
}
console.log(sumOdd);

console.log(`------------------------------Step 8---------------------------------`);
let sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];  
    sum = sum + element;
}
console.log(`Sum of an array is: ${sum}`);

console.log(`------------------------------Step 9---------------------------------`);
console.log(`The number  which is multiple of 5`);
for (const iterator of arrayNumber) {
    if(iterator%5==0){
        console.log(iterator);
    }
}

console.log(`------------------------------Step 10---------------------------------`);
console.log(`is number 115 available in arrayNumber`);
console.log(arrayNumber.includes(115));

console.log(`------------------------------Step 11---------------------------------`);
console.log(`is number 23 available in arrayNumber`);
console.log(arrayNumber.includes(23));

console.log(`------------------------------Step 12---------------------------------`);
console.log(`Insert a number in an given array at index : 3`);
arrayNumber.splice(3,0,55,66);
console.log(arrayNumber);

console.log(`------------------------------Step 13---------------------------------`);
console.log(`Delete 3 element staring from index 4 :`);
arrayNumber.splice(4,3);
console.log(arrayNumber);
