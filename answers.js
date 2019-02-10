/* eslint-disable no-useless-concat */
/* eslint-disable no-continue */
/* Chapter 1 (page 16) – Fundamentals. Code answered from top to bottom (column1, then column 2), numbered for clarity */

/* 1 - Setting and Swapping: Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa. */
let myNumber = 42;
let myName = "Seth";
let temp1;
let temp2;
myNumber = temp1;
myName = temp2;
myNumber = myName;
myName = myNumber;

/* 2 - Print -52 to 1066: Print integers from -52 to 1066 using a FOR loop. */
for (let i = -52; i <= 1066; i++) {
    document.write(i + '<br>');
}

/* 3 - Don’t Worry, Be Happy: Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
--function includes count parameter, for flexibility. Could be hard set to 98 as well. */
function beCheerful(count) {
    for (let i = 0; i < count; i++) {
        console.log("good morning!");
    }
}
beCheerful(98);

/* 4 - Multiples of Three – but Not All: Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6. */
for (let i = -300; i <= 0; i += 3) {
    if (i === (-6)) {
        continue;
    }
    else if (i === (-3)) {
        continue;
    }
    else {
        document.write(i + '<br>');
    }
}

/* 5 - Printing Integers with While: Print integers from 2000 to 5280, using a WHILE. */
let i = 2000;
while (i >= 2000 && i <= 5280) {
    document.write(i + '<br>');
    i += 1;
}

/* 6 - You Say It’s Your Birthday: If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."
--interpreted either or as in day-month, or monday-day. Would cause problems for any bdays below "12" in either slot. Can be fixed by being strict, instead of allowing a number in any order. */
const bDay = 4;
const bMon = 1;
function maybeBDay(num1, num2) {
    if ((num1 === bDay && num2 === bMon) || (num2 === bDay && num1 === bMon)) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day...");
    }
}
maybeBDay(4, 1);

/* 7 -  Leap Year: Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
--used console logs for the determination */
function leapYear(year) {
    if (((year % 400) !== 0) && ((year % 100) === 0)) {
        console.log(year + " isn't a leap year because of that 400 rule.");
    }
    else if ((year % 4) === 0) {
        console.log(year + " is a leap year!");
    }
    else {
        console.log(year + " is not a leap year.");
    }
}
leapYear(2000);
leapYear(2100);

/* 8 - The Final Countdown: This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9). */
function finCountDown(param1, param2, param3, param4) {
    let rolling = param1;
    while (rolling < param3) {
        rolling += param1;
        if (rolling > param3) {
            break;
        }
        else if ((rolling < param2) || (rolling === param4)) {
            continue;
        }
        console.log(rolling);
    }
}
finCountDown(3, 5, 17, 9);

/* 9 - Print and Count: Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were. */
let stack = 0;
for (let ab = 512; ab < 4096; ab++) {
    if (ab % 5 === 0) {
        document.write((ab) + ', ');
        stack += 1;
    }
}
console.log("<br> There were " + stack + " multiples of five in the range");

/* 10 - Multiples of Six: Print multiples of 6 up to 60,000, using a WHILE */
let a = 0;
while (a < 60000) {
    a += 6;
    document.write(i + '<br>');
}

/* 11 - Counting, the Dojo Way: Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo". */
for (let xy = 1; xy <= 100; i++) {
    if (xy % 5 === 0 && xy % 10 === 0) {
        document.write("Coding" + "Dojo" + '<br>');
    }
    else if (xy % 5 === 0) {
        document.write("Coding" + '<br>');
    }
    else {
        document.write(xy + '<br>');
    }
}

/* 12 - What Do You Know?: Your function will be given an input parameter incoming. Please console.log this value. */
function printLog(incoming) {
    console.log(incoming);
}
printLog("words");

