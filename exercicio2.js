function countLetterA(str) {
    // Converte a string para minúsculas para facilitar a contagem
    let lowerCaseStr = str.toLowerCase();
    let count = 0;

    // Conta quantas vezes a letra 'a' aparece
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === 'a') {
            count++;
        }
    }

    // Verifica se a letra 'a' está presente
    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log(`A letra 'a' não aparece na string.`);
    }
}

let stringExemplo = "Aprendizado e Automação são áreas fascinantes.";  
countLetterA(stringExemplo);
