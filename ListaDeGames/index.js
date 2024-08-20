// // const express = require("express");

// // const app = express();

// import  express  from "express";
// import listaJogos from "./listaJogos";

// const app = express();

// app.use(express.json());

// //ADICIONAR
// app.post("/novogame", (req, res) => {
//     let title = req.body.title;
//     let studio = req.body.studio;
//     let price = req.body.price;

//     console.log(title);
//     console.log(studio);
//     console.log(price);

//     let newGame = {title, studio, price}

//     res.send("OK");

//     games.push(newGame);

// });

// //ATUALIZAR
// app.put("/novogame/:index", (req, res) =>{

//     const{ index } = req.params;
//     let title = req.body.title;
//     let studio = req.body.studio;
//     let price = req.body.price;

//     games[index] = {title, studio, price};

//     return res.json(games);

// });

// //DELETAR
// app.delete("/:index", (req, res) =>{

//     // const { index } = req.params;
//     // games.splice(index,1);
//     // return res.json({ message: "O Jogo foi deletado"});
//     const nomeGame = req.query.busca;
//     const jogosFiltrados = listaJogos.filter(nome => nome.nome.includes(nomeGame));
//     const resultado = nomeGame ? buscarNomeGame(nomeGame) : listaJogos
// })

// //BUSCAR POR ID

// const buscarNomeGame = (nomeGame) => {
//     return listaJogos.filter(nome => nome.nome.toLowerCase().includes(nomeGame.toLowerCase()))
// }

// app.get('/ufs', (req, res) => {
//     const nomeGame = req.query.busca;
//     const resultado = nomeGame ? buscarNomeGame(nomeGame) : listaJogos
//     if(resultado.length > 0) {
//         res.json(resultado);
//     }else{
//         res.status(404).send({ "erro": "Nenhum jogo encontrado"})
//     }

// });

// app.get('novogame/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     let mensagemErro = '';
//     let nome;

//     if(!(isNaN(idUF))) {
//         nome = listaJogos.find(u => u.id === id);
//         if(!nome){
//         mensagemErro = 'Jogo não encontrado'
//         }
//     }else{
//         mensagemErro = 'Requisição Inválida'
//     }
// })

// app.listen(3080,() =>{
//     console.log("Servidor rodando!")
// });

// // app.get("/", (red, res) => {
// //     res.send("Olá mundo")
// // })

// app.get("/", (red, res) => {
//     res.json(games)
// });


const express = require("express");

const app = express();

import listaJogos from './listaJogos.js'; // Corrigido para incluir a extensão do arquivo

app.use(express.json());

// ADICIONAR
app.post('/novogame', (req, res) => {
    const { title, studio, price } = req.body;

    // Verificar se todos os campos estão presentes
    if (!title || !studio || !price) {
        return res.status(400).send("Todos os campos são obrigatórios");
    }

    const newGame = {
        id: listaJogos.length + 1, // Novo ID baseado no comprimento da lista
        nome: title,
        estudio: studio,
        preco: price
    };

    listaJogos.push(newGame);
    res.status(201).json(newGame); // Retornar o novo jogo criado
});

// ATUALIZAR
app.put('/novogame/:index', (req, res) => {
    const index = parseInt(req.params.index, 10); // Adicionado radix 10
    const { title, studio, price } = req.body;

    if (index < 0 || index >= listaJogos.length) {
        return res.status(404).send("Índice inválido");
    }

    listaJogos[index] = { id: index + 1, nome: title, estudio: studio, preco: price };
    res.json(listaJogos[index]);
});

// DELETAR
app.delete('/novogame/:index', (req, res) => {
    const index = parseInt(req.params.index, 10); // Adicionado radix 10

    if (index < 0 || index >= listaJogos.length) {
        return res.status(404).send("Índice inválido");
    }

    listaJogos.splice(index, 1);
    res.send({ message: "Jogo deletado com sucesso" });
});

// BUSCAR POR NOME
const buscarNomeGame = (nomeGame) => {
    return listaJogos.filter(game => game.nome.toLowerCase().includes(nomeGame.toLowerCase()));
};

app.get('/novogame', (req, res) => {
    const nomeGame = req.query.busca;
    const resultado = nomeGame ? buscarNomeGame(nomeGame) : listaJogos;
    
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhum jogo encontrado" });
    }
});

// BUSCAR POR ID
app.get('/novogame/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); // Adicionado radix 10

    const game = listaJogos.find(game => game.id === id);
    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ "erro": "Jogo não encontrado" });
    }
});

app.get('/', (req, res) => {
    res.json(listaJogos);
});

app.listen(3080, () => {
    console.log("Servidor rodando na porta 3080");
});





