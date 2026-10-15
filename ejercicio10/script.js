function numeroMayor(array) {
    let mayor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }

    return mayor;
}

let numeros = [4, 12, 7, 25, 3, 18];

console.log(numeroMayor(numeros));