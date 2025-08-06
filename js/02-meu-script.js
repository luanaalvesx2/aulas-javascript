// Habilitando o modo estrito
'use strict';

let teste = "Senac";
console.log(teste);

let userInterface = "Teste";
console.log(userInterface);






/* Exercícios */

// 1) Crie uma variável chamada "uc" e coloque nela o número da UC que estamos
let uc = 2;

// 2) Crie uma variável chamada "competencia" e coloque nela uma frase que represente o que estamos estudando nesta UC.
let competencia = "Front-End com JavaScript";

// 3) Monte e mostre uma frase no console exibindo a UC e a competência. Exemplo: Estamos na UC2 estudando Front-End com JavaScript.
console.log(`Estamos na UC${uc} estudando ${competencia}.`);

// ERRADO!
//console.log("Gosto "muito" de paçoca!");

// CORRETO! Aspas simples como comando, e duplas como texto
console.log('Gosto "muito" de paçoca!');

// CORRETO! Aspas duplas como comando, e simples como texto
console.log("Gosto 'muito' de paçoca!");

// CORRETO! Escapando as aspas como texto
console.log("Gosto \"muito\" de paçoca!");