const axios = require('axios')


url = 'http://localhost:3123/convert-to-png'

async function convertPhoto(base64) {
    try {
        const response = await axios.post(url, { image: base64 }, {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return response.data



    } catch (error) {
        console.error(error)
    }



}

module.exports = { convertPhoto }

