const express = require("express")
const router = express.Router()
const app = express()

const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Caroline Dums',
        imagem:'https://github.com/simaraconceicao.png',
        minibio:'Estudante de desenvolvimento web, e.. Mãe.'
    })
}

function mostraPorta() {
   console.log ("servidor criado e rodando ", porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)