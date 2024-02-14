//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];


const div = document.createElement('div');

const ul = document.createElement('ul');

div.appendChild(ul); // se adjunta el elemento ul al div

for(let country of countries){
    const li = document.createElement('li');
    li.textContent = country;
    ul.appendChild(li);
};

document.body.appendChild(div);




