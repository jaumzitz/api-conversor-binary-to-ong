const axios = require('axios')

url = 'localhost:3123/convert-to-png'

async function convertPhoto(base64) {
    try {
        const response = await axios.post(url, {image: base64})

    } catch (error) {
        console.error(error)
    }

    

}

