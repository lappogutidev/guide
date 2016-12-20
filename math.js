//**********
//  MATH
//**********

document.write("5 + 4 = ", 5+4, "<br />"); //Comma treats the next function sepretatly
document.write("5 - 4 = ", + 5-4, "<br />");//Concatonation treat the 5+4 as strings
document.write("5 * 4 = ", + 5*4, "<br />");
document.write("1 / 3 = ", + 1/3, "<br />");
document.write("5 % 4 = ", + 5%4, "<br />");

document.write("Max Num = ", Number.MAX_VALUE, "<br />");
document.write("Max Num = ", Number.MIN_VALUE, "<br />");

//Variables can only store up to 16 digits
var precisionTest = 0.10000000000000001;
document.write(precisionTest*2, "<br />");

//.toFixed(*) will round to * decimal/s
var balance = 1563.87;
document.write("Monthly Payment : ", (balance / 12).toFixed(2), "<br />");

var randomNum = 5;
//increments randomNum by 1 after it is displayed
document.write("randomNum++ = ", randomNum++, "<br />");
randomNum = 5;
//increments randomNum by 1 befoer it is displayed
document.write("++randomNum = ", ++randomNum, "<br />");
document.write("--randomNum = ", --randomNum, "<br />");

// randomNum += * adds * to the intial value of randomNum
document.write("randomNum += 5 = ", randomNum += 5, "<br />");
document.write("randomNum -= 5 = ", randomNum -= 5, "<br />");
document.write("randomNum *= 5 = ", randomNum *= 5, "<br />");
document.write("randomNum /= 5 = ", randomNum /= 5, "<br />");

//Order of operations applies in Javascript
document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br />");
document.write("(3 + 2) * 5 = ", (3+2)*5, "<br />");

//MATH.*
document.write("Math.E = ", Math.E, "<br />");
document.write("Math.PI = ", Math.PI, "<br />");

//absolute value
document.write("Math.abs(-8) = ", Math.abs(-8), "<br />");

//round up
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br />");

//round down
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br />");

//round
document.write("Math.round(6.45) = ", Math.round(6.45), "<br />");

//logarithm
document.write("Math.log(10) = ", Math.log(10), "<br />");
document.write("Math.log10(10) = ", Math.log10(10), "<br />");

//min and max of the two number in paranthesis
document.write("Math.max(10,5) = ", Math.max(10,5), "<br />");
document.write("Math.min(10,5) = ", Math.min(10,5), "<br />");

//first number to the power of the second
document.write("Math.pow(3,2) = ", Math.pow(3,2), "<br />");

//Roots of numbers
document.write("Math.sqrt(64) = ", Math.sqrt(64), "<br />");
document.write("Math.cbrt(64) = ", Math.cbrt(64), "<br />");

//Random Number 0 <= x < 1
document.write("Random Number = ", (Math.random()), "<br />");

//Random Number
document.write("Random Number (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br />");

document.write("Converted String : ", Number("3.14"), "<br />");
document.write("Converted Int : ", parseInt("5"), "<br />")
document.write("Converted Float : ", parseFloat("3.14"), "<br />")
