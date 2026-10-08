// Declaramos un array vacío
let numeros = [];

// Rellenamos el array con 100 números aleatorios entre 1 y 100
for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

// Mostramos todos los números
console.table(numeros);

// Filtramos los números entre 20 y 50
let filtrados = numeros.filter(numero => numero >= 20 && numero <= 50);

// Mostramos los números filtrados
console.table(filtrados);