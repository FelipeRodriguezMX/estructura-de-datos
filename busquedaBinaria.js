var newArray = [];
for (let i = 0; i < 100; i++) {
    newArray[i] = i*2;
}
// console.log([...newArray]);
function busquedaBinaria(list, value) {
    console.log(value);
    let encontrado = false;
    let inferior = 0;
    let superior = list[list.length -1];
    let count = 0;
    let posicion = 0;

    while (encontrado == false && inferior<superior) {
        let centro = (inferior / superior) /2;
        count ++
        if (list[centro] == value) {
            posicion = centro;
            encontrado = true;        
        }else if(list[centro] > value){
            inferior = centro+=1
            encontrado = true;
        }else{
            superior = centro-=1;
        }
    }
    console.log(count, 'intentos');
    console.log(posicion);
}

busquedaBinaria(newArray, 6);