'use strict'

/* Exemplo 01 */

//procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 = document.querySelector("#exemplo1");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);

/*Para selecionar varios elementos, use o querySelectorAll. O resultadoé uma especie de array de elementos (NodeList). */
const paragrafo = document.querySelectorAll("p");
console.log(paragrafo);

