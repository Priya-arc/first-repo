let a =10;
let b=16;

function area_triangle(a,b){
    if(typeof a === "number" && typeof b=== "number"){
       
    let area = (a*b)/2;
    console.log(area);}
    else
    console.log("Enter Valid Input");
}
area_triangle(a,b);