// requireing programmer class
const Programmer = require('./programmer.js');

// define programmer class
class Team {
  constructor(project) {
    this.project = project;
    this.programmers = [];
  }

  // method to addprogrammer to array
  addProgrammer(name, position, age, language) {
    this.programmers.push(new Programmer(name, position, age, language));
  }

  // prints number of programmers
  teamCount() {
    console.log(this.programmers.length);
  }
}

// exporting team class
module.exports = Team;
