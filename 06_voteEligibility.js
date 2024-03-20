// Voting age should be greater than equal 18
console.log(`-----------------Assignment 01---------------`);
function vote(age){
    if (age<= 0 || age>130 || age==null) {
        console.log(`Age = ${age} : Invalid data`);
    }else{
     if (age<=18) {
        console.log(`Age = ${age} : Eligible for vote`);
    }else {
        console.log(`Age = ${age} : Not Eligible for vote`);  
    }
}
}
vote(45);
vote(17);
vote(8);
vote(20);
vote(-10);
vote(200);
vote(0);
vote(null);