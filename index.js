// Add your functions here
let map = function(arr, fn){ 
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

let reduce = function(arr, fn, start){

}