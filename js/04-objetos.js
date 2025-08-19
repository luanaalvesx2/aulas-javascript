'use strict';

// Exemplo 1: objeto com dados de uma pessoa
console.log("Exemplo 1\n");
const pessoa = {
    //propiedade: valor
    nome: "Chaves", 
    idade: 8,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);

//Acessamos as propriedades usando nomeDoObjeto.nomeDaPropriedade
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos.`);


//Exemplo 2: objeto com array
console.log("\nExemplo2\n");

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ] 
};

console.log(livro);

console.log(livro.titulo);

/* Para acessar algum dos volumes, primeiro assamos pela propiedade (volume) usando 'ponto' e, e chegando nela, usamos 'colchetes' com índice pois se trata de um array. */

console.log(`Meu livro preferido é ${livro.volumes[1]}`);

//Exemplo 3: array de objetos
console.log("\nExemplo3\n");
const livros = [
    {
        titulo: "O Assassinato no Expresso do Oriente",
        autor: "Agatha Christie"
    },
    {
        titulo: "Crepúsculo",
        autor: "Stephanie Myers"
    },
    {
        titulo: "Um livro qualquer",
        autor: "Fulano de tal"
    }
];

console.log(livros);

console.log(livros[2].titulo);

/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro*/

console.log("Exercicio \n");

const aluno = {
    nome_completo: "Carlos",
    data_de_nascimento: "05/06/2007",
    lista_de_telefone: [
        "(11) 4989-5261",
        "(11) 95674-9853" 
    ],
    endereco: {
        rua: "Rua Amaral II",
        número: "456",
        bairro: "Jardim Camelia"
    }, 
};

/*2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */
console.log(`
    Nome do aluno: ${aluno.nome_completo},
    Telefone celular: ${aluno.lista_de_telefone[1]},
    Bairro: ${aluno.endereco.bairro}.`);

    /*concatenação*/
    console.log("O aluno "+aluno.nome_completo+", cujo o contato é "+aluno.lista_de_telefone[1]+", mora no bairro "+aluno.endereco.bairro+".");
    
/*
Sobre os caracteres delimitadores:
 
(parênteses)	-> operações, funções
[colchetes]	-> array/vetor
{chaves}	-> objeto, funções, condicionais, loops, template string */


