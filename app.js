const { convertPhoto } = require("./convertPhoto");
const { getAllChids } = require("./getAllChids");
const { getImage64 } = require("./getImage64");
const { updateImageInvenzi } = require("./sendToWAccess");


/* chids = [
    15682,
    10541,
    16243,
    15122,
    17564,
    15362,
    10161,
    16223,
    10545,
    15223,
    14772,
    10101,
    15742,
    16743,
    14543,
    17504,
    6881,
    15784,
    16822,
    16782,
    15342,
    17566,
    15722,
    15162,
    17482,
    15007,
    16149,
    15382,
    15862,
    15962,
    15842,
    16771,
    17565,
    17522,
    10241,
    17562,
    15702,
    16242,
    10301,
    16922,
    10302,
    16222,
    17382,
    15582,
    16802,
    15006,
    17203,
    17342,
    15102,
    17442
] */


chids = [
    17564,
    15362,
    17724,
    17697,
    17695,
    17746,
    14772,
    10101,
    17687,
    17570,
    17722,
    17566,
    17565,
    10241,
    17562,
    17690,
    17664,
    17677,
    17623,
    17672

]

chids.forEach(chid => {
    (async () => {
        try {

           
            /* /*Obter o base64 da foto a partir do CHID*/
            const encoded64 = await getImage64(chid)

            /*Converter foto*/
            const imgPng = await convertPhoto(encoded64) 

            const fs = require('fs')

            /*Gravar foto localmente*/
            fs.writeFile(`./convertidas/${chid}.png`, imgPng, err => {
                if (err) {
                    console.error(err)
                }
            })

            /*Gravar foto na Invenzi*/
            

            const respInvenzi = await updateImageInvenzi(imgPng, chid)

            if (respInvenzi) {
                console.log(`Foto gravada com sucesso na Invenzi. CHID ${chid}`)
            } else {
                console.error(`Erro ao salvar a foto na Invenzi. CHID ${chid}`)
            }


        } catch (error) {
            console.error(error)
        }
    })()
});



