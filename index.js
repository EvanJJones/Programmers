// requiring fs
const fs = require('fs');
const inquirer = require('inquirer');

// read the file input
const lineReader = require('readline').createInterface({
  input: fs.createReadStream('members.txt'),
});
// requiring team
const Team = require('./team.js');

// creating new team
const team = new Team('Website');

// array that will eventually hold names and Exit for inquirer
const newProgrammers = [];

// function that asks who to print
async function question() {
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'whoPrint',
        message: 'Which info would you like to print?',
        choices: newProgrammers,
      },
    ])
    .then((answers) => {
      // runs if exit is selected, exits program
      if (answers.whoPrint === 'Exit') {
        console.log('end');
      } else {
        // runs if not exit is selected, matches name from array to object and runs print function
        for (let i = 0; i < team.programmers.length; i += 1) {
          if (answers.whoPrint === team.programmers[i].name) {
            team.programmers[i].printInfo();
            break;
          }
        }
        question();
      }
    });
}
// runs after file is read, creates proper array with names for inquirer and calls inquirer funciton
function process() {
  for (let i = 0; i < team.programmers.length; i += 1) {
    newProgrammers.push(team.programmers[i].name);
  }
  newProgrammers.push('Exit');
  question();
}

// reads each line splits them into an array and calls add programmer function
lineReader
  .on('line', (line) => {
    const programmers = line.split(',');
    team.addProgrammer(programmers[0], programmers[1], programmers[2], programmers[3]);
  })
  // runs after done with file
  .on('close', process);

// will ask which proggrammer to print continuously until the exit option is pushed
