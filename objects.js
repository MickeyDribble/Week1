// ============================================
// Activity 1
const person = {
    name: "Michael", //name=key value="michael"
    age: 33,
    favSongs: [
        "Rise Against - People Live Here",
        "Rise Against - Good Left Undone",
        "Rise Against - Hero of War"
    ],
    sayHi:()=> {
        console.log(`Hello my name is ${person.name}.`)
    }
}

console.log(person.sayHi());
// ===============================================
// Activity 2

const pet = {
    name: "Clifford",
    typeOfPet:"Dog",
    age: 6,
    colour: "Red",
    eat: ()=>{
        console.log(`${pet.name} is eating.`)
    }, 
    drink:()=>{
        console.log(`${pet.name} is drinking`)
    }
}

console.log(pet.eat());
console.log(pet.drink());
// ====================================================
// Activity 3
totalCost = 0
order = []

const coffeeShop = {
    branch: "Manchester",
    drinks: {
       Tea: 2.00,
       Coffee: 2.00,
       Pepsi: 2.00,
       Water: 0.50
    },
    food: {
        EnglishBreakfast: 8.00,
        Toast:1.50,
        Chips:1.70,
        SausageBarm:2.00

    },
    
    drinksOrdered: ()=> {
        for (let price of Object.values(coffeeShop.drinks)){
            totalCost += price
        }
        order.push(Object.entries(coffeeShop.drinks))
        return(`Your order ${Object.entries(coffeeShop.drinks)}`)
        

    },
    foodOrdered: ()=> {
        for (let price of Object.values(coffeeShop.food)){
            totalCost += price
        }
        order.push(Object.entries(coffeeShop.food))
        return(`Your order ${Object.entries(coffeeShop.food)}`)

    },
}
coffeeShop.drinksOrdered();
coffeeShop.foodOrdered();
console.log("Your order is: ", order);
console.log(`Your total is ${totalCost}`)
