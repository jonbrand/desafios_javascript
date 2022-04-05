// Function Declaration

declarationTest();

function declarationTest() {
  console.log('Testando Function Declaration');
}

// Function Expression
// ***Neste caso a funcao nao executa por que a variavel sofre o hoisting
// antes de receber o valor da funcao, fazendo assim retornar o erro
// de que nao e uma funcao

declarationTest();

var declarationTest = function() {
  console.log('Testando Function Declaration');
}