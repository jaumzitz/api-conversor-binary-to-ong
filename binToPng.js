const express = require('express');
const sharp = require('sharp'); 

const app = express();
const port = 3123;

// Middleware para processar JSON com binário
app.use(express.json({ limit: '20mb' })); // Limite ajustável para tamanho de imagem

app.post('/convert-to-png', async (req, res) => {
    try {

        if (!req.body.image) {
            return res.status(400).json({ error: 'O campo "image" é obrigatório.' });
        }

        // Decodificar o binário da imagem
        const imageBuffer = Buffer.from(req.body.image, 'base64');

        // Converter para formato PNG usando sharp
        const pngBuffer = await sharp(imageBuffer).png().toBuffer();

        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Disposition', 'attachment; filename="image.png"');

        // Enviar a imagem PNG como resposta
        res.send(pngBuffer);
    } catch (error) {
        console.error('Erro ao processar a imagem:', error);
        res.status(500).json({ error: 'Erro ao processar a imagem.' });
    }
});

// Inicializar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
