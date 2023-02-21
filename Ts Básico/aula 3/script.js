"use strict";
const frase = 'Front End';
const preco = 500;
const condi = preco > 100;
if (typeof frase === 'string') {
    console.log('frase é uma string');
}
if (typeof preco === 'number') {
    console.log('preco é um numero');
}
if (typeof condi === 'boolean') {
    console.log('condi é boolean');
}
