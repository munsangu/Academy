const literal_obj = {
  a: "a",
  b: "b",
  callA: function( ) {return this.a + " call" }
}

literal_obj.callB = function( ) {return this.b + " call" }

console.log(literal_obj.callA());
console.log(literal_obj.callB());
const unbind_callA = literal_obj.callA;

console.log(unbind_callA);
console.log(unbind_callA.bind({a:"c"}));