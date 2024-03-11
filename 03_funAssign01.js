console.log("=============== Step 1 ===============");
function show() {
   console.log("Codemind Technology , Pune");
   console.log("web Developer");  
}
show()
console.log("----------------------------------------------------------------------------------------------");

console.log("=============== Step 2 ===============");
function personalDetails(firstName, lastName, collegeName) {
    console.log("My First Name is :", firstName);
    console.log("My Last Name is :", lastName);
    console.log("My College Name is :", collegeName);
    // var result1 = firstName ;
    // var result2 = lastName;
    // var result3 = collegeName;
}
personalDetails("SAkshi" , "Patil", "Fabtech Technical Campus , Sangola")
console.log("----------------------------------------------------------------------------------------------");


console.log("=============== Step 3 ===============");
console.log("..........befor swap.........");
function swapValues(arg1 , arg2){
    console.log("Arg1:", arg1, "Arg2:" ,arg2);
}
swapValues("Virat", "Anushka");
console.log("..........after swap.........");
function swapValues(arg1 , arg2){
    console.log("Arg1:", arg1, "Arg2:" ,arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("Arg1:", arg1, "Arg2:" ,arg2);
}
swapValues("Virat", "Anushka");

console.log("___________________________________________");
console.log("..........befor swap.........");
function swapValues(arg1 , arg2){
    console.log("Arg1:", arg1, "Arg2:" ,arg2);
}
swapValues(100 , 200);

console.log("..........after swap..........");
function swapValues(arg1 , arg2){
    console.log("Arg1:", arg1, "Arg2:" ,arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("Arg1:", arg1, "Arg2:" ,arg2);
}
swapValues(100 , 200);
console.log("----------------------------------------------------------------------------------------------");


console.log("=============== Step 4 ===============");
function addThreeValues(n1, n2, n3) {
    console.log("Arguments: ", n1, n2, n3);
    var result = n1+n2+n3;
    console.log("Addition is: ", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");