import Express from 'express';

const app = Express();

app.get('/', (req, res) =>
    res.send("<h3>Rotas no Express<h3><p>Rota '/'")
);

// app.get('/sobre', (req, res) =>
//     res.send("<h3>Rotas no Express<h3><p>Vamos aprender a utilizar rotas com Express")
// );

// app.get('/users/:name', (req, res) =>
//     res.send('Usuário:' + req.params.name)

// );

// var carros = ['fiesta', 'onix'];

// app.use(Express.urlencoded({ extended: true}));

// app.get('/cars/:id', (req, res) => {
//     let id = req.params.id;
//     return res.json([carros[id]])

// });

// app.post('/cars/', (req, res) =>{
//     let name = req.body.name;
//     carros[(carros.length)] =name;
//     return res.json([carros[(carros.length - 1)]]);
// });

// app.put('/cars/update/:id', (req, res) => {
//     let name = req.body.name;
//     carros[req.params.id] = name;
//     return res.json(carros[req.params.id]);
// });

// app.delete('/cars/delete/:id', (req, res) => {
//     let id = req.params.id;
//     carros[id] = null;
//     return res.json(carros[id]);
// })

// app.listen(3000, () =>
//     console.log('Servidor iniciado na porta 3000')
// );

    var carros = [
        { nome: "Onix", preco: 50000, marca: "Chevrolet" },
        { nome: "HB20", preco: 45000, marca: "Hyundai" },
        { nome: "Sandero", preco: 60000, marca: "Renault" },
        { nome: "Gol", preco: 30000, marca: "Volkswagen" },
        { nome: "Peugeot 307", preco: 25000, marca: "Peugeot" },
        { nome: "Uno", preco: 20000, marca: "Fiat" },
    ];

    app.use(Express.urlencoded({ extended: true}));

    app.get('/cars/:id', (req, res) => {
        let id = req.params.id;
        return res.json([carros[id]])

    });

    app.listen(3000, () =>
        console.log('Servidor iniciado na porta 3000')
    );
    app.get('/cars/', (req, res) => {
        let id = req.params.id;
        return res.json([carros])

    });

    app.put('/cars/update/:id', (req, res) => {
        let name = req.body.name;
        let preco = req.body.preco;
        let marca = req.body.marca;
        carros[req.params.id] = name;
        carros[req.params.id] = preco;
        carros[req.params.id] = marca;
        return res.json(carros[req.params.id] = {name, preco, marca});
    });

    app.post('/cars/', (req, res) =>{
        let name = req.body.name;
        carros[(carros.length)] =name;
        return res.json([carros[(carros.length - 1)]]);
    });

    app.delete('/cars/delete/:id', (req, res) => {
        let id = req.params.id;
        
        carros[id] = null;
        return res.json(carros[id]);
    })