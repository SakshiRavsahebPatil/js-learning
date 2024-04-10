const arrayNumber = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given array : ${arrayNumber}`);

console.log(`STEP 01`);
console.log(`-----------------------Add 10 into each element-------------------------`);
const arrayNew = arrayNumber.map( (currentValue)=>{
    return currentValue+10;
} );
console.log(arrayNew);

console.log(`STEP 02`);
console.log(`-----------------------cube the each array element-------------------------`);
const arrayCube = arrayNumber.map( (currentValue)=>{
    return currentValue * currentValue * currentValue;
} );
console.log(arrayCube);

console.log(`STEP 03`);
console.log(`-----------------------Add the index value into its corresponding each Array element-------------------------`);
const arrayIndex = arrayNumber.map( (currentValue , index)=>{
    return currentValue + index;
} );
console.log(arrayIndex);