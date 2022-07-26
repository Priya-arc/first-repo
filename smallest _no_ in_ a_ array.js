let arr=[10,20,60,58,98,78,309,5678];
function largestarr(arr){
    arr.sort(function(a,b){return b-a});
    return arr[arr.length-1];
}
console.log(largestarr(arr));

//method 2nd
//let array=[10,20,60,58,98,78,309,5678];
//function letarr(array){
    
  //  let m = Number.MAX_VALUE;
    //for(let i of array){
      //  if(i<m)
        //m=i;
        
   // }
    //return m;
//}

console.log(letarr(array));