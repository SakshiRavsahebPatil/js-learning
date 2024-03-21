var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`==== Original Array ===== `);
console.log(arrayNumbers);

console.log(`==== Removing last element ===== `);
arrayNumbers.pop();
console.log(arrayNumbers);

var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`====  Add an element in the last ===== `);
console.log(arrayNumbers);
arrayNumbers.push(100);
console.log(arrayNumbers);

var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`====  Add or insertion an element in the 0th index ===== `);
console.log(arrayNumbers);
arrayNumbers.unshift(44);
console.log(arrayNumbers);

var arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`====  Remove or delete the 0th index element ===== `);
console.log(arrayNumbers);
arrayNumbers.shift();
console.log(arrayNumbers);


console.log(`======= slice() =========`);
var arrayNumbers = [2, 4, 1, 7, 9, 8, 11, 22];
// console.log(`original array ; ${arrayNumbers}`);
const subArray =arrayNumbers.slice(3, 5);
console.log(subArray);
const subArrayNew =arrayNumbers.slice(2);
console.log(subArrayNew);