"use strict";
/* Chapter 1 (page 16) – Fundamentals. Code answered from top to bottom (column1, then column 2), numbered for clarity */

//1 - Setting and Swapping
let myNumber = 42;
let myName = "Seth";
let temp1;
let temp2;
myNumber = temp1;
myName = temp2;
myNumber = myName;
myName = myNumber;

//2 - Print -52 to 1066
for (let i = -52; i <= 1066; i++) {
    document.write(i + '<br>');
}

//3 - Don’t Worry, Be Happy
function beCheerful(count) {
    for (let i = 0; i < count; i++) {
        console.log("good morning!");
    }
}
beCheerful(98);

//4 - Multiples of Three – but Not All
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

//5 - Printing Integers with While
let i = 2000;
while (i >= 2000 && i <= 5280) {
    document.write(i + '<br>');
    i++;
}

//6 - You Say It’s Your Birthday - interpreted either or as in day-month, or monday-day. Would cause problems for any bdays below "12" in either slot. Can be fixed by being strict, instead of allowing a number in any order.
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

//7 -  Leap Year
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

//8 - The Final Countdown
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

//9 - Print and Count
let stack = 0;
for (let i = 512; i < 4096; i++ ) {
    if (i % 5 === 0 ) {
        document.write(i) + ', ';
        stack++;
    }
}
document.write("<br> There were " + stack + " multiples of five in the range");

//10 - Multiples of Six
let i = 0;
while (i < 60000) {
    i += 6;
    document.write(i + '<br>')
}

//11 - Counting, the Dojo Way
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

//12 - What Do You Know?
function printLog(incoming) {
    console.log(incoming);
}

//13 - Whoa, That Sucker’s Huge… - Probably shortcuts, but I cant figure out testing performace. So no way to verify. 
let start = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0 ) {
        start += i;
    }
}
console.log(start);

//14 - Countdown by Fours
let i = 2016;
while (i > 0) {
    i -= 4;
    if (i === 0) {
      break;
    }
    console.log(i);
}

//15 - Flexible Countdown - (method1) -- first solution. Uses a for loop initially, but incorporates a while loop.
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

//15 - Flexible Countdown - (method2) -- Apparently I didn't need the while loop... 
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
//Countdown - array will be "num" + 1 for zero since num is included in the array.
function countdown(num) {
    let countArr = [];
    for (let i = num; i >= 0; i--) {
        countArr.push(i);
    }
    console.log(countArr);
}

countdown(7);