port = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp)=> {
    console.log(req.body)
    const conteudo = JSON.stringify(req.body)
    console.log(conteudo)
    resp.send(`<h1>Parabéns, usuário incluido</h1><h2>${conteudo}</h2>`)
})

app.post('/usuarios/:id', (req, resp)=> {
    console.log(req.params.id)
    const id = JSON.stringify(req.params.id)
    const conteudo = JSON.stringify(req.body)
    console.log(conteudo)
    resp.send(`<h1>Parabéns, usúario alterado</h1><h2>${conteudo} ${id}</h2>`)
})

app.listen(port, ()=> {
    console.log(`Servidor está executando na porta ${port}.`)
})