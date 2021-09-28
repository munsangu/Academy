function Car() {
  this.a = " RX430D";
  this.move = function() {console.log("Move! move! move!")};
}

Car.prototype.move2 = function () {};
console.log(Car);  
/* 
ƒ Car() {
  this.a = " RX430D";
  this.move = function() {console.log("Move! move! move!")};
}*/
console.log(Car.prototype); // {move2: ƒ, constructor: ƒ}
console.log(Car.a); // undefined


// 함수에 선언된 멤버를 사용하려면 우선, 함수를 객체로 생성해야 함
console.group("new Car()", "start");
const car = new Car(); // new 연산자를 선언하면  Car 함수를 복사해서 새로운 prototype을 생성
console.log(car) // Car {a: ' RX430D', move: ƒ} 새롭게 생성된 객체의 prototype
car.move() // Move! move! move!
console.log(car.a);  //  RX430D
console.log(car.move); // ƒ () {console.log("Move! move! move!")}
car.move2();
console.log(car.__proto__); // {move2: ƒ, constructor: ƒ} 설계도가 되는 부모의  Car.prototype
console.groupEnd();