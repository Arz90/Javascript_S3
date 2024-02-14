//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p = document.createElement('p');

p.append(document.createTextNode('Soy dinámico'));

document.body.appendChild(p);
