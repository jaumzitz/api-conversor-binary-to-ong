
/*Retorna um array com todos os CHIDs do arquivo chids.json*/

const fs = require('fs')

function getAllChids() {

    try {
        const data = fs.readFileSync('./chids.json', 'utf-8')
        return (JSON.parse(data))
    } catch (err) {
        console.error("Erro ao carregar o arquivo:", err);
    }


}

module.exports = { getAllChids }
