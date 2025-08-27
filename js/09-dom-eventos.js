'use strict'

/* Exemplo 01 */

//procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 = document.querySelector("#exemplo1");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

/*Para selecionar varios elementos, use o querySelectorAll. O resultadoé uma especie de array de elementos (NodeList). */
const paragrafo = document.querySelectorAll("p");
console.log(paragrafo);

/* Sobre eventos
um evento é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa/site/aplicações .

o JavaScript suporta centenas de tipos de eventos. Exemplo: clique do mouse, pressionar teclas, tocar tela, rolagem da pagina, caregamento de página e etec.  */

// Exemplo detectando eventos

exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "Opa, vento funcinou!";

    /* adiciona a classe em destaque */
    mensagem01.classList.add("destaque");
});

/* ao clicar 2x, retira o texto de paragrafo de mensagem */
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = "";

    /* remove a classe em destaque */
    mensagem01.classList.remove("destaque")
});


/*  Exercícios
 
1) Crie uma constante nova e selecione o h1 da sua página

2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.

3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão). 
*/

const exercicio01 = document.querySelector ("#exercicio");
const referencias = document.querySelector("#referencias");
const tituloOriginal = exercicio01.textContent;

exercicio01.addEventListener("mouseover", function(){
    exercicio01.textContent = "Praticando Eventos!";
    exercicio01.style.textAlign = "center"; // Centraliza o texto
    });

referencias.addEventListener("click", function(){
    exercicio01.textContent = tituloOriginal;
    exercicio01.style.textAlign = "left";
});

