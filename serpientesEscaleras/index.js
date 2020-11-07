class Dado{
    lanzar(){
         return Math.floor(Math.random() * 6) + 1;
    }
 }

class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.dado = new Dado();
        this.posicion = 0;
        this.serpiente = [
            {casilla: 16, reduce: 10},
            {casilla: 49, reduce: 38},
            {casilla: 46, reduce: 21},
            {casilla: 62, reduce: 43},
            {casilla: 64, reduce: 4},
            {casilla: 74, reduce: 21},
            {casilla: 95, reduce: 20},
            {casilla: 97, reduce: 17}
        ];
        this.escalera = [
            {casilla: 2, aumentar: 36},
            {casilla: 7, aumentar: 7},
            {casilla: 8, aumentar: 23},
            {casilla: 15, aumentar: 11},
            {casilla: 28, aumentar: 56},
            {casilla: 51, aumentar: 16},
            {casilla: 78, aumentar: 20},
            {casilla: 87, aumentar: 13},
        ]
    }

    avance(){
        this.posicion += this.dado.lanzar();
        for (let i = 0; i < this.escalera.length; i++) {
            if (this.escalera[i].casilla == this.posicion) {
                return this.posicion += this.escalera[i].aumentar;
            }
        }
        for (let i = 0; i < this.serpiente.length; i++) {
            if(this.serpiente[i].casilla == this.posicion) {
                return this.posicion -= this.serpiente[i].reduce;
            }
        }
        return this.posicion;
    }

    texto(){
        return this.nombre + ' pos '  + this.posicion;
    }
}

class Tablero{
    constructor(){
        this.j1 = new Jugador('j1');
        this.j2 = new Jugador('j2');
        this.j3 = new Jugador('j3');
        this.distancia = 100;
    }

    iniciar(){
        while(this.j1.posicion < 100 && this.j2.posicion < 100 && this.j3.posicion < 100){
            this.j1.avance();
            this.j2.avance();
            this.j3.avance();
            console.log(this.j1.texto() + '->'+ this.j2.texto() + '->' + this.j3.texto());
        }
        this.ganador();
        
    }
    ganador(){
        switch (true) {
            case this.j1.posicion >= this.distancia && this.j2.posicion >= this.distancia && this.j3.posicion >= this.distancia:
                console.log('empate');
                break;
            case this.j1.posicion >= this.distancia && this.j2.posicion >= this.distancia:
                console.log('j1 y j2 ganaron');
                break;
            case this.j3.posicion >= this.distancia && this.j2.posicion >= this.distancia:
                console.log('j2 y j3 ganaron');
                break;
            case this.j3.posicion >= this.distancia && this.j1.posicion >= this.distancia:
                console.log('j1 y j3 ganaron');
                break;
            case this.j1.posicion >= this.distancia:
                console.log('j1 gano');
                break;
            case this.j2.posicion >= this.distancia:
                console.log('j2 gano');
                break;
            case this.j3.posicion >= this.distancia:
                console.log('j3 gano');
                break;
            default:
                break;
        }
    }
}

var juego = new Tablero();
juego.iniciar();