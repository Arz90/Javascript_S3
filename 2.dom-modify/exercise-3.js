//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div = document.createElement('div');

for (let i = 0; i < 6; i++){
    const p = document.createElement('p');
    p.textContent = 'Creamos seis p dentro de un div';
    div.appendChild(p);
}

document.body.appendChild(div);