




const axios = require('axios')
const FormData = require('form-data')

const chid = '17402' //Receber o CHID do paciente
const img64 = ''//Recebr o Base64 da foto
const imgFile = '' //Imagem convertida em arquivo

const wAccessPhotosURI = `http://srv-invenzi/W-AccessAPI/v1/cardholders/${chid}/photos/1`





/*
const sendToWAccess = 
    (async () => {
        try {
            if (!img64) {
                console.error("arquivo nao encontrado")
                return
            }

            //converter base64 em aquivo

            const formData = new FormData()
            formData.append('photoJpegData', imgFile)

            const response = await axios.put(wAccessPhotosURI, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    ...formData.getHeaders()
                }
            })

            console.log('Resposta do servidor: ' + response.data)
        } catch (error) {
            console.error("Erro na requisição: ", error.message);

            if (error.response) {
                console.error('Detalhes do erro:', error.response.data);
            }
        }
});

*/