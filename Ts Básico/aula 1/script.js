"use strict";
const produto = "Livro";
const preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5,
};
const barato = preco < 200 ? true : 'produto caro';
console.log(barato);
function somar(a, b) {
    return a + b;
}
somar(4, 10);
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
