// requiring fs
const fs = require('fs');

// read the file input
const lineReader = require('readline').createInterface({
  input: fs.createReadStream('members.txt')
});
// requiring team
const Team = require('./team.js');

// creating new team
const team = new Team('Website');

// runs after file is read, prints info
function process() {
  for (let i = 0; i < team.programmers.length; i += 1) {
    team.programmers[i].printInfo();
  }
}

// reads each line splits them into an array and calls add programmer function
lineReader
  .on('line', (line) => {
    const programmers = line.split(',');
    team.addProgrammer(
      programmers[0],
      programmers[1],
      programmers[2],
      programmers[3]
    );
  })
  // runs after done with file
  .on('close', process);
