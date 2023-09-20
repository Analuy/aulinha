const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())

app.get('/get/:email', (req,res)=>{
    const dados = fs.readFileSync(__dirname+'/'+req.params.email+'.json')
    res.send(dados)
})

app.post('/post', (req,res)=>{
  fs.writeFileSync(req.body.email+'.json', JSON.stringify(req.body))
  res.send('DADOS ENVIADOS')
})

app.put('/put', (req,res)=>{
    fs.writeFileSync(req.body.email+'.json', JSON.stringify(req.body), {flag: 'W'})
    res.send('DADOS ATUALIZADOS')
  })
app.delete('/delete', (req,res)=>{
    fs.unlink(__dirname+'/'+req.body.email+'.json')
    res.send('DADOS APAGADOS')
  })

app.use((req,res)=>{
    res.send('rota não encontrada ')
})

app.listen(3000, ()=>console.log(`servidor rodando na porta ${3000}`))