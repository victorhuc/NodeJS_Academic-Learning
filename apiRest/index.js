import express from 'express';
import colecaoUf from './dados.js';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
});

// app.get('/ufs/teste', (req, res) => {
//     res.send({"teste": "teste"})
// }
// );

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    // const uf = colecaoUf.find(u => u.id === idUF);
    // res.json(uf)
    let mensagemErro = '';
    let uf;

    if (!(isNaN(idUF))) {
        uf = colecaoUf.find(u => u.id === idUF);
        if(!uf){
            mensagemErro = 'UF não encontrada';
        }
    }else{
        mensagemErro = 'Requisição inválida';
    }

    if (uf) {
        res.json(uf);
    }else{
        res.status(404).send({ "erro": mensagemErro });
    }
});

// app.get('ufs/:iduf', (req, res) => {
//     const idUF = req.params.iduf;
//     res.send({"teste" : `${idUF}`});

// });

app.listen(8000, () => {
    console.log('Servidor iniciado na porta 8000')
});






