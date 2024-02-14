//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

function handleClick(event){ // se crea la función para el boton
    console.log('Se ha dado click', event);
}

document.getElementById('btnToClick').addEventListener('click',  handleClick);



