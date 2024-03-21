const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`------------------------------Original Array---------------------------------`);
console.log(fruits_seasonal);

console.log(`------------------------------Step 1---------------------------------`);
var totalNumberOfArray =fruits_seasonal.length;
// console.log(totalNumberOfArray);
console.log(`=====Frist element in array=====`);
console.log(fruits_seasonal[0]);
console.log(`=====Last element in array=====`);
console.log(fruits_seasonal[totalNumberOfArray-1]);

console.log(`------------------------------Step 2---------------------------------`);
console.log(fruits_seasonal);
console.log(`=====Add Element(Papaya before the element 'Banana')=====`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`------------------------------Step 3---------------------------------`);
console.log(fruits_seasonal);
// console.log(`Find element "Mango" index number : ${ fruits_seasonal.indexOf("Mango")}`);
console.log(`=====Remove 'Mango'=====`);
fruits_seasonal.splice(4,1)
console.log(fruits_seasonal);

console.log(`------------------------------Step 4---------------------------------`);
console.log(fruits_seasonal);
console.log(`=====Add element 'Pineapple' at the last position=====`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`------------------------------Step 5---------------------------------`);
console.log(fruits_seasonal);
console.log(`=====Insert an element - 'Dradon Fruit' before 'Water Melon'=====`);
// console.log(`Find element "Water Melon" index number : ${ fruits_seasonal.indexOf("Water Melon")}`);
fruits_seasonal.splice(4,0,"Dradon Fruit")
console.log(fruits_seasonal);

console.log(`------------------------------Step 6---------------------------------`);
console.log(fruits_seasonal);
console.log(`=====Replace an element 'Orange' with 'Kiwi'=====`);
// console.log(`Find element "Orange" index number : ${ fruits_seasonal.indexOf("Orange")}`);
fruits_seasonal.splice(2,1,"Kiwi")
console.log(fruits_seasonal);

console.log(`------------------------------Step 7---------------------------------`);
console.log(fruits_seasonal);
console.log(`=====elements starting from index 1 to 4=====`);
var result = fruits_seasonal.slice(1,5)
console.log(result);

console.log(`------------------------------Step 8---------------------------------`);
console.log(fruits_seasonal);
var totalNumberOfArray =fruits_seasonal.length;
// console.log(totalNumberOfArray);
const lastThreeElement = fruits_seasonal.slice(totalNumberOfArray-3)
console.log(`=====Last Three Element=====`);
console.log(lastThreeElement);