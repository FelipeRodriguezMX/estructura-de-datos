const Parse = require("./parse.js");
require("util").inspect.defaultOptions.depth = null

class Node {
    constructor(padre) {
        this.padre = padre;
        this.izquierda = null;
        this.derecha = null;
    }
}

class Arbol {
    constructor() {
        this.raiz = [];
        this.parse = new Parse();
    }
    getExpression(expression) {
        if (expression == null)
            console.log('no has insertado un expresion arimetica');
        else {
            let pila = this.parse.polacaInversa(expression);
            this.crear(pila)
        }

    }

    /**
     * @param {string} data
     *crea estructura de arbol en el array de raiz
     */
    crear(data){
        data = data.split(' ');
        const operadores = '+-*/()^'
        for (let i = 0; i < data.length; i++) {
            if (!operadores.includes(data[i])) {
                let node = new Node(data[i]);
                this.raiz.push(node);
            }else{
                let node = new Node(data[i]);
                let izquierda = this.raiz.pop();
                let derecha = this.raiz.pop();

                node.derecha = izquierda;
                node.izquierda = derecha;

                this.raiz.push(node);
            }
        }
    }
    order(){
        if (this.raiz.length ==0) {
            return 0
        }else{
            let newArray = [...this.raiz],
                newArray2 = [...this.raiz], 
                newArray3 = [...this.raiz];
            console.log('inorder');
            this.inOrder(newArray.pop());
            console.log('preorder');
            this.preOrder(newArray2.pop());
            console.log('postOrder');
            this.postOrder(newArray3.pop());
        }
    }

    inOrder(r){
        if (r.izquierda != null)            
            this.inOrder(r.izquierda);
        console.log(r.padre); 
        if(r.derecha != null)       
            this.inOrder(r.derecha);
    }

    preOrder(r){
        console.log(r.padre); 
        if (r.izquierda != null)            
            this.preOrder(r.izquierda);
        if(r.derecha != null)       
            this.preOrder(r.derecha);
    }

    postOrder(r){
        if (r.izquierda!=null)            
            this.preOrder(r.izquierda)
        if(r.derecha!=null)       
            this.preOrder(r.derecha);
        console.log(r.padre) 
    }

    print(){
        // console.log(this.raiz);
    }
}

module.exports = Arbol