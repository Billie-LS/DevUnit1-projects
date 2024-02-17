//Declare a class called CrewCandidate with a constructor that takes three parameters—
// name, mass, and scores.
// scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores = []) {
    this.name = name;
    this.mass = mass;
    this.scores = scores.map(parseFloat);
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }
  average() {
    // sum variable to accumulate total score.
    let sum = 0;
    // iterate each score in array scores.
    for (let score of this.scores) {
      // add each score to sum.
      sum += score;
    }
    // average by dividing sum by number of scores,
    // return as string representation with two decimal places.
    return (sum / this.scores.length).toFixed(2);
  }
  // method averaging
  averaging() {
    // Use reduce() to sum all scores in scores array
    let sumOfScores = this.scores.reduce(function (acc, score) {
      // iterate each score in array adding each to accumulator.
      return acc + score;
    }, 0);
    // average by dividing sumOfScores by number of scores,
    // round to two decimal places using the toFixed() method
    let averageScores = (sumOfScores / this.scores.length).toFixed(2);
    // convert average score from string to number using parseFloat()
    return parseFloat(averageScores);
  }
}

// let sumOfScores = this.scores.reduce(function (acc, score) {
//   return acc + score;
// }, 0);
// let averageScores = (acc / this.scores.length).toFixed(2);

/*
Bubba Bear mass 135 kg and test scores of 88, 85, and 90. 
Merry Maltese mass 1.5 kg and test scores of 93, 88, and 97. 
Glad Gator mass 225 kg and test scores of 75, 78, and 62.
*/
let bBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let mMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bBear);
console.log(mMaltese);
console.log(gGator);

console.log(bBear);
bBear.addScore(83);
console.log(bBear);
console.log(bBear.scores);

console.log(mMaltese.average());
console.log(typeof mMaltese.average());
console.log(mMaltese.averaging());
console.log(typeof mMaltese.averaging());

// //Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
// status() {
//     let appStat = '';
//     let aveScore = this.averageScores();
//     let appStatement = ``;
//     if (aveScore >= 90) {
//         appStat = 'Accepted'
//     } else if (aveScore >= 80 && aveScore < 90) {
//         appStat = 'Reserve'
//     } else if (aveScore >= 70 && aveScore < 80) {
//         appStat = 'Probationary'
//     } else if (aveScore >= 60 && aveScore < 70) {
//         appStat = 'Rejected'
//     } else {
//         appStat = 'Error'
//         // could instead use try/catch
//     }

// appStatement = `'${this.name} earned an average test score of ${aveScore}% and has a status of ${appStat}.'`
// return appStatement
// }
