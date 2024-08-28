// // import express from 'express';
// // import colecaoUf from './dados.js';

// // const app = express();

// // app.get('/ufs', (req, res) => {
// //     //res.json(colecaoUf)

// //     const nomeUF = req.query.busca;
// //     const ufsFiltradas = colecaoUf.filter(uf => uf.nome.includes(nomeUF));
// //     const resultado = nomeUF ? buscarUfsPorNome(nomeUf) : colecaoUf;

// //     res.json(resultado);
// // });

// // // app.get('/ufs/teste', (req, res) => {
// // //     res.send({"teste": "teste"})
// // // }
// // // );

// // app.get('/ufs/:iduf', (req, res) => {
// //     const idUF = parseInt(req.params.iduf);
// //     // const uf = colecaoUf.find(u => u.id === idUF);
// //     // res.json(uf)
// //     let mensagemErro = '';
// //     let uf;

// //     if (!(isNaN(idUF))) {
// //         uf = colecaoUf.find(u => u.id === idUF);
// //         if(!uf){
// //             mensagemErro = 'UF não encontrada';
// //         }
// //     }else{
// //         mensagemErro = 'Requisição inválida';
// //     }

// //     if (uf) {
// //         res.json(uf);
// //     }else{
// //         res.status(404).send({ "erro": mensagemErro });
// //     }
// // });

// // // app.get('ufs/:iduf', (req, res) => {
// // //     const idUF = req.params.iduf;
// // //     res.send({"teste" : `${idUF}`});

// // // });

// // const buscarUfsPorNome = (nomeUf) => {
// //     return colecaoUf.filter(uf = uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
// // };


// // app.get('/ufs', (req, res) => {
// //     const nomeUf = req.query.busca;
// //     const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;
// //     if(resultado.length > 0){
// //         res.json(resultado);
// //     }else{
// //         res.status(404).send({"erro": "Nenhuma UF encontrada" });
// //     }

// // });

// // app.get('/ufs/:iduf', (req, res) => {
// //     const iduf = parseInt(req.params.iduf);
// //     let mensagemErro = '';
// //     let uf;

// //     if(!(isNaN(idUF))){
// //         uf = colecaoUf.find(u = u.id === idUF)
// //         if(!uf){
// //             mensagemErro = 'UF não encontrada';
// //         }
// //     }else{
// //         mensagemErro = 'Requisição inválida'
// //     }
// // });

// // app.listen(8000, () => {
// //     console.log('Servidor iniciado na porta 8000')
// // });

// import express from 'express';
// import colecaoUf from './dados/dados.js';

// const app = express();

// // Função para buscar UFs por nome
// const buscarUfsPorNome = (nomeUf) => {
//     return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
// };

// // Rota para obter todas as UFs ou filtrar por nome
// app.get('/ufs', (req, res) => {
//     const nomeUf = req.query.busca;
//     const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;
    
//     if (resultado.length > 0) {
//         res.json(resultado);
//     } else {
//         res.status(404).send({ "erro": "Nenhuma UF encontrada" });
//     }
// });

// // Rota para obter uma UF pelo ID
// app.get('/ufs/:iduf', (req, res) => {
//     const idUF = parseInt(req.params.iduf, 10); // Adicionado radix 10
//     let mensagemErro = '';
//     let uf;

//     if (!isNaN(idUF)) {
//         uf = colecaoUf.find(u => u.id === idUF);
//         if (!uf) {
//             mensagemErro = 'UF não encontrada';
//         }
//     } else {
//         mensagemErro = 'Requisição inválida';
//     }

//     if (uf) {
//         res.json(uf);
//     } else {
//         res.status(404).send({ "erro": mensagemErro });
//     }
// });

// app.listen(8000, () => {
//     console.log('Servidor iniciado na porta 8000');
// });


import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorNome } from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if(resultado.length > 0){
        res.json(resultado);
    }else{
        res.status(404).send({"erro": "Nenhuma UF encontrada"});
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);
    if (uf) {
        res.json(uf)
    }else if (isNaN(parseInt(req.params.iduf))){
        res.status(400).send({ "erro": "Requisição inválida" });
    }else{
        res.status(404).send({"erro": "UF não encontrada" })
    }
})

app.listen(3050, () => {
    console.log('Servidor iniciado na porta 3050')
})

