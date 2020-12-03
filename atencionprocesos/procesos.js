const util = require('util');

class Tarea {
    constructor(tarea, numCiclos, siguiente){
        this.tarea = tarea;
        this.numCiclos = numCiclos
        this.siguiente = siguiente
    }
}

let Procesos = function(){
    let inicio = null;
    let ultimo = null
    let size = 0;
    let atendido = 0;
    let vacio = 0;

    function crear(tarea){
        let numCiclos = Math.floor(Math.random() * (15 - 3)) + 3;
        let newTarea = new Tarea(tarea, numCiclos, null);
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
        for (let i = 0; i < 100; i++) {
            let probabilidad = Math.floor(Math.random() * (100-1)+1) 
            if (inicio == null) {
                if (probabilidad < 39) {
                    crear(numTarea);
                }
            } else {
                if (probabilidad < 39) {
                    crear(numTarea);
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
                } else 
                    vacio ++;
            }     
            
        }
    }

    function buscar(aux){
        let actual = inicio;
        if (actual == aux) {
            return ultimo
        } else {
            while (actual.siguiente != aux && ultimo != aux) {
                inicio = inicio.siguiente;
            }
            return inicio;
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