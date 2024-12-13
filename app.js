const { getAllChids } = require("./getAllChids");
const { getImage64 } = require("./getImage64");




(async () => {
    try {

        /*Obter um array com todos os CHIDs*/
        const chids = await getAllChids()

        /*Obter o base64 da foto a partir do CHID*/
        const encoded = await getImage64(chids[0])

        /*Converter foto*/

        /*Gravar foto na Invenzi*/
        
    } catch (error) {
        console.error(error)
    }
})()