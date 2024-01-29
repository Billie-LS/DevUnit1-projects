function removeI(arr) {
    // if (!arr.includes('i')){
    if (arr.indexOf('i') === -1){
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));


// function removeI(arr) {
//   if (baseCase is true){
//   //return final array
//   //end recursion
//   } else {
//   //remove one 'i' entry from array
//   //call removeI function again
//   }
// };

