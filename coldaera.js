// recibe parametro numElementos como tipo int
function coladera(numElements) {
    let numeros = [];
    for (let i = 1; i < numElements; i++) {
        // establece a 1 a todos los elementos del array al crearlo
        numeros[i] = 1;
    }
    
    for (let i = 2; i <= numElements; i++) {
        for (let j = i*2; j <= numElements; j+=i) {
            console.log(j);
            //establece a 0 todos los numeros que no son primos
            numeros[j] = 0;
        }
    }
    console.log('numeros primos:',numeros);
}

coladera(999);