function invertir(cadena) {
    return cadena.split("").reverse().join("");
}

let texto = prompt("Introduce una palabra:");
alert(invertir(texto));

