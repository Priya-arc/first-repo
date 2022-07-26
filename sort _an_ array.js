let arr=[10,20,60,58,98,78,309,5678];
function sort_arr(arr){
    arr.sort(function(a,b){return a-b});
    return arr;
}
console.log(sort_arr(arr));

//method 2nd
let array = [4, 32, 2, 5, 8];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);