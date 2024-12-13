const axios = require('axios')
const https = require('https')


async function getImage64(chid) {

    const url = `http://www.unimedlitoral.com.br/ords/prod/unimed/nucleodigital/FotoPaciente?chid=${chid}`

    const httpAgent = new https.Agent({
        rejectUnauthorized: false,
    })

    try {
        const response = await axios.get(url)
        return response.data.img64   
    } catch (error) {
        console.error('Não foi possível obter o base64 da imagem')
        throw error;
    }
    
    
}



module.exports = { getImage64 }    