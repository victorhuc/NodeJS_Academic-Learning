
var fs = require('fs');
fs.rename('novo.txt', 'ArquivoNovoRenomeado', function (err) {
if (err) throw err;
console.log('Arquivo Renomeado!');
});