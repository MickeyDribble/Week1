// Let can be changed
let firstName = "Michael";
// // Const cannot, hence constant
const secondName = "Farrell";

console.log(secondName)

let i = 10;
console.log(i)
i = i + 2;
console.log(i)
i += 2;
console.log(i)
// -------------------------------------------
// Activity 1

let favouriteColour = "Blue";
let name = "Jane";
let age = "41"

// This is a string template literal

favouriteColour = "Red"
name = "Harold"
age = "27"

console.log(`Hi my name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}.`)

// ----------------------------------------------
// Activity 2

let day = "today"
let breakfast = "toast"
let lunch = "hummus wrap"
let dinner = "lasagna"

console.log(`${day} I will have ${breakfast} for breakfast. Later on at lunch I will have one ${lunch} and for dinner I will have ${dinner}.`)

day = "tomorrow"
breakfast = "cereal"
lunch = "tofu wrap"
dinner = "cottage pie"

console.log(`${day} I will have ${breakfast} for breakfast. Later on at lunch I will have one ${lunch} and for dinner I will have ${dinner}.`)
// -----------------------------------------------
// Activity 3

let today = new Date()
let birthday = new Date("9,6,2022")
let tilBirthday = Math.ceil(((birthday - today) / 86400000))

console.log(tilBirthday)
// ------------------------------------------------
// Activity 4

let = space1 = "x"
let = space2 = "o"
let = space3 = ""
let = space4 = "x"
let = space5 = "x"
let = space6 = ""
let = space7 = "o"
let = space8 = ""
let = space9 = ""

console.log(`     
      |     |     
  ${space1}   |  ${space2}  |     
      |     |     
--------------------
      |     |     
  ${space4}   |  ${space5}  |     
      |     |     
-------------------- 
      |     |     
  ${space7}   |     |     
      |     |                                   
                                  `)
//---------------------------------------------------



// const grid = "     |     |     \n     |     |     \n     |     |     \n------------------"
// const finishline ="     |     |     \n     |     |     \n     |     |     "
// for (let i = 0; i < 2; i++) {
//     console.log (grid);}
// console.log (finishline)





