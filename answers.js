"use strict";
/* Chapter 1 (page 16) – Fundamentals. Code answered from top to bottom (column1, then column 2), numbered for clarity */

/*1 - Setting and Swapping: Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa. */
let myNumber = 42;
let myName = "Seth";
let temp1;
let temp2;
myNumber = temp1;
myName = temp2;
myNumber = myName;
myName = myNumber;

/*2 - Print -52 to 1066: Print integers from -52 to 1066 using a FOR loop. */
for (let i = -52; i <= 1066; i++) {
    document.write(i + '<br>');
}

/*3 - Don’t Worry, Be Happy: Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times. 
--function includes count parameter, for flexibility. Could be hard set to 98 as well.*/
function beCheerful(count) {
    for (let i = 0; i < count; i++) {
        console.log("good morning!");
    }
}
beCheerful(98);

/*4 - Multiples of Three – but Not All: Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6. */
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

/*5 - Printing Integers with While: Print integers from 2000 to 5280, using a WHILE. */
let i = 2000;
while (i >= 2000 && i <= 5280) {
    document.write(i + '<br>');
    i++;
}

/*6 - You Say It’s Your Birthday: If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."
--interpreted either or as in day-month, or monday-day. Would cause problems for any bdays below "12" in either slot. Can be fixed by being strict, instead of allowing a number in any order. */
let bDay = 4;
let bMon = 1;
function maybeBDay(num1, num2) {
    if ((num1 === bDay && num2 === bMon) || (num2 === bDay && num1 === bMon)) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day...");
    }
}
maybeBDay(4,1);

/*7 -  Leap Year: Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is. 
--used console logs for the determination*/
function leapYear(year) {
    if (((year % 400) !== 0) && ((year % 100) === 0)) {
        console.log(year + " isn't a leap year because of that 400 rule.");;
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

/*8 - The Final Countdown: This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9). */
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
finCountDown(3,5,17,9);

/*9 - Print and Count: Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were. */
let stack = 0;
for (let i = 512; i < 4096; i++ ) {
    if (i % 5 === 0 ) {
        document.write(i) + ', ';
        stack++;
    }
}
document.write("<br> There were " + stack + " multiples of five in the range");

/*10 - Multiples of Six: Print multiples of 6 up to 60,000, using a WHILE */
let i = 0;
while (i < 60000) {
    i += 6;
    document.write(i + '<br>')
}

/*11 - Counting, the Dojo Way: Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo". */
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 10 === 0) {
        document.write("Coding" + "Dojo" + '<br>');
    }
    else if (i % 5 === 0) {
        document.write("Coding" + '<br>');
    }
    else {
        document.write(i + '<br>');
    }
}

/*12 - What Do You Know?: Your function will be given an input parameter incoming. Please console.log this value. */
function printLog(incoming) {
    console.log(incoming);
}

/*13 - Whoa, That Sucker’s Huge…: Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
--Probably shortcuts, but at the time of doing this, I can't figure out how to properly test performace in JS. So no way to verify. */
let start = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0 ) {
        start += i;
    }
}
console.log(start);

/*14 - Countdown by Fours: Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop. */
let i = 2016;
while (i > 0) {
    i -= 4;
    if (i === 0) {
      break;
    }
    console.log(i);
}

/*15 - Flexible Countdown: Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines). 
--(method1) first solution. Uses a for loop initially, but incorporates a while loop. */
function flexCount(lowNum, highNum, mult) {
    let num3 = mult;
    let num2 = highNum;
    let num1 = lowNum;
    for (let i = 0; i < highNum; i++) {
        if (num2 % mult === 0 && num2 >= num1) {
          document.write(num2 + '<br>');
            num2 -= num3;
        }
        else {
            while (num2 % num3 !== 0) {
                num2--;
            }

        }
    }
}
flexCount(2,9,3);
flexCount(21,93,6);

