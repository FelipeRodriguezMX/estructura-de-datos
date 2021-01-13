class Ordenamiento{
    constructor(){
        this.vector1 = [];
        this.vector2 = [];
        this.newArray = [];
    }

    llenar(){
        this.vector1 = this.numerosRandom(20,30);
        this.vector2 = this.numerosRandom(20,30);
        this.vector1.sort(function(a,b) {
            return a-b;
        });
        this.vector2.sort(function(a,b) {
            return a-b;
        });
        let concatArray = this.vector1.concat(this.vector2);
        this.bubbleSort(concatArray);
    }

    numerosRandom(length, max){
        return Array(length).fill().map(() => Math.round(Math.random() * max))
    }

    bubbleSort(vector){
        let flag = true;
        let aux;
        while (flag == true) {
            flag = false;
            for (let i = 0; i < vector.length-1; i++) {
                for (let y = 0; y < vector.length-1; y++) {
                    if (vector[y] > vector[y+1]) {
                        aux = vector[y];
                        vector[y] = vector[y+1];
                        vector[y+1] = aux;        
                    }
                }
            }
        }
        this.newArray = vector
    }

    print(){
        console.log('array1', this.vector1);
        console.log('array2', this.vector2);
        console.log('concat array', this.newArray);
    }
}


const order = new Ordenamiento();
order.llenar();
order.print()


