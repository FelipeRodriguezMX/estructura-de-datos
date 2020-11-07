class Dado{
   lanzar(){
        return Math.floor(Math.random() * 6) + 1;
   }
}

class Corredor{
    constructor(nombre){
        this.nombre = nombre;
        this.dado = new Dado();
        this.posicion = 0;
    }
    correr(){
        let cara = this.dado.lanzar();
        if (cara==1){
            this.posicion +=3;
        }else if (cara<=3){
            this.posicion ++;
        }else{
            this.posicion +=2;
        }
    }
    texto(){
        return this.nombre + ' pos '  + this.posicion;
     }
}

class  Carrera{
    constructor(){
        this.c1 = new Corredor('c1');
        this.c2 = new Corredor('c2');
        this.distancia = 100;
    }
    iniciar(){
        while(this.c1.posicion < 100 && this.c2.posicion < 100){
            this.c1.correr();
            this.c2.correr();
            console.log(this.c1.texto() + '->'+ this.c2.texto());
        }
        if(this.c1>=this.distancia && this.c2>=100) 
            console.log('Empate');
        else if(this.c1>=100) 
            console.log('c1 Ganó');
        else 
            console.log('c2 ganó');
        }
}

var test = new Carrera();
test.iniciar();