/* 13 - Whoa, That Sucker’s Huge…: Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
--Probably shortcuts, but at the time of doing this, I can't figure out how to properly test performace in JS. So no way to verify. */
let start = 0;
for (let ip = -300000; ip <= 300000; ip++) {
    if (ip % 2 !== 0) {
        start += ip;
    }
}
console.log(start);

/* 14 - Countdown by Fours: Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop. */
let b = 2016;
while (b > 0) {
    b -= 4;
    if (b === 0) {
        break;
    }
    console.log(i);
}

/* 15 - Flexible Countdown: Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
--(method1) first solution. Uses a for loop initially, but incorporates a while loop. */
function flexCount(lowNum, highNum, mult) {
    const num3 = mult;
    let num2 = highNum;
    const num1 = lowNum;
    for (let eye = 0; eye < highNum; eye++) {
        if (num2 % mult === 0 && num2 >= num1) {
            document.write(num2 + '<br>');
            num2 -= num3;
        }
        else {
            while (num2 % num3 !== 0) {
                num2 -= 1;
            }
        }
    }
}
flexCount(2, 9, 3);
flexCount(21, 93, 6);

/* 15 - Flexible Countdown - (method2)
-- Apparently I didn't need the while loop... */
function newFlexCount(lowNum, highNum, mult) {
    const num3 = mult;
    let num2 = highNum;
    const num1 = lowNum;
    for (let jay = 0; jay < highNum; jay++) {
        if (num2 % mult === 0 && num2 >= num1) {
            document.write(num2 + '<br>');
            num2 -= num3;
        }
        else {
            num2 -= 1;
        }
    }
}
newFlexCount(22, 934, 15);

/* Chapter 1 (page 20) – Fundamentals. Code answered from top to bottom, numbered for personal clarity */


/* 1 - Countdown: Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array? --array will be "num" + 1 for zero since num is included in the array. */
function countdown(num) {
    const countArr = [];
    for (let k = num; k >= 0; k--) {
        countArr.push(k);
    }
    // console.log(countArr);
    return countArr;
}
countdown(7);

/* 2 - Print and Return: Your function will receive an array with two numbers. Print the first value, and return the second. */
function printReturn([num1, num2]) {
    document.write(num1);
    // console.log(num2);
    return num2;
}
printReturn([1, 7]);

// 2 - method 2 - would allow more flexibility for changes later and highlights the input being an array if someone else doesnt notice the brackets
function printReturn2(arr) {
    const num1 = arr[0];
    const num2 = arr[1];
    document.write(num1);
    //   console.log(num2);
    return num2;
}
printReturn2([4, 7]);

/* 3 - First Plus Length: Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
--If a word, it concats the word and the value "birds4" below. Bool - True = 1, false = 0, and it calculates accordingly */
function plusLength(arr) {
    const thing = (arr[0] + arr.length);
    // console.log(thing);
    return thing;
}
plusLength([1, 7, 3, 3]);
plusLength([false, 7, 3, 3]);
plusLength(["birds", 7, 3, 3]);

/* 4 - Values Greater than Second: For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
--I took 2nd value to mean arr[1]. Would have preferred clarity hear. Would have started i at 3 if it meant arr[2] */
function greaterThanTwo(arr) {
    let counter = 0;
    for (let kay = 2; kay < arr.length; kay++) {
        document.write(arr[kay] + '<br>');
        counter += 1;
    }
    // console.log(counter);
    return counter;
}
greaterThanTwo([1, 3, 5, 7, 9, 13]);

/* 5 - Values Greater than Second, Generalized: Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
--Created an if statement for less than required inputs */
function greatestOfTwo(arr) {
    let counter = 0;
    const newArr = [];
    if (arr.length <= 2) {
        console.log("This function requires at least three (3) inputs in order to run.");
    }
    else {
        for (let eep = 2; eep < arr.length; eep++) {
            newArr.push(arr[eep]);
            counter += 1;
        }
    }
    document.write(counter + " values after the 2nd input in this array");
    console.log(newArr);
    return newArr;
}
greatestOfTwo([1, 3, 5, 7, 9, 13]);

