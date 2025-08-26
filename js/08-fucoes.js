'use strict'

/* Sobre Funções
Funções são blocos de código reponsáveis por executar determinadas tarefas. Para utilizar estes bloxcos /funções, é necessário "chamar/invocar" a função desejada através do seu nome.

Vantagens ao usar funções
-Reutilização de código
-Organizaçãode código-fonte, permitindo a separação de diferentes lógicas e responsabilidades
-Performace melhor 
-maior facilidade para manutenções 

No JavaScript, existem várias maneiras de criar uma função anônima, função nomeada/declarada e arrow function*/

console.log("Exemplo 1: função anônima");

const exemplo1 = function(){
    //corpo da função: ação que a função vai fazer
    console.log("Olá Função Anônima!");
}; /*nesse exemplo não pode chamar a função antes de declarar*/

//Chamando/invocando a função
exemplo1();

console.log("\nExemplo 2 : Função Nomeada/Declarada");
function exemplo2(){
    console.log("Está e uma função nomeada");
} /*não tem necessidade de ;, neste caso pode chamar a função antes de declarar*/
exemplo2();

console.log("\nExemplo 3: Arrow Function (Função Flecha/Seta)");

/*Sintaxe potencialmente mais simples para funções no JavaScript */
const exemplo3 = () => {
    console.log("Sintaxe Arrow Fuction!");
};

exemplo3();

/* obs: funções (em qualquer sintaxe) também podem trabalhar com parâmentros/argumentos.

Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe valores/dados através de parâmetros/argumentos entre os parênteses.

Geralmente, ao terminar o processamento de dados, a função "retorna" para fora um resultado. */

console.log("\nExemplo 4: função de parâmetro opcional");

function saudacao( nome = "Visitante"){
    console.log("Olá, "+nome);
}

saudacao("Luana");
saudacao("Liz");
saudacao("Luan");
saudacao(); // nesse caso, é usado "Visitante" como valor