var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);

var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);

console.log("========== indexOf() ==================");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);


console.log("========== concat() ==================");
var firstName = "Sakshi";
var lastName= " Patil";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is:", resultConcat);


console.log("==============session25==================");
console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`============= toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
var greetInLowerCase = greet.toLowerCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);
console.log(`${greet} in upper case is : ${greetInLowerCase}`);


console.log(`============= trim() ==================`);
var greet = "     Good Morning     ";
console.log(` ${greet} it's length is : ${greet.length}`);
// console.log(string.trim());

// var len = greet.length;
// greet.trim(`${len} it's length is : ${len.length}`);

console.log(`============= includes() ==================`);
var string = "My name is Sakshi";
console.log(string.includes("name"));


console.log(`============= slice() ==================`);
var string = "Developers World!";
console.log(string.slice(0, 14));


