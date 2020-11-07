function funcEdeX(x) {
    let eX = 1;
    for (let i = 1; i <= x; i++) {
        eX += (Math.pow(x,i)) / factorial(i) 
    }
    return eX;
}
function funcE(x) {
    let e = 1;
    for (let i = 1; i < x; i++) {
        e += 1 / factorial(i);        
    }
    return e;
}
function factorial(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total*= i
    }
    return total
}

let edex = funcEdeX(5);
let e = funcE(5);
console.log('resultad defuncion de e potencia de x:', edex);
console.log('resultad defuncion de e:', e);