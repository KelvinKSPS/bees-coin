const prompt = require('prompt-sync')();
const CryptoBlock = require('../core/crypto-block');
const CryptoBlockchain = require('../core/crypto-blockchain');


let beesCoin = new CryptoBlockchain();

console.log("Minerando o bloco....");

beesCoin.addNewBlock(
    new CryptoBlock(1, "28/01/2021", {
        sender: "Zé Colmeia",
        recipient: "Beedrill",
        objects: [{
            name: "Becks",
            quantity: 50
        }]

    })
);


console.log("Primeiro bloco minerado!\n");

beesCoin.addNewBlock(
    new CryptoBlock(2, "28/01/2021", {
        sender: "Beedrill",
        recipient: "Ambévio",
        objects: [{
            name: "H20 Limoneto",
            quantity: 50
        }]
    })
);

console.log("Dois blocos de exemplo foram minerados!\n");


let starterBlock = 2;
while (true) {
    console.log("Esperando solicitação de bloco");
    if (prompt("Próximo? ") === 'N') {
        break;
    }

    let sender = prompt("ID de Origem: ");
    let recipient = prompt("ID de Destino: ");
    let quantity = parseFloat(prompt("Quantidade: "));

    console.log("minerando...")
    beesCoin.addNewBlock(
        new CryptoBlock(++starterBlock, "28/01/2021", {
            sender, recipient, quantity
        })
    );

    console.log(JSON.stringify(beesCoin, null, 4));
}

console.log("Validando a blockchain");
console.log(beesCoin.checkChainValidity() ? "Válida!" : "Inválida");