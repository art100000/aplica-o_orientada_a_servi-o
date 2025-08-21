import "dotenv/config";
import express from 'express'
const app = express()
app.listen(3000, () => {})
app.get('/',(req, res) => {
    res.send('Bem vindo ao express de Arthur!')
})

console.log(process.env.MY_SECRET)