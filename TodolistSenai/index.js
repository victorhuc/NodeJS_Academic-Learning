// import express from 'express';
// import path from 'path';
// import ejs from 'ejs';

// const app = express();

// app.engine('html', ejs.renderFile);
// app.set('view engine', 'html');
// app.use('/public', express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, '/views'));


// app.get('/', (req, res)=>{
//     res.render('index',{});
// });


// app.listen(5000, ()  => {
//     console.log('Servidor rodando em http/localhost/5000');

// });

// import express from 'express';
// var bodyParser = require('body-parser') 
// import path from 'path';
// import ejs from 'ejs';

// // Cria uma instância do aplicativo Express
// const app = express();

// // Configura o EJS como motor de visualização para arquivos .html
// app.engine('html', ejs.renderFile);
// app.set('view engine', 'html');

// // Configura o diretório estático para arquivos públicos
// app.use('/public', express.static(path.join(process.cwd(), 'public')));

// // Define o diretório onde as views (templates) estão localizadas
// app.set('views', path.join(process.cwd(), 'views'));

// // // Rota para a página inicial
// // app.get('/', (req, res) => {
// //     res.render('index', {nome: 'Victor'});
// // });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar pão'];

// app.get('/', (req, res)=>{
//     res.render('index',{tasksList: tasks});
// });

// app.get('/deletar/:id', (req,res)=>{
//     tasks = tasks.filter(function(val,index){
//         if(index != req.params.id){
//             return val;
//         }
//     })
//     res.render('index',{tasksList:tasks})
// })

// // Inicia o servidor
// app.listen(5000, () => {
//     console.log('Servidor rodando em http://localhost:5000');
// });


import express from 'express';
import bodyParser from 'body-parser'; // Use import para body-parser
import path from 'path';
import ejs from 'ejs';


// Cria uma instância do aplicativo Express
const app = express();

// Configura o EJS como motor de visualização para arquivos .html
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// Configura o diretório estático para arquivos públicos
app.use('/public', express.static(path.join(process.cwd(), 'public')));

// Define o diretório onde as views (templates) estão localizadas
app.set('views', path.join(process.cwd(), 'views'));

// Configura o body-parser para lidar com JSON e dados de formulários
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Lista de tarefas
let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar pão'];

// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('index', { tasksList: tasks });
});

// Rota para deletar uma tarefa
// app.get('/deletar/:id', (req, res) => {
//     const id = parseInt(req.params.id, 10); // Garante que o id é um número
//     if (!isNaN(id) && id >= 0 && id < tasks.length) {
//         tasks = tasks.filter((_, index) => index !== id);
//     }
//     res.render('index', { tasksList: tasks });
// });

app.get('/deletar/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    if(id >= 0 && id < tasks.length){
        tasks.splice(id,1);
    }
    res.redirect('/');
});

//Rota para adicionar uma tarefa

app.post('/', (req, res)=>{
    tasks.push(req.body.task);
    res.render('index',{tasksList: tasks})
})


// Inicia o servidor
app.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000');
});

