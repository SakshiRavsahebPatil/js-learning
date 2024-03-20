console.log(`------------------------------step 1-----------------------------`);
const word ="I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount =0;
for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
        vowelsCount++;
    }
}
console.log(`Total number of vowels in given string :${vowelsCount}`);


console.log(`------------------------------step 2-----------------------------`);
let sum = 0;
for (let index = 0; index <=5; index++) {
    sum = sum + index * index* index;
}
console.log(`The sum of thr cube of number from 1 to 5 : ${sum}`);


console.log(`------------------------------step 3-----------------------------`);
function oddPositionedChars(arg) {
    for (let index = 0; index < arg.length; index++) {
        const element = arg.charAt(index);
        if (index%2!=0  && element !=" ") {
            console.log(element);
        }
    }
}
console.log("Odd position chars of 1st string");
oddPositionedChars("Hard work always pays back");
console.log("Odd position chars of 2nd string");
oddPositionedChars("Soon I will be UI IT Champ");