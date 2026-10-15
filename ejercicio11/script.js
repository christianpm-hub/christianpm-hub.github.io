function contarNumeros() {
    let numeros = [];

    for (let i = 0; i < 100; i++) {
        let num = Math.floor(Math.random() * 20) + 1;
        numeros.push(num);
    }

    let contador = 0;

    for (let i = 1; i <= 20; i++) {
        if (numeros.includes(i)) {
            contador++;
        }
    }

    console.log("Números distintos que han aparecido: " + contador);
}

contarNumeros();