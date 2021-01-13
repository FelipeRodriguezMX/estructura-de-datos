class Number {
    constructor(id, izquierdo, derecho) {
        this.id = id,
        this.derecho = null;
        this.izquierdo = null
    }
}

class Arbol {
    constructor() {
        this.raiz = null;
    }

    agregar(nuevo) {
        const newNumber = new Number(nuevo)
        (this.raiz == null) ? this.raiz = newNumber: this.checate(newNumber, this.raiz);
    }

    checate(nuevo, r){
        if (nuevo.id < r) 
            (r.izquierdo == null) ? r.izquierdo = nuevo : this.checate(nuevo, r.izquierdo);
        else if (nuevo.id > r)
            (r.derecho == null) ? r.derecho = nuevo : this.checate(nuevo, r.derecho);
        else 
            throw Error;
    }

    order(){
        if(this.raiz == null){
            console.log('raiz es null')
        }else{
            this.inOrder(this.raiz);
            this.postOrde(this.raiz);
            this.preOrder(this.raiz);
        }
    }

    inOrder(r){
        if (r.hizq!=null)            
            this.inOrder(r.izquierdo)
        console.log(r.id) 
        if(r.hder!=null)       
            this.inOrderRec(r.derecho);
    }
    postOrder(r){
        console.log(r.id) 
        if (r.hizq!=null)            
            this.inOrder(r.izquierdo)
        if(r.hder!=null)       
            this.inOrderRec(r.derecho);
    }
    preOrder(r){
        if (r.hizq!=null)            
            this.inOrder(r.izquierdo)
        if(r.hder!=null)       
            this.inOrderRec(r.derecho);
        console.log(r.id) 
    }
}

import {Arbol} from './arbol';

const arbol = new Arbol();

for (let i = 0; i < 20; i++) {
    arbol.agregar(Math.floor(Math.random() * 200) + 50);
}

arbol.order()

// export {Arbol};