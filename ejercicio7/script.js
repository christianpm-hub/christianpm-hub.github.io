function contarVocales(palabra) {
    let vocales = "aeiou";
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i].toLowerCase())) {
            contador++;
        }
    }

    return contador;
}

let palabra = prompt("Introduce una palabra:");

console.log("La palabra tiene " + contarVocales(palabra) + " vocales.");