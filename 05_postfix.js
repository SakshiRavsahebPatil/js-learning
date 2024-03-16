console.log("------------------------------- step 1 -------------------------------");
var a = 5;
var b = a++;
console.log(`a value : ${a}`);
console.log(`b value : ${b}`);

console.log("------------------------------- step 2 -------------------------------");
var n1=5;
var result = n1++ + ++n1 + n1++ ;
console.log(`n1 value : ${n1}`);
console.log(`result value : ${result}`);

console.log("------------------------------- step 3 -------------------------------");
var a = 2;
var b = ++a + ++a + a++ - --a;
console.log(`a value : ${a}`);
console.log(`b value : ${b}`);

console.log("------------------------------- step 4 -------------------------------");
var a=4;
var b = a-- + ++a + ++a + a++ ;
console.log(`a value : ${a}`);
console.log(`b value : ${b}`);

console.log("------------------------------- step 5 -------------------------------");
