let arr=[1,5,4,35,54,6,74,456,63345,3267,23];
let b=456;
function searcharr(arr,b){
    for(let n=0;n<arr.length;n++)
    {
        if(b==arr[n])
        {return "true";
        break;}
    }
    return "false";
}
console.log(searcharr(arr,b));