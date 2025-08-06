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



