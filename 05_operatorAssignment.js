function squareOfWordLength() {
    console.log("------------------------------- step 1 -------------------------------");
    var str = "JavaScript";
    var strLength = str.length;
    var result = strLength ** 2;
    console.log(`Length Square of "JavaScript" is : ${result} `);

    var str = "Google Chrome";
    var strLength = str.length;
    var result = strLength ** 2;
    console.log(`Length Square of "Google Chrome" is : ${result} `);

    var str = "Developer Smart";
    var strLength = str.length;
    var result = strLength ** 2;
    console.log(`Length Square of "Developer Smart" is : ${result} `);

    console.log("------------------------------- step 2 -------------------------------");
    var string = "I am Angular Developer"
    var stringLength = string.length;
    console.log(`string length is : ${stringLength}`);

    var totalWords = string.split(" ");
    // console.log(totalWords);
    console.log(`Total number of words is: ${totalWords.length}`);  

    var result = stringLength / totalWords.length;    //Division /  operator
    console.log(`string length divide by total number of words is : ${result}`);

    var result = stringLength * totalWords.length;    //multipal *  operator
    console.log(`string length multipal by total number of words : ${result}`);

}
squareOfWordLength() 