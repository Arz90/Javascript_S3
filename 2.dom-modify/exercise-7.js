//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const eliminame = document.querySelectorAll('.fn-remove-me');

for (let exit of eliminame){
    exit.remove();
}