// Exemplo de como criar um simple servidor

const express = require('express')
const server = express()

server.get('/', async (request, response) => {
    console.log(request);

    return response.status(200).json({error: false, message:'Olá mundo!'});
})


server.get('/perfil', async (request, response) => {
    const {nome} = request.query;
    console.log("Query >>", nome)
 
    return response.status(200).send(`O seu nome é ${nome}.`);
})

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})