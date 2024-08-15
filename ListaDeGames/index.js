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


app.listen(3080,() =>{
    console.log("Servidor rodando!")
});

// app.get("/", (red, res) => {
//     res.send("Olá mundo")
// })

app.get("/", (red, res) => {
    res.json(games)
});

// let games = [
//     {title: "Sea of Thieves", studio: "Rare", price: "30"},
//     {title: "WOW", studio: "Blizzard", price: "120"},
//     {title: "Valorant", studio: "Riot", price: "0"},
//     {title: "COD", studio: "Activision", price: "90"},
//     {title: "Minecraft", studio: "Mojang", price: "80"},
//     {title: "Halo", studio: "Mojang", price: "90"},
//     {title: "God Of War", studio: "Mojang", price: "90"},
//     {title: "Elden Ring", studio: "Mojang", price: "90"},
//     {title: "Red Dead Redemption 2", studio: "Mojang", price: "90"},
//     {title: "Ghost of Tsushima", studio: "Mojang", price: "90"},
//     {title: "Baldur's Gate 2", studio: "Mojang", price: "90"},
//     {title: "The Crew Motorfest", studio: "Mojang", price: "90"},
//     {title: "Mortal Combat XI", studio: "Mojang", price: "90"},
//     {title: "Sea of Stars", studio: "Mojang", price: "90"},
//     {title: "Hollow Knight", studio: "Mojang", price: "90"},
//     {title: "Resident Evil 4 - Ramake", studio: "Mojang", price: "90"}

// ]

// [ LISTA ANTERIOR
//     {
//       "title": "Sea of Thieves",
//       "studio": "Rare",
//       "price": "30"
//     },
//     {
//       "title": "WOW",
//       "studio": "Blizzard",
//       "price": "120"
//     },
//     {
//       "title": "Valorant",
//       "studio": "Riot",
//       "price": "0"
//     },
//     {
//       "title": "COD",
//       "studio": "Activision",
//       "price": "90"
//     },
//     {
//       "title": "Minecraft",
//       "studio": "Mojang",
//       "price": "80"
//     },
//     {
//       "title": "The Legend of Victor",
//       "studio": "Costa Land",
//       "price": 600
//     },
//     {
//       "title": "God Of War",
//       "studio": "Mojang",
//       "price": "90"
//     },
//     {
//       "title": "Elden Ring",
//       "studio": "Mojang",
//       "price": "90"
//     },
//     {
//       "title": "Red Dead Redemption 2",
//       "studio": "Mojang",
//       "price": "90"
//     },
//     {
//       "title": "Ghost of Tsushima",
//       "studio": "Mojang",
//       "price": "90"
//     },
//     {
//       "title": "Baldur's Gate 2",
//       "studio": "Mojang",
//       "price": "90"
//     },
//     {
//       "title": "The Crew Motorfest",
//       "studio": "Mojang",
//       "price": "90"
//     },
//     {
//       "title": "Mortal Combat XI",
//       "studio": "Mojang",
//       "price": "90"
//     },
//     {
//       "title": "Sea of Stars",
//       "studio": "Mojang",
//       "price": "90"
//     },
//     {
//       "title": "Hollow Knight",
//       "studio": "Mojang",
//       "price": "90"
//     },
//     {
//       "title": "Resident Evil 4 - Ramake",
//       "studio": "Mojang",
//       "price": "90"
//     }
//   ]