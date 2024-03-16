console.log("------------------------------- step 1 -------------------------------");
 function greaterNumber(n1, n2) {
    var result = n1 > n2 ? n1 : n2 ;
    console.log(`The grestest number among ${n1} and ${n2} : ${result}`);
}
greaterNumber(10 , -10) ;
greaterNumber(800 , 899); 


console.log("------------------------------- step 2 -------------------------------");
function isEvenOrOddNum(n1) {
    var result = n1%2==0 ? "True" : "False" ;
    console.log(`Give ${n1} number is EVEN  : ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);


console.log("------------------------------- step 3 -------------------------------");
var result = function(word){
    var result = word.length%2==0 ? "EVEN ": "ODD";
    console.log(`Given word ${word} is with ==${result}== length `);
   }
   result("JavaScript");
   result("developer");
   result("Google");