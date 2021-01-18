let Arbol = require('./arbol');
let arbol = new Arbol();

arbol.getExpression('(X*Y)/((A+B)*C)');
arbol.print()
console.log('///////////////');
arbol.order();