# Desafio Javascript
### Qual e a diferenca entre utilizar 'var', 'let' e 'const'?

R: 
var = Escopo - Nao extrapola o limite imposto por uma funcao 'Function Scope'; 
Redeclaracao - Ela permite ser redeclarada diversas vezes;
Hosting - Ela permite que todo tipo var seja elevado para qualquer escopo;
_sempre declare variaveis 'var' no topo do codigo_

let = Escopo - Ele se limite a qualquer tipo de bloco 'Block Scope';
Redeclaracao - Ele permite redeclaracao desde que seja atribuido um novo valor, e nao uma nova declaracao da variavel;
Hoisting - Ele tambem permite que a variavel seja elevada, mas ele nao comeca com valor undefined

const = Escopo - Ela se limite a qualquer tipo de bloco 'Block Scope';
Redeclaracao - Nao permite redeclaracao e nao pode ser reatribuido;
Hoisting - Ela tambem permite que a variavel seja elevada, mas ela nao e inicializada


**Pontos importantes ao se falar de variaveis em Javascript: Escopo, Redeclaracao e Hoisting