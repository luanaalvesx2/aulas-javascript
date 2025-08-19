'use strict';
/*Operadores LÓGICOS 
&& -> E            -> AND
|| -> OU           -> OR
!  -> NÃO/NEGAÇÃO  -> NOT */

//&& -> retorna TRUE se TODAS as condições forem VERDADEIRAS
console.log("Exempolo &&");
let idade = 20;
let temCarta = true;

if (idade >=18 && temCarta === true) {
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
