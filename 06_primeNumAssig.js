console.log(`-----------------Step 01---------------------`);
const array =[3,9,7,6,19,29,53];
console.log(`Given array`,array);
function spaceCount(num){

    for (let index = 2; index < num; index++) {
        if (num%index==0) {
         return false;
        } 
    }
    return true;
};

function CountPrimeNumber(array) {
    let count = 0;
    let primeNumberArray=[];
    array.forEach(element =>{
        if (spaceCount(element)){
            count++
            primeNumberArray.push(element);
        }
    });
    // console.log(`Prime Number in given array is : ${primeNumberArray}`);
    console.log(`Count of Prime Number in given array : ${count}`);
}
CountPrimeNumber(array);

console.log(`-----------------Step 02---------------------`);
function spaceCount1(string) {
    let count = 0;
    for (const iterator of string){
        if(iterator==" "){
            count++;
        }    
    }
    return count;
}
console.log(`Spaces in "Revision is the mother of success" : ${spaceCount1("Revision is the mother of success")}`);
console.log(`Spaces in "Java Script is the language of internet world" : ${spaceCount1("Java Script is the language of internet world")}`);

