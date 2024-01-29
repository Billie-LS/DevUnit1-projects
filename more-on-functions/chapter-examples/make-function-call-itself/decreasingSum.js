function decreasingSum(integer) {
   if (integer === 1){
      console.log(integer);
      return integer;
   } else {
      //call decreasingSum function again
      console.log(integer);
      return integer + decreasingSum(integer-1);
   }
}

console.log(decreasingSum(5));
