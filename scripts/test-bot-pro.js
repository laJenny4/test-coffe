/**
 * scripts/test-request.js
 *
 * Este script usa Puppeteer para simular un navegador real.
 * ReCAPTCHA v3 requiere un entorno de navegador para generar un token válido.
 *
 * Para ejecutarlo:
 * 1. npm install puppeteer
 * 2. node scripts/test-request.js
 */

const puppeteer = require('puppeteer');

async function simulateBot() {
    console.log('--- Iniciando Simulación de Bot con Puppeteer ---');
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');

    console.log('Navegando a http://localhost:3001...');

    try {
        page.on('response', async response => {
            const request = response.request();
            if (response.url().includes('/api/registrar-visita') && request.method() === 'POST') {
                try {
                    const status = response.status();
                    const data = await response.json();
                    console.log('\n[API RECEPTOR] Respuesta de registrar-visita:');
                    console.log(`Status: ${status}`);
                    console.log('Data:', JSON.stringify(data, null, 2));

                    if (data.score !== undefined) {
                        console.log(`\n>>> SCORE DETECTADO: ${data.score} <<<`);
                        if (data.score < 0.5) {
                            console.log('Resultado: EL BOT FUE DETECTADO (Score bajo)');
                        } else {
                            console.log('Resultado: EL BOT LOGRÓ PASAR (Score alto)');
                        }
                    }
                } catch (err) {
                }
            }
        });

        await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

        await new Promise(r => setTimeout(r, 5000));
        await browser.close();

    } catch (error) {
        console.error('Error durante la simulación:', error.message);
        await browser.close();
    }
}

simulateBot();