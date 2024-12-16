const axios = require('axios')
const FormData = require('form-data')


async function updateImageInvenzi(image, chid) {

    const wAccessPhotosURI = `http://srv-invenzi/W-AccessAPI/v1/cardholders/${chid}/photos/1`
    
    try {
        // Criar um objeto FormData
        const formData = new FormData();
        formData.append('photoJpegData', image, {contentType: 'file', filename: `${chid}.png`});

        // Fazer a requisição com o FormData
        const response = await axios.put(wAccessPhotosURI, formData, {
            headers: {
                ...formData.getHeaders(), // Configura corretamente o cabeçalho multipart/form-data
                'Content-Type': 'image/jpeg'
            },
        });

        console.log('Foto atualizada na Invenzi:', response.status);
        return true;
    } catch (error) {
        
        if (error.response) {
            console.error('Status Code:', error.response.status);
            console.error('Detalhes:', error.response.data);
        }
        return false;
    }
}

module.exports = { updateImageInvenzi }