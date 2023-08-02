function esperarPorUmSegundo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Passou um segundo!');
        }, 1000);
    });
}

// Função assíncrona usando async/await
async function minhaFuncaoAssincrona() {
    try {
        console.log('Iniciando...');
        const resultado = await esperarPorUmSegundo(); // Aguarda a Promise ser resolvida
        console.log(resultado);
        console.log('Finalizando...');
    } catch (erro) {
        console.error('Erro:', erro);
    }
}

minhaFuncaoAssincrona();