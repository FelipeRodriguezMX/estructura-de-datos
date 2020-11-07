class Vehiculo{
    constructor(placa, marca){
        this.placa = placa;
        this.marca = marca;
        this.sig = null;
    }
}

class Lote{
    constructor(){
        this.inicio = null;
    }
    agregar(nuevo){
        if (this.inicio == null) {
            this.inicio = nuevo;
        }else{
            this.agregate(nuevo, this.inicio);
        }
    }
    agregate(nuevo, node){
        if (node.sig == null) {
            node.sig = nuevo;
        } else {
            this.agregate(nuevo, node.sig);
        }
    }
    recorrer(){
        let r = '';
        let aux = this.inicio;
        while (aux != null) {
            r += aux.placa + ' ';
            aux = aux.sig;
        }
        return r;
    }
}

let grupo = new Lote();
let v = new Vehiculo('A','A');
grupo.agregar(v);
v = new Vehiculo('B','B');
grupo.agregar(v);
v = new Vehiculo('C','C');
grupo.agregar(v);
v = new Vehiculo('D','D');
grupo.agregar(v);
console.log(grupo.recorrer());