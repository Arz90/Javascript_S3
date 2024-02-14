//Dado el siguiente html usa querySelector para mostrar por consola el tercer personaje con el atributo data-function="testMe".

const test = document.querySelector('[data-function="testMe"]:nth-child(3)');

// entramos en el atributo que se denomine [''] así y  con :nth-child(3) entramos en la tercera posición de los hijos donde se encuentra span.

console.log(test);
