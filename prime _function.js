let a=10;
let b=0;
function is_prime(a){
    if(a==2)
    console.log("No is Prime");
    else
    if(a<2)
    {console.log("Not a Prime no");b++;}
    else
    if(Number.isInteger(a)){
    for(let n=2;n<a/2;n++)
    {
        if(a%n==0){
            b++;
            console.log("Not a Prime no");
            break;
        }
    }}
    if(b==0)
    console.log("No is Prime");
}
is_prime(a);