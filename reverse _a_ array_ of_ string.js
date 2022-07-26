let arr= ["jaya","rekha","sushma","maya"];
function reversearr(arr){
    arr.reverse();
    return arr;
}
console.log(reversearr(arr));

// method 2nd

let arrr= ["jaya","rekha","sushma","maya"];
let b = arrr.length;
function arrrev(arrr,b){
    for(let i =b-1;i>=0;i--)
    console.log(arrr[i]);
}
arrrev(arrr,b);