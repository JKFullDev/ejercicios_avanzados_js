// Ejercicio 6

// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

// Retorna el array resultante.

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, index1, index2) {
    const newArray = [...array];

    let aux = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = aux;
    return newArray;
}
console.log(fantasticFour);
console.log(swap(fantasticFour, 1, 2));
console.log(swap(fantasticFour, 0, 3));