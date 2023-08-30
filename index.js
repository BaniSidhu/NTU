function celciusToFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32;
}
function farenheitTocelcius(farenheit) {
    return (farenheit - 32) * 5 / 9;
}
var celcius = 20;
var farenheit = 20;
console.log("20 degrees Celsius is equal to", celciusToFahrenheit(celcius), "degrees Fahrenheit.");
console.log("20 degrees Fahrenheit is equal to", farenheitTocelcius(farenheit), "degrees Celsius.");
//percentage 
var mark = 49;
console.log("The percentage is of mark " + (mark / 120) * 100 + "%");
//calculate discount 
var price = 99;
if (price > 100) {
    console.log(price - (price / 10) + "$");
}
else {
    console.log(price - (price / 5) + "$");
}
//print status according to age 
var age = 15;
if (age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 18) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
//recommend clothe according to temperature 
var temp = 32;
if (temp <= 15) {
    console.log("The weather is cold wear warm clothe");
}
else if (temp >= 16 && temp <= 35) {
    console.log("The weather is moderate jesa dil chahata pehno");
}
else {
    console.log("Wear light clothe the weather is too hot ");
}
//the number is divisible by 3 and 5 
var number = 15;
if (number % 5 == 0 && number % 3 == 0) {
    console.log("The number is divisible by both 5 and 3");
}
else if (number % 3 == 0) {
    console.log("The number is divisible by 3");
}
else if (number % 5 == 0) {
    console.log("The number is divisible by 5");
}
else {
    console.log("Neither divisible by 3 nor by 5 ");
}
//leap year or not 
var year = 2020;
if (year % 4 == 0) {
    console.log("this year is leap year");
}
else {
    console.log("this year is not leap year ");
}
//bill calculation
var units = 145;
var pr = 10;
if (units <= 100) {
    console.log((units * pr) + (pr * 0.1));
}
else if (units >= 101 && units <= 500) {
    console.log((units * pr) + (pr * 0.15));
}
else {
    console.log((units * pr) + (pr * 0.25));
}
//calculate 
function daysToweeks_days(days) {
    var weeks = Math.floor(days / 7);
    var daysLeft = days % 7;
    return "".concat(weeks, " weeks and ").concat(daysLeft, " days");
}
var days = 17;
console.log(daysToweeks_days(days));
