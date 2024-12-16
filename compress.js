const sharp = require('sharp');
const fs = require('fs/promises');
const { updateImageInvenzi } = require("./sendToWAccess");

/**
 * Redimensiona uma imagem para garantir que o tamanho seja de no máximo 3.5 MB.
 * @param {string} inputPath - Caminho para a imagem de entrada.
 * @param {string} outputPath - Caminho para salvar a imagem processada.
 * @returns {Promise<void>} - Promessa que resolve quando a imagem é processada.
 */

async function resizeImage(inputPath, outputPath) {
    const MAX_SIZE_MB = 3.5;
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

    try {
        let quality = 80; // Começamos com qualidade inicial de 80%

        // Lê a imagem original
        let imageBuffer = await fs.readFile(inputPath);

        // Loop para ajustar qualidade até atingir o limite de tamanho
        while (true) {
            const resizedBuffer = await sharp(imageBuffer)
                .jpeg({ quality }) // Ajusta a qualidade
                .toBuffer();

            if (resizedBuffer.length <= MAX_SIZE_BYTES || quality <= 10) {
                // Salva o arquivo processado se o tamanho estiver adequado ou qualidade mínima for atingida
                await fs.writeFile(outputPath, resizedBuffer);
                console.log(`Imagem redimensionada e salva em: ${outputPath}`);
                console.log(`Tamanho final: ${(resizedBuffer.length / (1024 * 1024)).toFixed(2)} MB`);
                break;
            }

            // Reduz a qualidade para tentar diminuir o tamanho do arquivo
            quality -= 10;
            console.log(`Tamanho atual: ${(resizedBuffer.length / (1024 * 1024)).toFixed(2)} MB, reduzindo qualidade para: ${quality}%`);

            const respInvenzi = await updateImageInvenzi(resizedBuffer, 17724)
        }
    } catch (error) {
        console.error("Erro ao processar a imagem:", error);
    }
}

// Exemplo de uso:
resizeImage('./convertidas/17724.png', './convertidas/17724.png');

module.exports = { resizeImage }