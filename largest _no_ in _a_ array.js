let arr=[10,20,60,58,98,78,309,5678]; //using sort function
function largestarr(arr){
    arr.sort(function(a,b){return b-a});
    return arr[0];
}
console.log(largestarr(arr));

//2nd method
let array=[10,20,60,58,98,78,309,5678];
function letarray(array){
    
    let m = Number.MIN_VALUE;
    for(let i of array){
        if(i>m)
        m=i;
        
    }
    return m;
}

console.log(letarray(array));