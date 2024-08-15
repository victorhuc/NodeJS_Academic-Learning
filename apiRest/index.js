import express from 'express';
import colecaoUf from './dados/dados.js';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
});






