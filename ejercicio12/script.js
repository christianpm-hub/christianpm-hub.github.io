function filtrarPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(filtrarPares(numeros));

