//1. print odds 1-20
console.log("Challenge 1: odds 1-20")
for(var i = 1; i <= 20; i++) {
    if (i%2) {
        console.log(i)
    }
}

//2. Decreasing Multiples of 3
console.log("Challenge 2: Decreasing Multiples of 3")
for(var i = 100; i >= 0; i--) {
    if (i%3 == 0) {
        console.log(i)
    }
}

//3. Print the sequence
console.log("Challenge 3: Print the Sequence")
for(var num = 4; num >= -3.5; num -= 1.5) {
    console.log(num)
}

//4. Sigma
console.log("Challenge 4: Sigma")
var sum = 0
for(var i = 1; i <=100; i++) {
    sum += i
}
console.log(sum)

//5. Factorial
console.log("Challenge 5: Factorial")
var product = 1;
for(var i = 1; i <= 12; i++) {
    product *= i
}
console.log(product)