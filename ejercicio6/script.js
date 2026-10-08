function comprobar() {
    let numero = Number(document.getElementById("numero").value);

    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