/* 6 - This Length, That Value: Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same. */
function lengthValue(num1, num2) {
    const raygun = [];
    while (raygun.length < num1) {
        raygun.push(num2);
    }
    if (raygun.length === num2) {
        document.write("Jinx!");
    }
    //  console.log(raygun);
    return raygun;
}
lengthValue(4, 4);

/* 7 - Fit the First Value: Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!". */
function aZeroRef(arr) {
    const num = arr[0];
    const ref = arr.length;
    if (num > ref) {
        document.write("Too big!");
    }
    else if (num < ref) {
        document.write("Too small!");
    }
    else {
        document.write("Just right!");
    }
}
aZeroRef([4, 4, 5, 6]);

/* 8 - Fahrenheit to Celsius: Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32 */
function fahrenheitToCelsius(fDegrees) {
    const fahToCel = ((fDegrees - 32) * (5 / 9));
    // console.log(fDegrees + " degrees Fahrenheit is " + fahToCel + " degrees Celsius");
    return fahToCel;
}
fahrenheitToCelsius(70);

/* 9 - Celsius to Fahrenheit: Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
(optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward(descending), checking whether it is equal to the corresponding Fahrenheit value. */
function celsiusToFahrenheit(cDegrees) {
    const celToFah = (((9 / 5) * cDegrees) + 32);
    // console.log(cDegrees + " degrees Celsius is " + celToFah + " degrees Fahrenheit");
    return celToFah;
}
celsiusToFahrenheit(-20);

/* 9 optional */
function tempEquality() {
    let cel;
    for (let feed = 200; (feed > -200); feed--) {
        cel = Math.floor((feed - 32) * (5 / 9));
        if (cel === feed) {
        //   console.log("Fahrenheit & Celsius are equal at " + cel);
            return cel;
        }
    }
}
tempEquality();

/* Chapter 1 (page 22) – Fundamentals. Code answered from top to bottom, numbered for personal clarity */

/* 1 - Biggie Size: Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5]. */

function biggieSize(arr) {
    const veggies = arr;
    for (let food = 0; food < arr.length; food++) {
        if (veggies[food] > 0) {
            veggies[food] = "big";
        }
    }
    // console.log(veggies);
    return veggies;
}
biggieSize([-1, 3, 5, -5]);

/* 2 - Print Low, Return High: Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array. */
function lowHigh(arr) {
    let low = arr[0];
    let high = arr[0];
    for (let mas = 1; mas < arr.length; mas++) {
        if (arr[mas] < low) {
            low = arr[mas];
        }
        else if (arr[mas] > high) {
            high = arr[mas];
        }
    }
}
lowHigh([7, 4, 23]);

/* 3 - Print One, Return Another
Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array. */
function printReturn3(arr) {
    let firstOdd;
    let nextToLast;
    for (let startin = 0; startin <= arr.length; startin++) {
        if ((arr[startin] % 2) !== 0) {
            firstOdd = arr[startin];
            break;
        }
    }
    for (let nextUp = 0; nextUp < arr.length - 1; nextUp++) {
        nextToLast = arr[nextUp];
    }
    // console.log(firstOdd);
    document.write(nextToLast);
    return firstOdd;
}
printReturn3([6, -21, 3, 5, -5, 8, 9, -8]);

/* 4 - Double Vision: Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original. */
function doubleVision(arr) {
    const double = [];
    for (let ticker = 0; ticker < arr.length; ticker++) {
        double.push(arr[ticker] * 2);
    }
    console.log(double);
}
doubleVision([6, -21, 3, 5, -5, 8, 9, -8]);

