function averageForStudent(nameIndex,scores){
  let sum = 0;
  for (let i=0; i<scores.length; i++){
    sum += scores[nameIndex][i];
  }
  let average = sum/scores[nameIndex].length;
  return average;
}

function averageForTest(testIndex,scores){
  let sum = 0;
  for (let i=0; i<scores.length; i++){
    sum += scores[i][testIndex];
  }
  let average = sum/scores[0].length;
  return average;
}

//TODO: Export all functions within an object.

// make both functions available to other files
module.exports = {
  averageForStudent: averageForStudent,
  averageForTest: averageForTest
}

// solution
/*
module.exports = {
  averageForStudent: averageForStudent,
  averageForTest: averageForTest
};
*/