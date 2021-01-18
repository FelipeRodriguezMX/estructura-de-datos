class Parse {
    constructor() {
        this.pila = [];
        this.salida = [];
    }
    arreglarExpression(expression) {
        const operadores = "+-*/()^";
        let salida = "";
        expression = "(" + expression + ")";
        for (let i in expression)
            (operadores.includes(expression.charAt(i))) ? salida += " " + expression.charAt(i) + " ": salida += expression.charAt(i);
        return salida.trim().split(' ');
    }
    polacaInversa(expression) {
        expression = this.arreglarExpression(expression).reverse();
        let input = expression;
            while (input.length >0) {
            switch (this.jerarquia(input[input.length - 1])) {
                case 1:
                    this.pila.push(input.pop());
                    break;
                case 2:
                    while (this.pila[this.pila.length-1] != '(') this.salida.push(this.pila.pop());
                    this.pila.pop();
                    input.pop();
                    break;
                case 3:
                case 4:
                case 5:
                    while (this.jerarquia(this.pila[this.pila.length-1]) >= this.jerarquia(input[input.length-1])) this.salida.push(this.pila.pop());
                    this.pila.push(input.pop());
                    break;
                default:
                    this.salida.push(input.pop());
                    break;
            }
        }
       return this.salida.join(" ").replace(/\s{2,}/g, ' ')
    }
    jerarquia(operador) {
        const operadores = {
            '^': 5,
            '*': 4,
            '/': 4,
            '+': 3,
            '-': 3,
            ')': 2,
            '(': 1,
        }
        if (operadores[operador]) {
            return operadores[operador];
        }
        return 10;
    }
}

module.exports = Parse;