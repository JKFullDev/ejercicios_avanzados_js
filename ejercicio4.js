/*Ejercicio 4

1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

Haz varios ejemplos y compruébalos.*/

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];

//4.1
function findArrayIndex(array, text) {
    //Tu codigo
    for (const [index, value] of array.entries()) {
        // Comparamos el valor del array con el texto proporcionado
        if (value === text) {
            return index;
            console.log(`${text} está en la posición ${index} del array`);

        }
    }
    return `${text} no está en el array`; // Devolvemos -1 si no se encuentra el texto (convención común en búsquedas)
}

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Yoda"));
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));


/*2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

//4.2
function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index > 0) {
        mainCharacters.splice(index, 1);
    }
    else {
        console.log(`No esta en el array`);
    }
}

console.log(mainCharacters);

removeItem(mainCharacters, "Rey");

console.log(mainCharacters);

