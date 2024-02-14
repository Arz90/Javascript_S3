//Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

function focusClick(event){ // se crea la función para el boton
    console.log('Se ha hecho click', event);
}

document.getElementById('Input').addEventListener('focus',  focusClick);