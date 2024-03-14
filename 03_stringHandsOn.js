function stringHandsOn() {
    console.log("------------------------------- step 1 -------------------------------");
    var string = "   Hey you are doing good, keep it up   ";
    console.log(`${string}`);
    console.log("------------------------------- step 2 -------------------------------");
    var totalWord = string.length;
    console.log(` ${string} it's length is : ${totalWord} `);
    console.log("------------------------------- step 3 -------------------------------");
    var stringAfterTrim = string.trim();
    var lengthAfterTrim = stringAfterTrim.length;
    console.log(`${stringAfterTrim}  it's length is : ${lengthAfterTrim}`);
    console.log("------------------------------- step 4 -------------------------------");
    console.log(`Total spaces removed is : ${totalWord-lengthAfterTrim}`);
    console.log("------------------------------- step 5 -------------------------------");
    // var str =  "Hey you are doing good, keep it up";
    console.log(`first char after trim : ${stringAfterTrim.charAt(0)}, Last char after trim ${stringAfterTrim.at(-1)}`);
    console.log("------------------------------- step 6 -------------------------------");
    var resultValue = stringAfterTrim.split(" ")
    console.log(resultValue);
    console.log(`Total words after trim are: ${resultValue.length}`);
    console.log("------------------------------- step 7 -------------------------------");
    var result = stringAfterTrim.search("good");
    console.log(`Index of substring "good" is : ${result}`);
    console.log("------------------------------- step 8 -------------------------------");
    var result = stringAfterTrim.slice(22);
    console.log(`substring starting from indrx 22 is : ${result}`);
    console.log("------------------------------- step 9 -------------------------------");
    var result = stringAfterTrim.includes("up");
    console.log(`Is string ends with word  "up" is : ${result}`);
    console.log("------------------------------- step 10 -------------------------------");
    var result = stringAfterTrim.includes("Hey");
    console.log(`Is string ends with word  "Hey" is : ${result}`);

}   
stringHandsOn()

