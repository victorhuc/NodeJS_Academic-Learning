// const express = require("express");

// const app = express();

const express = require("express");

const app = express();

app.use(express.json());

//ADICIONAR
app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, price}

    res.send("OK");

    games.push(newGame);

});

//ATUALIZAR
app.put("/novogame/:index", (req, res) =>{

    const{ index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title, studio, price};

    return res.json(games);

});

//DELETAR
app.delete("/:index", (req, res) =>{

    const { index } = req.params;
    games.splice(index,1);
    return res.json({ message: "O Jogo foi deletado"});

})

//BUSCAR POR ID

const buscarNomeGame = (nomeGame) => {
    return 

}

app.listen(3080,() =>{
    console.log("Servidor rodando!")
});

// app.get("/", (red, res) => {
//     res.send("Olá mundo")
// })

app.get("/", (red, res) => {
    res.json(games)
});






