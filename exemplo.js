/*
Principios de nodejs, nvm e npm
*/

// NVM - Node Version Manager ~> Gerencia as versões - https://github.com/nvm-sh/nvm
// NPM - Node Package Manager ~> Gerencia os pacotes - https://www.npmjs.com/

// node exemplo.js ~ Executar código do nosso arquivo.

const nome = "Marco";
const idade = 23;

console.log(`Meu nome é ${nome}${idade && typeof idade === 'number' ? ', minha idade é '+ idade : ''}.`);

// npm init ~> Inicia um novo projeto utilizando NodeJS
// npm install <nome da dependencia> para instalar uma dependencia
