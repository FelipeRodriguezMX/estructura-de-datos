const util = require('util');

class Tarea {
    constructor(tarea){
        this.tarea = tarea;
        this.numCiclos = Math.floor(Math.random() * (15 - 3)) + 3
        this.siguiente = null
    }
}

let Procesos = function(){
    let inicio = null;
    let ultimo = null
    let size = 0;
    let atendido = 0;
    let vacio = 0;

    function crear(newTarea){
        if (inicio == null) {
            inicio = newTarea;
            ultimo = newTarea;
            inicio.siguiente = newTarea
        } else {
            newTarea.siguiente = inicio;
            ultimo.siguiente = newTarea;
            ultimo = newTarea;
        }
    }
    function iniciar(){
        let numTarea = 1;
        for (let i = 0; i < 300; i++) {
            let probabilidad = Math.floor(Math.random() * (100-1)+1) 
            if (inicio == null) {
                vacio ++;
            } 
            if (probabilidad < 39) {
                let newTarea = new Tarea(numTarea);
                crear(newTarea);
                numTarea++;
                size++; 
            }
            var aux = inicio;
            if (aux != null) {
                if (aux.numCiclos == 0) {
                    eliminar(aux);
                    size--;
                    atendido++; 
                }
                aux.numCiclos--;
                aux = aux.siguiente;
            }    
        }
    }

    function buscar(aux){
        let actual = inicio;
        if (actual == aux) {
            return ultimo
        } else {
            while (actual.siguiente != aux && ultimo != aux) {
                actual = inicio.siguiente;
            }
            return actual;
        }
    }

    function eliminar(aux) {
        let anteriror = buscar(aux);
        if (aux == inicio && aux == ultimo) {
            inicio = null;
            ultimo = null;
        } else if (aux == inicio){
            inicio = aux.siguiente;
            ultimo.siguiente = inicio;
        } else if (aux == ultimo){
            anteriror.siguiente = inicio;
            ultimo = anteriror;
        } else
            anteriror.siguiente = aux.siguiente
    }

    function imprimir(){
        console.log(
            `
            ciclos vacios ${vacio},
            procesos atendidos ${atendido},
            procesos pendientes ${size}
            `
        );
        console.log(util.inspect(inicio,false, null, true));
    }

    return {iniciar:iniciar, imprimir:imprimir}
}



module.exports = Procesos;
