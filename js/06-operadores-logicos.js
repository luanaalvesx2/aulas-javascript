'use strict';
/*Operadores LÓGICOS 
&& -> E            -> AND
|| -> OU           -> OR
!  -> NÃO/NEGAÇÃO  -> NOT */

//&& -> retorna TRUE se TODAS as condições forem VERDADEIRAS
console.log("Exempolo &&");
let idade = 20;
let temCarta = true;

//if (idade >=18 && temCarta=== true) { comparação explicita
if (idade >= 18 && temCarta === true) { //comparção implicita
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

/* sobre duplo e triplo sinal de igual 
Ao usar o == a comparação somente de VALOR, ou seja, NÃO IMPORTA o tipo de dados (string, number, etc)

- Ao usar === a comparação é do VALOR E DO TIPO DE DADO, ou seja, importa tudo. */
let a = 10;
let b = '10'; /*passa a se tornar texto e não e considerado com === */
//let resultadoComparação = a === b; // TRUE
let resultadoComparacao = a === b; //FALSE
console.log(resultadoComparacao);
/*valor ==, valor e dados === */

console.log("\nExemplo ||");
//|| -> retorna Verdadeiro se pelo menos uma das condições for Verdadeira
let feriado = true;
let fimDeSemana = false;

//if (feriado === true || fimDeSemana === true) {
if (feriado || fimDeSemana) {
    console.log("Não tem aula!");
} else {
    console.log("Tem aula!");
}

console.log("\nExemplo !");
// ! -> inverter a lógica. Oque é TRUE, vira FALSE. O que é FALSE, vira TRUE.

//Não está vigorando (false)
let blackFriday = false;

/* Aqui, ao usar ! (negação), verificamos se a variável não e TRUE. ou seja, invertemos a lógica. */
//if (blackFriday===false) é a mesma coisa
if (!blackFriday) { 
    console.log("Preços normais...");
}
else{
    console.log("Preços com desconto...");
}

