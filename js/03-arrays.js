'use strict';

// Declarando um array (vetor)
let vocalistas = ["Ozzy", "Dio", "Lemmy", "David Gilmour"];

// Se quisermos visualizar a estrutura do array inteiro:
// console.log(vocalistas);

// Acessando um determinando elemento através do índice
console.log(vocalistas[0]);

// O David Gilmour está em turnê tocando Pink Floyd
console.log(`O ${vocalistas[3]} está em turnê tocando Pink Floyd`);


// Relembrando como criar/usar arrays(vetor)//
//No JS você pode colocar qualquer coisa em um Array//
let seila = 6;
const coisas = [10, "Senac", "<h2>Oie<h2>", seila, 15.88];
console.log(coisas[1]);
console.log(coisas[4]);

/* Exercícios (FAÇA AQUI MESMO!) */

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas, músicas, livros, comida... sei lá, inventa!)

let livros = ["Trono de vidro", "Os sete marios de Evelyn Hugo", "Era uma vez um coração partido", "Estilhaça-me", "A balada dos felizes para nunca", "Corte de espinhos e rosas","corte de asas e ruinas"];

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.

console.log (livros[1]);
console.log (livros[4]);
console.log (livros[6]);

console.log (`${livros [1]},${livros [4]} e ${livros [6]}  Todos contam com protagonistas fortes`);

/* Array como MATRIZ DE 2 DIMENSÕES*/
const tecnologias = [
    ["HTML", "CSS", "JAVASCRIPT"],
    ["Figma", "Photoshop"],
    ["PHP", "NODE.js", "SQL", "Express"]
];

//console.log (tecnologias);

console.log(tecnologias[0][2]); //JAVASCRIPT
console.log(tecnologias[1][0]); //Figma
console.log(tecnologias[2][3]); //Express