/*15 - Flexible Countdown - (method2) 
-- Apparently I didn't need the while loop... */
function newFlexCount(lowNum, highNum, mult) {
    let num3 = mult;
    let num2 = highNum;
    let num1 = lowNum;
    for (let i = 0; i < highNum; i++) {
         if (num2 % mult === 0 && num2 >= num1) {
            document.write(num2 + '<br>');
              num2 -= num3;
          }
          else {
                  num2--;
              }
          }
        }
newFlexCount(22,934,15);

/* Chapter 1 (page 20) – Fundamentals. Code answered from top to bottom, numbered for personal clarity */


/*1 - Countdown: Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array? --array will be "num" + 1 for zero since num is included in the array. */
function countdown(num) {
    let countArr = [];
    for (let i = num; i >= 0; i--) {
        countArr.push(i);
    }
    console.log(countArr);
    return countArr;
}
countdown(7);

/*2 - Print and Return: Your function will receive an array with two numbers. Print the first value, and return the second. */
function printReturn([num1, num2]) {
    document.write(num1);
    console.log(num2);
}
printReturn([1,7]);

//2 - method 2 - would allow more flexibility for changes later and highlights the input being an array if someone else doesnt notice the brackets
function printReturn(arr) {
    let num1 = arr[0];
    let num2 = arr[1];
  document.write(num1);
  console.log(num2);
}
printReturn([4,7]);

/*3 - First Plus Length: Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
the array’s first value is not a number, but a string (like "what?") or a boolean (like false).  
--If a word, it concats the word and the value "birds4" below. Bool - True = 1, false = 0, and it calculates accordingly */
function plusLength(arr) {
    let thing =(arr[0] + arr.length);
    console.log(thing);
}
plusLength([1, 7, 3, 3]);
plusLength([false, 7, 3, 3]);
plusLength(["birds", 7, 3, 3]);

/*4 - Values Greater than Second: For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.  
--I took 2nd value to mean arr[1]. Would have preferred clarity hear. Would have started i at 3 if it meant arr[2] */
function greaterThanTwo(arr) {
    let counter = 0;
    for (let i = 2; i < arr.length; i++) {
        document.write(arr[i] + '<br>');
        counter++;
    }
    console.log(counter);
}
greaterThanTwo([1,3,5,7,9,13]);

/*5 - Values Greater than Second, Generalized: Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long? 
--Created an if statement for less than required inputs */
function greaterThanTwo(arr) {
    let counter = 0;
    let newArr = [];
    if (arr.length <= 2) {
        console.log("This function requires at least three (3) inputs in order to run.");
    }
    else {
      for (let i = 2; i < arr.length; i++) {
        newArr.push(arr[i]);
        counter++;
      }
      console.log(newArr);
  }
    document.write(counter + " values after the 2nd input in this array");
}
greaterThanTwo([1,3,5,7,9,13]);

/*6 - This Length, That Value: Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same. */
function lengthValue(num1, num2) { 
    let raygun = [];
    while (raygun.length < num1) {
        raygun.push(num2);
    }
    console.log(raygun);
    if (raygun.length === num2) {
      document.write("Jinx!");
     }
}
lengthValue(3,3);

/*7 - Fit the First Value: Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!". */
function aZeroRef(arr) {
    let num = arr[0];
    let ref = arr.length;
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
aZeroRef([4,4,5,6]);

/*8 - Fahrenheit to Celsius: Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32 */
function fahrenheitToCelsius(fDegrees) {
    let fahToCel = (fDegrees - 32) * (5/9);
    console.log(fDegrees + " degrees Fahrenheit is " + fahToCel + " degrees Celsius");
}

/*9 - Celsius to Fahrenheit: Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees. 
(optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward(descending), checking whether it is equal to the corresponding Fahrenheit value. */
function celsiusToFahrenheit(cDegrees) {
    let celToFah = (((9/5) * cDegrees) + 32);
    console.log(cDegrees + " degrees Celsius is " + celToFah + " degrees Fahrenheit");
}

/*9 optional */
function tempEquality() {
    let cel;
    for (let i = 200; (i > -200); i--) {
      cel = Math.floor((i - 32) * (5/9));
        if ( cel === i) {
          console.log("Fahrenheit & Celsius are equal at " + cel);
          return;
        }
    }
}
tempEquality();