class Pasos{
    pasos(){
        return Math.random() * 100;
    }
}

class  Animal{
    constructor(animal){
        this.animal = animal;
        this.pasos = new Pasos();
        this.posicion = 0;
    }
    avanceTortuga(){
        this.avance = this.pasos.pasos();
        if (this.avance <= 2) {
           return this.posicion -= 6;
        } else if(this.avance <= 5) {
            return this.posicion ++;
        }else{
            return this.posicion += 3;
        }
    }
    avanceLiebre(){
        this.avance = this.pasos.pasos();
        if (this.avance <= 10) {
            this.posicion -=12 ; 
        }else if(this.posicion <= 2.5){
            this.posicion -=2
        }else if(this.posicion <= 4.5) {
            this.posicion ;
        }else if(this.posicion <= 6.5) {
            this.posicion += 9;
        }else{
            this.posicion ++
        }
    }
    texto(){
        return this.animal + ' pos '  + this.posicion;
    }
}

class Carrera{
    constructor(){
        this.tortuga = new Animal('Tortuga');
        this.liebre = new Animal('Liebre')
        this.distancia = 90;
    }
    iniciar(){
        while (this.tortuga.posicion < 90 && this.liebre.posicion < 90) {
            this.tortuga.avanceTortuga();
            this.liebre.avanceLiebre();
            console.log(this.tortuga.texto() +'-->'+ this.liebre.texto());
        }
        if (this.tortuga.posicion >= this.distancia && this.liebre.posicion >= this.distancia) {
            console.log('empate');
        }else if (this.tortuga.posicion >= this.distancia) {
            console.log('tortuga gano');
        }else{
            console.log('liebre gano');
        }
    }
}

var test = new Carrera();
test.iniciar();
