// var - escopo
function nameReturn() {
  var aName = 'Jack';
  return aName;
}

console.log(aName);

// var - redecaracao

var aName = 'Jack';
var aName = 'Bob';

console.log(aName);

// var - hoisting

var aName;
console.log(aName);
console.log(name1)

var name1 = 'Jack';

// let = escopo
var aName = 'Jack';

if (1 + 1 === 2) {
  let aName = 'Tom';
}

console.log(aName);

// let = redeclaracao
let aName = 'Jack';
aName = 'Tom';

console.log(aName);

// let - hoisting
console.log(aName);

let aName = 'Jack';

//const - escopo
const aName = 'Jack'

if (1 + 1 === 2) {
  const aName = 'Tom';
}

console.log(aName);

// const - redeclaracao
const person = {
  name: 'Jack',
  age: 25
}

person.name = 'Tesla';

console.log(person);

// let - hoisting
console.log(aName);

const aName = 'Jack';