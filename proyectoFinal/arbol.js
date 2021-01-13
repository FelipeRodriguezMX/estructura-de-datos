const Order = require("./parse.js");
const Stack = require("./stack.js");

class Node {
    constructor(padre,izquierdo, derecho) {
        this.padre = padre,
        this.izquierdo = izquierdo;
        this.derecho = derecho;
    }
}

class Arbol {
    constructor() {
        this.raiz = null;
    }

    getExpression(expression) {
        if (expression == null)
            console.log('no has insertado un expresion arimetica');
        else {
            this.order = new Order(expression);
            let data = this.order.postOrder(expression);
            console.log(data);
        }

    }
    // crearNode(expression) {
    //     console.log('original',expression);
    //     for (let i = 0; i < expression.length; i++) {
    //         if (expression[i] == '^') {
    //             let newNode = new Node(expression[i],expression[i-1],expression[i+1]);
    //             this.raiz = newNode;
    //         }
    //     }
    //     console.log(this.raiz);
    // }
}

module.exports = Arbol