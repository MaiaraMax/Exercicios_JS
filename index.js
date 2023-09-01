const express = require('express')
const {somar, sub, div, mult, valor_receber} = require('./exercicios/todos.js')

const app = express()
app.use(express.json())
const port = 3000

app.post('/api/exercicio', (req, res) => {
    const result = somar(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/exercicio2', (req, res) => {
    const result = sub(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/exercicio3', (req, res) => {
    const result = div(req.body.num1, req.body.num2)
    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/exercicio02', (req, res) => {
    const result = valor_receber(req.body.valor_hr, req.body.qtde_horas)
    res.status(200).json({
        message: `resultado: ${result}`
    })
    
})
    app.post('/api/exercicio03', (req, res) => {
    const result = peso(req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso4)
    res.status(200).json({
        message: `resultado: ${result}`
    })




})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
