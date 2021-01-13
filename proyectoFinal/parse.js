const Stack = require('./stack.js');
class Order {
    constructor(expression) {
        this.pila = new Stack(expression.length);
        this.salida = new Stack(expression.length);
    }
    postOrder(expression) {
        let inOrder = expression.split('').reverse();
        console.log(inOrder);
        let input = inOrder;

        while (input.length > 0) {
            switch (key) {
                case value:
                    
                    break;
            
                default:
                    break;
            }
        }

        // expression = expression + ')';
        // this.pila.push('(');
        
        // for (let i = 0; i < expression.length; i++) {
        //     let character = expression.charAt(i)
        //     switch (character) {
        //         case '(':
        //             this.pila.push(character);
        //             break;
        //         case ')':
        //             while (this.pila.peek() != '(') {
        //                 this.salida.push(this.pila.pop())
        //             }
        //             this.pila.pop();
        //             break
        //         case '*':
        //         case '+':
        //         case '-':
        //         case '/':
        //         case '^':
        //             while (this.jerarquiaOperadores(character) <= this.jerarquiaOperadores(this.pila.peek())) {
        //                 this.salida.push(this.pila.pop());
        //             }
        //             this.pila.push(character);
        //             break;
        //         default:
        //             this.salida.push(character);
        //             break;
        //     }
        // }
        // return this.salida.stackData()
    }

    jerarquia(operador) {
        let jerarquia = 0;
        if (this.operadores[operador]) {
            jerarquia = this.operadores[operador];
        }
        return jerarquia;
        // if (operador == ')') {
        //     jerarquia = 5;
        // }
        // if (operador == '^') {
        //     jerarquia = 4;
        // }

        // if (operador == '*' || operador == '/') {
        //     jerarquia = 3;
        // }

        // if (operador == '+' || operador == '-') {
        //     jerarquia = 2;
        // }

        // if (operador == '(') {
        //     jerarquia = 1;
        // }
        // return jerarquia;
    }
}

module.exports = Order;