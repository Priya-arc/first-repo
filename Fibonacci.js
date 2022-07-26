let number =10;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
if (number<0)
console.log("enter valid number");
else if (!Number.isInteger(number))
{
    console.log("enter valid number");
}
else
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}