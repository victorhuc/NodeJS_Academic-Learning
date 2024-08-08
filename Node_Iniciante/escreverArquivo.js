
var fs = require('fs');
fs.writeFile('ArquivoNovoRenomeado', 'Olá NodeJS! SENAI 2024', function (err) {
if (err) throw err;
console.log('Arquivo Preenhcido com Texto!');
});