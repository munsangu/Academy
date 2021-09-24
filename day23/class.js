function Car() {
  let name = "Lexus"
  this.carName = name;
}

console.log(Car);
console.log(Car.prototype);
console.log(new Car());
console.log(Object.create(Car));

function Person() {
  this.firstName = "Stark"
  this.callName = function () {
    console.log(`Hello ${this.firstName}`);
  }
}

Person.callName2  = function( ) {
  console.log(`Hello ${this.firstName}`)
}
Person.callName2();

let callName2F = Person.callName2.bind(new Person());
callName2F();
