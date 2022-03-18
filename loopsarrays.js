//Array Syntax

let coffeeOrder = [
    "Alex = Cortado",
    "Ben = Cortado",
    "Charlie = Whatever's new"
];

console.log(coffeeOrder);

coffeeOrder.push("Chris = Oat Mocha");

console.log(coffeeOrder)

//Activity 1

let favSongs = [
    "Rise Against - People live here",
    "Rise Against - Ready to Fall",
    "Rise Against - Good Left undone"
]

console.log(favSongs)

favSongs.push("Rise against - hero of war")
favSongs.push("Rise against - re-education through labor")

console.log(favSongs)

favSongs.pop()

console.log(favSongs)

favSongs.unshift("Wham - last christmas")

console.log(favSongs)


let favDrinks = [
    "coke",
    "fanta",
    "tonic",
    "red bull"
];

for (let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks)
}


let multiplesTwo =[];

for (let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i)
    }
};

console.log(`Numbers divisible by 2 between 0 & 20 are: ${multiplesTwo}`)


let cards = ["Diamond", "Spade","Heart", "Club"]
let currentCard = "Club";

while (currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)]
}

console.log(currentCard);


//================================
//Activity1

let favFilms = [
    "Gladiator",
    "Jingle all the way",
    "Troy",
    "Pan's Labyrynth",
    "Memento"
];
console.log(favFilms)

favFilms.push("Inside Man", "Coherance")

console.log(favFilms)

for (let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i])
};

//=======================================
// Activity 2
let randomNum = []

for (let i = 0; i < 6; i++){
    randomNum.push(Math.floor(Math.random() * (1,50)));

}
console.log(randomNum)
//========================================
// Activity 3

let numbers = ["0","1","2","3","4","5","6","7","8","9"]

for (let i = numbers.length -1; i >= 0;i--){
    console.log(numbers[i])
}
//=========================================
// Activity 4

let films = ["Halloween","Monkeys Paw","Ghostbusters","Memento"]

// for (i = 0; i < films.length; i++){
//     console.log(films[i])
// }

if (films.indexOf("Ghostbusters",0) == 2){
    console.log("Yay! It's Ghostbusters");
} else {
    console.log("We want Ghostbusters")
}
//=============================================
// Activity 5

for (let i = 0; i < 6; i++){
     let randNum = Math.floor(Math.random() *30);
     if (randNum % 7 ==0) {
         console.log(randNum);
         console.log("This number is Divisable by 7")
     } else {
         console.log(randNum)
         console.log("This number is NOT Divisable by 7")
     }
}
//====================================================
// Activity 6

let bobsFollowers = ["Dave","Alice","Bryan","Michael","Sue"];
let hannahsFollowers = ["Simon","Sandy","Bryan","Michael"];

let mutual = [];

for (let i = 0;i < bobsFollowers.length; i++) {
    for (let j = 0;j <hannahsFollowers.length;j++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) mutual.push(bobsFollowers[i])
    }

}
console.log(mutual)
//=======================================================
//Activity 7

// Research on do...while loop, find
// out about the difference between
// for loop, while loop and do...while
// loop. Give an example of each.
// What are the pros and cons?


let i = 1;
const n = 5;

//example of a do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);

//Example of a for loop

//this for loop is ran 5 times
for (let i = 1; i <=5; ++i) {
    console.log(i)
 }

// //Example of a While loop
// 0 - 10 
// let i = 0;
// while (i <= 10) {
//   console.log(i)
//   i++
// }



