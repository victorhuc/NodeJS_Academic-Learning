
// var fs = require('fs');
// fs.appendFile('novo.txt', 'Olá NodeJS! SENAI', function (err) {
// if (err) throw err;
// console.log('Arquivo Salvo!');
// });


var fs = require('fs');
fs.readFile('novo.txt', 'utf-8', function (err, data) {
if (err) throw err;
console.log('Arquivo Encontrado!' & data);
});


