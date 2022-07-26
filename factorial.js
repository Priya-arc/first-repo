let number =10;
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}


else if (number === 0) {
    console.log(`-1`);
}
else if(!Number.isInteger(number))
console.log('Error! Factorial for float number does not exist.');


else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(fact);
}