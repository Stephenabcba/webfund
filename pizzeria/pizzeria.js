function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {}
    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheese = cheese
    pizza.toppings = toppings
    return pizza
}

function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

function randomPizza () {
    crustChoices = ["deep dish", "hand tossed", "thin crust", "cheesy crust"]
    sauceChoices = ["traditional", "marinara", "barbeque", "pesto", "alfredo"]
    cheeseChoices = ["mozzarella", "feta", "swiss", "cheddar"]
    toppingsChoices = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bell peppers", "ham", "pineapple", "grilled chicken"]
    pizza = pizzaOven(crustChoices[randomNumber(crustChoices.length)],sauceChoices[randomNumber(sauceChoices.length)],[cheeseChoices[randomNumber(cheeseChoices.length)],cheeseChoices[randomNumber(cheeseChoices.length)]],[toppingsChoices[randomNumber(toppingsChoices.length)],toppingsChoices[randomNumber(toppingsChoices.length)]])
    return pizza
}





pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
pizza3 = pizzaOven("thin crust","barbeque", ["mozzarella"], ["ham", "pineapple"])
pizza4 = pizzaOven("cheesy crust", "alfredo", ["swiss cheese"], ["grilled chicken"])

pizza5 = randomPizza()

console.log(pizza1)
console.log(pizza2)
console.log(pizza3)
console.log(pizza4)
console.log(pizza5)