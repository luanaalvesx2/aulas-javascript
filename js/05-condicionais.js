"use strict";

/*Comandos Condicionais mais comuns: 
if   -> SE
else -> SENÃO 
*/

console.log("Exemplo 1");

let numero = 50;

/*Se o numero for maior ou igual a 10
condicional simples(usa apenas o if)*/
if (numero >= 10) {
    console.log("Se você está vendo essa mensagem é porque a condição e VERDADEIRA!");
}

console.log("\nExemplo 2");

let aluno = "Ozzy";
let idade = 30;

/*Lógica: verificar se o aluno é maior ou menor de idade. */
// Condicional COMPOSTA (if/else)
if (idade < 18) {
    console.log("Você é menor de idade!");

} else {
    console.log("Você é maior de idade!");

}

//Exercício Condicional
console.log("\nExercício Condicional");

//1. Crie duas variáveis conforme a seguir:
// - Nota 1 (contendo um valor de 0 a 10)
let nota1 = 5
//- Nota 2 (contendo outro valor de 0 a 10)
let nota2 = 9
//2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas.
let media = (nota1 + nota2) / 2
//DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.

//3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
//Caso contrário, mostre "reprovado".

if (media >= 7) {
    console.log("Você está Aprovado!");
} else {
    console.log("Você está Reprovado!");
}


