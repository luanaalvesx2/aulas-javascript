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

const exemplo1 = function () {
    //corpo da função: ação que a função vai fazer
    console.log("Olá Função Anônima!");
}; /*nesse exemplo não pode chamar a função antes de declarar*/

//Chamando/invocando a função
exemplo1();

console.log("\nExemplo 2 : Função Nomeada/Declarada");
function exemplo2() {
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

function saudacao(nome = "Visitante") {
    console.log("Olá, " + nome);
}

saudacao("Luana");
saudacao("Liz");
saudacao("Luan");
saudacao(); // nesse caso, é usado "Visitante" como valor

console.log("\nExemplo 5: função com parâmetros e retorno");

/* Sempre que tivemos a necessidade de trabalhar com o resultado de processamento essa função, deve ter o return. */
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

//Chamamos a função e recebemos o rentorno/resultado dela
let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);

//Exibimos o resultado
console.log("Resultado 1: " + resultado1);
console.log("Resultado 2: " + resultado2);

console.log("\nExemplo 6: Simplificando com Arrow Function");

//Versão 1: Sintaxe declarada/nomeada
/*function somar(valor1, valor2) {
    return valor1 + valor2;
}*/

//Versão 2: Sintaxe Arrow Function com retorno implícito
const somar = (valor1, valor2) => valor1 + valor2;


console.log(somar(150, 500));

console.log("\nExemplo 7: formatando valor monetário");
let preco = 5000;
let desconto = preco * 0.10; //10%
let precoFinal = preco - desconto;

function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}
console.log("Preço original: " + formatarMoeda(preco));
console.log("Desconto: " + formatarMoeda(desconto));
console.log("Preço final: " + formatarMoeda(precoFinal));

// Exemplo: usando recursos da classe Intl (Internacionalização)
     /*classe, função pois tem parenteses, "" string, {} objeto, propriedade: valor, format: outra função, pode ser um encadeamento de funções.*/
const exemplo = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
}).format(preco);
console.log(exemplo);



