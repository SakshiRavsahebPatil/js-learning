// WA FE with one argument for values .. "JavaScript", "I am hero"
// Inside the FE check whether given word is even or odd length

var result = function(word){
    var result = word.length%2==0 ? "EVEN ": "ODD";
    console.log(`Given word ${word} is with ${result} length `);
   }
   result("JavaScript");
   result("I am hero");


console.log("=======================");
// FE to check whether number is multiple of 3 or not
var multiple = function(num){
    var result = num%3==0 ? "Yes" : "No";
    console.log(`Given number ${num} is multiple of 3 ==> ${result}`);
}
multiple(9);
multiple(11);


console.log("=======================");
var a = 0;
var b = 0;
var result = a/b;
console.log(`a divide by b is : ${result}`);

console.log(`Type of ==> ${typeof result}`);

var n1 = "10";
console.log(`value of n1 is ${n1} and it's type is: ${typeof n1}`);

var n2 = +n1;
console.log(`value of n2 is ${n2} and it's type is: ${typeof n2}`);


console.log("=======================");
var num1= "100";
var num2 = 100;
console.log(`Equality check ${num1 == num2}`);
console.log(`Strict Equality check ${num1 === num2}`);

console.log(`Addition is: ${num1 + num2}`);

console.log(`Operation: ${true + 1}`);


