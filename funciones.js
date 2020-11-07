function llenar(n) {
    let numbers = [];
    for (let i = 0; i < n +1; i++) {
        numbers[i] = i*2;
    }
    return numbers;
}

function rotarIzquierda(numbers) {
    let temp = numbers[0];
    for (let j = 0; j < numbers.length-1; j++) {
        numbers[j] = numbers[j+1]
        numbers[j+1] = temp;
    }       
    return numbers;
}

function rotarDerecha(numbers) {
    var temp = numbers[numbers.length-1];
    for (let i = numbers.length -1; i > 0; i--) {
        numbers[i] = numbers[i-1];
    }
    numbers[0] = temp;
    return numbers;
}
    
function invertir(numbers) {
    for (let i = 0; i < numbers.length/2; i++) {
        let temp = numbers[i]
        let ladoOpuesto = numbers.length-i-1;
        numbers[i] = numbers[ladoOpuesto];
        numbers[ladoOpuesto] = temp;
    }
    return numbers;
}

var numbersOriginal =  llenar(1);
var rIzquierda = rotarIzquierda([...numbersOriginal]);
var rDerecha = rotarDerecha([...numbersOriginal]);
var invertir = invertir([...numbersOriginal]);

console.log('array original llenado con n numeros ->', numbersOriginal);
console.log('array rotado hacia la izquierda ->', rIzquierda);
console.log('array rotado hacia la derecha ->', rDerecha);
console.log('array invertido ->', invertir);