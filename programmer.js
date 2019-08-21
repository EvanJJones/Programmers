// class that will hold programmer information
class Programmer {
  constructor(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
  }

  // method to print information from programmers
  printInfo() {
    console.log(`
Name: ${this.name}
Position: ${this.position}
Age: ${this.age}
Language: ${this.language}
--------------------------`);
  }
}
// exporting class
module.exports = Programmer;
