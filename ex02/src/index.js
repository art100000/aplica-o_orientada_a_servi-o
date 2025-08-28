import "dotenv/config";
import express from 'express'

const app = express()
app.listen(3000, () => {})

app.get('/',(req, res) => {
    res.send('Bem vindo ao express de Arthur!');
})
app.get('/random', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random * 100);
    res.send({number: numeroAleatorio});
})

app.get('/inspirations', (req, res) => {
    const randomNumber =  Math.floor(Math.random() * 14);
    const quoteInspiration = [
        "Acredite no seu potencial, mesmo quando ninguém mais acreditar.",

        "Cada pequeno passo te aproxima do grande objetivo.",

        "A vida começa onde sua zona de conforto termina.",

        "Seja a mudança que você deseja ver no mundo.",

        "Não espere a motivação, crie-a!",

        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",

        "A maior descoberta é saber que você pode ir além.",

        "O impossível só existe até que alguém decida que é possível.",

        "Desafios são oportunidades disfarçadas de dificuldades.",

        "Não tenha medo de começar de novo, é uma chance de construir algo melhor.",

        "O futuro pertence àqueles que acreditam nos seus sonhos.",

        "Faça hoje o que seu futuro agradecerá.",

        "A felicidade não é algo pronto, ela vem de suas ações.",

        "O caminho para o sucesso é sempre em construção.",

        "O segredo da vida é acreditar no impossível e correr atrás."
    ]
    res.send(quoteInspiration[randomNumber]);
})
console.log(process.env.MY_SECRET)