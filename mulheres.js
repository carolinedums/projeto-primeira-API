const express = require("express")
const router = express.Router()
const app = express()

const porta = 3333

const mulheres = [
    {
        nome: 'Caroline Dums',
        imagem:'https://media.licdn.com/dms/image/D4D03AQFS5x9maxBe7g/profile-displayphoto-shrink_400_400/0/1699907572338?e=1711584000&v=beta&t=HyCGPOQA2sPReIHBi1dCtfHi6ARuDj7tFdk3TUQDdkQ',
        minibio: 'estudante de desenvolvimento web',
    },
    {
        nome: 'Ada lovelace',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Frevistagalileu.globo.com%2FSociedade%2FCuriosidade%2Fnoticia%2F2018%2F02%2F10-fatos-sobre-ada-lovelace-que-farao-voce-admira-la-ainda-mais.html&psig=AOvVaw0mQsHf2YEaH2cbLh98_12E&ust=1706381091652000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDO2onb-4MDFQAAAAAdAAAAABAE',
        minibio:'primeira mulher programadora',
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
   console.log ("servidor criado e rodando ", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)