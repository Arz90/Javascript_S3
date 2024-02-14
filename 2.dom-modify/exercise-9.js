//Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here



const elementos = document.querySelectorAll('.fn-insert-here');


for (let añadimos of elementos){
    const newP = document.createElement('p');
    newP.appendChild(document.createTextNode('Voy dentro!'));
    añadimos.appendChild(newP);

}








