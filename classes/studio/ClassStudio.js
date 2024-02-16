//Declare a class called CrewCandidate with a constructor that takes three parameters—
// name, mass, and scores.
// scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores = []) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }
  average() {
    let sum = 0;
    for (let score of this.scores) {
      sum += Number(score);
    }
    return (sum / this.scores.length).toFixed(2);
  }
}

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



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
status() {
    let appStat = '';
    let aveScore = this.averageScores();
    let appStatement = ``;
    if (aveScore >= 90) {
        appStat = 'Accepted'
    } else if (aveScore >= 80 && aveScore < 90) {
        appStat = 'Reserve'
    } else if (aveScore >= 70 && aveScore < 80) {
        appStat = 'Probationary'
    } else if (aveScore >= 60 && aveScore < 70) {
        appStat = 'Rejected'
    } else {
        appStat = 'Error'
        // could instead use try/catch
    }


appStatement = `'${this.name} earned an average test score of ${aveScore}% and has a status of ${appStat}.'`
return appStatement
}