//Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const div = document.querySelector('[data-function="printHere"]');

const ul = document.createElement('ul');

div.appendChild(ul);

for(let car of cars){
    const li = document.createElement('li');
    li.textContent = car;
    ul.appendChild(li);
};

document.body.appendChild(div);


 
