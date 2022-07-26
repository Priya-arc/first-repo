let a =100;
let b =Math.sqrt(a);
console.log(b);

//method 2nd
let c=100;
 let d = c**0.5;
 console.log(d);

 //method 3rd
 let num=100;
 let a=num/2;
 do{
    let b=a;
    a=((b+num/2)/2)
 }while(b-a!=0);