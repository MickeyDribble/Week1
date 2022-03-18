let place = "Salford";
let weather = "Sunny";

if  (place == "Salford" && weather == "Sunny") {
    console.log("Check again");
}
else if (place == "Salford" && weather == "Rain") {
    console.log("Obvs");
}
else {
    console.log("What it is not raining?");
}
//-----------------------------------
// Activity 1

let age = 21
let country = "US"

if (age > 17 && country === "UK") {
    console.log("Yes I can serve you")
} else if (age >20 && country === "US") {
    console.log("Yes I can serve you")
}
else {
    console.log("You aren't old enough")
}
//---------------------------------------
//Activity 2

let pizzaToppings = "Pineapple"

switch(pizzaToppings) {
    case "Tomatoes":
        console.log("These are important ingredients for a pizza");
        break;
    case "Pepperoni":
        console.log("I do not mind pepperoni on pizza");
        break;
    case "Pineapple":
        console.log("Doesnt belong on a pizza");
        break;
}
//--------------------------------------------
// Activity 3

let password = "bulbasaur"

if (password.length < 8) {
    console.log("This Password is too short")
} else {
    console.log(password)
}
//===============================================
// Activity 4

// let num = 9

// if (num%3 ==0 || num%5 ==0 ){
//     console.log(`${num} is divisable by 3 or 5`)
// } else {
//     console.log(`${num} is not divisable by 3 or 5`)
// }
//==================================================
// Activity 5

// let num = 15

// if (num%3 ==0 && num%5 ==0) {
//     console.log("Fizz Buzz")
// } else if (num%3 ==0){
//     console.log("Fizz")
// } else if (num%5 ==0) {
//     console.log("Buzz")
// }
//====================================================
// Activity 6

// let num = "5005"

// if (num[0] == num[3] && num[1] == num[2]) {
//     console.log("This is a Palindrome");
// } else {
//     console.log("This is NOT a Palindrome")
// }
//======================================================
//Activity 7

let time = "5pm"
let placeOfWork = "CodeNation"
let townOfHome = "Manchester"

if (time == "7am"){
    console.log(`I am at home getting ready to commute to ${placeOfWork}.`);
} else if (time == "9am") {
    console.log(`I am starting work at ${placeOfWork} in ${townOfHome}.`)
} else if (time == "5pm") {
    console.log(`I am heading home from ${placeOfWork}.`)
}
//============================================================
// Activity 8

let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let index = text.lastIndexOf ("i");
console.log (index);
//==============================================================
// Activity 9
let word = "mhfgjnhfyryvsbkakbjslam"

if (word.charAt(0) == word.charAt(word.length-1)) {
    console.log(true)
} else {
    console.log(false)
}
// ==============================================================
// Activity 10

let num1 = 7;
let num2 = 7;
let sum = num1 + num2;

if (sum % 2 == 0){
  console.log(`The sum = ${sum} and is even.`)
} else {
  console.log(`${num1 * num2}`)
}


     

