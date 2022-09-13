//Exemplo de como usar um módulo
const cowsay = require("cowsay");

const frase = "Olá mundo!";

console.log(cowsay.say({text:frase}))