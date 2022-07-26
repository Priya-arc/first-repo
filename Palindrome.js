let n;
n= 567;
let palindrome = function(n){
    let rem =0;
    while(n>0){
    let a = n%10;
     rem = rem*10+a;
       n=n/10;
}
return rem;
}
palindrome(n);
if(n==palindrome)
console.log("Number is Palindrome");
else
console.log("Number is not Palindrome");