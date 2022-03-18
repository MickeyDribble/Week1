const cashWithdrawal = (amount,accnum)=> {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawal(100,6873729)

const addUp = (num1,num2)=>{
    return num1 +num2;
}

console.log(addUp(7,3));
//==============================
// Activity 1

const factorial = (n) => {
    if ((n===0) || (n===1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));
//================================
// Activity 2

let orderCount = 0;

const takeOrder = (type,topping) => {
    console.log(`${type} Pizza with ${topping} please.`);
    orderCount++;
}

takeOrder("Vegan","Pineapple");
takeOrder("Large","Gravy");
takeOrder("Medium","Carrots");
takeOrder("Gluten-Free","Mashed Potato");

console.log(orderCount)
//====================================
// Activity 3

let pin = "5678"
balance = "100"
accounNum = "7465231"

const cashMachine = (pin,amount) => {
    if (pin == "5678" && amount <= balance){
        console.log(`Pin is correct, £${amount} withdrawed from AC:${accounNum}. Your remaining balance is £${balance - amount}.`)
    } else if (pin == "5678" && amount > balance) {
        console.log("Insufficent funds.")
    } else {
        console.log("Incorrect Pin. Please try again.")
    }
}

cashMachine(5678,10)
//=======================================


