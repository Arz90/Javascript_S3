//Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

 
 const inputElement = document.getElementById('Input');

 
 inputElement.addEventListener('input', function() {  
    console.log("Valor del input:", inputElement.value);
});

