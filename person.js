class Person {
  constructor(name) {
    this.name = name;
  
  }

  sayMyName() {
    console.log(`My name is ${this.name}`);
  }
}

module.exports = {
  Person,
};
