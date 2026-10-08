let persona = {
    nombre: "Carlos",
    edad: 20,
    altura: 1.75,
    esEstudiante: true,
    telefono: null,
    direccion: undefined,

    // Array
    aficiones: ["fútbol", "videojuegos", "música"],

    // Otro objeto
    direccionCasa: {
        calle: "Calle Mayor",
        ciudad: "Granada",
        codigoPostal: 18001
    }
};

// Mostrar el objeto completo
console.log(persona);

// Mostrar el contenido en forma de tabla
console.table(persona);