/* 5 - Count Positives: Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it. */
function countPositives2(arr) {
    let stat = 0;
    for (let tic = 0; tic < arr.length; tic++) {
        if (arr[tic] > 0) {
            stat += 1;
        }
    }
    arr.pop();
    arr.push(stat);
    // console.log(arr);
    return arr;
}
countPositives2([6, -21, 3, 5, -5, 8, 9, -8]);

/* 6 - Evens and Odds: Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!" --I'm sure there was an easier way to do this... */
function evensNodds(arr) {
    for (let dundun = 0, next = 1, nexter = 2; dundun <= arr.length; dundun++, next++, nexter++) {
        if (arr[dundun] === undefined || arr[next] === undefined || arr[nexter] === undefined) {
            break;
        }
        else if ((arr[dundun] % 2 !== 0) && (arr[next] % 2 !== 0) && (arr[nexter] % 2 !== 0)) {
            console.log("That's so odd!");
            console.log(dundun + " + " + next + " + " + nexter);
            dundun += 2;
            next += 2;
            nexter += 2;
        }
        else if ((arr[dundun] % 2 === 0) && (arr[next] % 2 === 0) && (arr[nexter] % 2 === 0)) {
            console.log("Even more so!");
            console.log(dundun + " + " + next + " + " + nexter);
            dundun += 2;
            next += 2;
            nexter += 2;
        }
    }
}
evensNodds([8, 21, 3, 9, 6, 4, 2, 2, 2, 12]);

/* 7 - Increment the Seconds: Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr. */
function incrementOdds(arr) {
    for (let aa = 1; aa < arr.length; aa += 2) {
        arr[aa] += 1;
    }
    console.log(arr);
    return arr;
}
incrementOdds([0, 0, 0, 1, 0, 2, 0, 3, 0, 4]);

/* 8 - Previous Lengths: You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array. */
function preLengths(arr) {
    let wordsmith = "";
    const blank = [];
    for (let bb = 0; bb < arr.length; bb++) {
        wordsmith = arr[bb];
        blank.push(wordsmith.length);
    }
    return blank;
}
preLengths(["one", "two", "three", "four"]);

/* 9 - Add Seven to Most: Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array. */
function sevenToMost(arr) {
    const blanket = [];
    for (let cc = 1; cc < arr.length; cc++) {
        blanket.push(arr[cc] + 7);
    }
    return blanket;
}

/* 10 - Reverse Array: Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]. */
function reverseArray(arr) {
    const quilt = [];
    const duvet = arr.length;
    for (let dd = 0; dd < duvet; dd++) {
        quilt.push(arr.pop());
    }
    return quilt;
}

/* 11 - Outlook: Negative: Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5]. */
function outlookNeg(arr) {
    const comforter = [];
    for (let ee = 0; ee < arr.length; ee++) {
        if (arr[ee] > 0) {
            let pos = arr[ee];
            pos *= (-1);
            comforter.push(pos);
        }
        else {
            const neg = arr[ee];
            comforter.push(neg);
        }
    }
    return comforter;
}

/* 12 - Always Hungry: Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once. */
function alwaysHungry(arr) {
    let inc = 0;
    for (let ff = 0; ff < arr.length; ff++) {
        if (arr[ff] === "food") {
            inc += 1;
        }
    }
    if (inc > 0) {
        document.write("yummy");
    }
    else {
        document.write("I'm hungry");
    }
}

/* 13 - Swap Toward the Center: Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1]. */

function swapToCenter(arr) {
    let begin = 0;
    let end = arr.length - 1;
    while (begin < end) {
        [arr[begin], arr[end]] = [arr[end], arr[begin]];
        begin += 2;
        end -= 2;
    }
    console.log(arr);
}

/* 14 - Scale the Array: Given array arr and number num, multiply each arr value by num, and return the changed arr. */
function scaleArr(arr, num) {
    const scaledArr = [];
    for (let starter = 0; starter < arr.length; starter++) {
        scaledArr.push(arr[starter] * num);
    }
    // console.log(scaledArr);
    return scaledArr;
}
