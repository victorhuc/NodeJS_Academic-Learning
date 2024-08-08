// var clc = require("cli-color");

//EXEMPLOS DA LIB [CLI - COLOR]

// console.log(clc.red("Text in red"));

// console.log(clc.red.bgWhite.underline("Underlined red text on white background."));

// console.log(clc.red("red") + " plain " + clc.blue("blue"));

// console.log(clc.red("red " + clc.blue("blue") + " red"));

// var error = clc.red.bold;
// var warn = clc.yellow;
// var notice = clc.blue;

// console.log(error("Error!"));
// console.log(warn("Warning"));
// console.log(notice("Notice"));

//__________________________________________________
//ATIVIDADE PRATICA 1
//__________________________________________________

var clc = require("cli-color");

var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;

var msg = clc.xterm(202).bgXterm(265);

console.log(msg("Orange text on dark gray background"));

console.log(clc.green ("Mensagem verde;"));
console.log(clc.red ("Mensagem vermelha;"));
console.log(clc.blue ("Mensagem azul;"));
console.log(clc.yellow ("Mensagem amarela;"));
console.log(clc.red ("Vermelho ") + clc.blue ("Azul") + clc.blue ("Azul"));
console.log(clc.red ("Vermelho ") + "plain" + clc.blue ("Azul"));
console.log(clc.red.bgWhite.underline("Underlined red text on white background.;"));
console.log(clc.red ("Mensagem em vermelho;"));

console.log(error("Error!"));
console.log(warn("Warning"));
console.log(notice("Notice"));

process.stdout.write(
    clc.columns([
        [clc.bold("Firs Name"), clc.bold("Last Name"), clc.bold("Age")],
        ["John", "Doe", 34],
        ["Marta", "Smith", 20],
        ["Jan", "Kowalski", 30]
    ])
);

