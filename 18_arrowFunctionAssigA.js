console.log(`----------------------Step 01--------------------`);
// 1.Arrow function with no argument and no return value
let show = () => {
    console.log(`Good Morning, Today is Monday`);
}
show();

console.log(`----------------------Step 02--------------------`);
//2. Arrow function with 3 argument and no return value
let mul = (n1,n2,n3) => {
    console.log(`Multiplication is : ${n1*n2*n3}`);
}
console.log(`a.  values to be passed => 5,5,2`);
mul(5,5,2);
console.log(`b.  values to be passed => 10,4, assig default value 3rd arg as 1`);
mul(10,4,n3=1);

console.log(`----------------------Step 03--------------------`);
//3. Arrow function with 5 argument and return value
let add = (n1,n2,n3,n4,n5) => {
    let result = n1+n2+n3+n4+n5;
    return result;
}
let addResult = add(100,100,200,349,756);
console.log(`a.  values to be passed => 100,100,200,349,756`);
console.log(`Addition is : ${addResult}`);

let addResult1 = add("I am", "learning", "ES6", "Features", "in depth");
console.log(`c.  values to be passed => "I am", "learning", "ES6", "Features", "in depth"`);
console.log(`Addition is :`, addResult1);