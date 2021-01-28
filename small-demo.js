const prompt = require('prompt-sync')();
const CryptoBlock = require('./crypto-block');
const CryptoBlockchain = require('./crypto-blockchain');


let sidiCoin = new CryptoBlockchain();

console.log("Minerando o bloco....");

sidiCoin.addNewBlock(
    new CryptoBlock(1, "28/01/2021", {
        sender: "SiDier Raiz",
        recipient: "Threestar Joseph",
        quantity: 50
    })
);

sidiCoin.addNewBlock(
    new CryptoBlock(2, "28/01/2021", {
        sender: "Light Yagami",
        recipient: "Jonas Matos",
        quantity: 100
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

    console.log("mineirando...")
    sidiCoin.addNewBlock(
        new CryptoBlock(++starterBlock, "28/01/2021", {
            sender, recipient, quantity
        })
    );

    console.log(JSON.stringify(sidiCoin, null, 4));
}

console.log("Validando a blockchain");
console.log(sidiCoin.checkChainValidity() ? "Válida!" : "Inválida");