// function gradeLabs(labs) {
//   for (let i=0; i < labs.length; i++) {
//     let lab = labs[i];
//     let result = lab.runLab(3);
//     console.log(`${lab.student} code worked: ${result === 27}`);
//   }
// }


// function gradeLabs takes array of lab objects as parameter
function gradeLabs(labs) {
  // for loop each lab in the array
  for (let i = 0; i < labs.length; i++) {

    // retrieve lab from labs array
    let lab = labs[i];
    
    // 'try' block attempt run lab
    try {
      // call runLab method of lab object with parameter 3, store the result
      let result = lab.runLab(3);
      
      // output if lab's code worked based on result
      console.log(`${lab.student} code worked: ${result === 27}`);
    } 

    // 'catch' block to handle any errors 'e' occuring in execution
    catch (e) {
      // result indicates error thrown
      result = "Error thrown";
      
      // output error message with type and message of error
      console.log(`${lab.student} code encountered an error:\n type ${e.type} message ${e.message}, `);
    } 
    // 'finally' block run code regardless of whether an error occurred
    finally {
      // output message indicating this code ran
      console.log('this actually ran\n');
    }
  }
}



let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2);
