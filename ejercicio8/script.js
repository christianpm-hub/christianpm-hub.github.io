function azar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = parseInt(prompt("Introduce el valor mínimo:"));
let max = parseInt(prompt("Introduce el valor máximo:"));

let resultado = azar(min, max);

alert("El número aleatorio es: " + resultado);

