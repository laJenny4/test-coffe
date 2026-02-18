async function testFlow() {
    const API_BASE = 'https://captcha-ruby.vercel.app';
    const clientId = 'CAFE_AROMA_001';

    console.log('--- Probando Registro de Visita ---');
    try {
        const regResponse = await fetch(`${API_BASE}/api/registrar-visita`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                clientId,
                pageUrl: 'https://captcha-ruby.vercel.app/test',
                pageTitle: 'Test Page',
                recaptchaToken: 'FAKE_TOKEN_FOR_TESTING',
            })
        });

        const regData = await regResponse.json();
        console.log('Respuesta Registro:', regData);

        if (regData.success && regData.visitId) {
            console.log('✅ visitId obtenido:', regData.visitId);

            console.log('\n--- Probando Seguimiento de Comportamiento ---');
            const behResponse = await fetch(`${API_BASE}/api/comportamiento`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    visitId: regData.visitId,
                    clientId,
                    pageUrl: 'https://captcha-ruby.vercel.app/test',
                    timeOnPage: 10,
                    scrollDepth: 50,
                    mouseMovements: 100,
                    clicks: 2,
                    hadFocus: true
                })
            });

            const behData = await behResponse.json();
            console.log('Respuesta Comportamiento:', behData);

            if (behData.success) {
            }
        } else {
            console.log('❌ Falló el registro (esperado si el token es inválido o el backend está estricto).');
        }
    } catch (error) {
        console.error('Error durante el test:', error.message);
    }
}

testFlow();
