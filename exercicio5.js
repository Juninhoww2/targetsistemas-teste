// Função que simula a resolução do problema
function identificarLampadas() {
    let lampada1 = "fria";   // Inicialmente todas as lâmpadas estão frias
    let lampada2 = "fria";
    let lampada3 = "fria";

    // 1. Ligar o primeiro interruptor e deixar ligado por um tempo (simulação)
    lampada1 = "quente";  // A lâmpada 1 está quente após algum tempo ligada

    // 2. Desligar o primeiro interruptor e ligar o segundo interruptor
    lampada2 = "acesa";   // A lâmpada 2 está acesa

    // 3. Checar as lâmpadas
    if (lampada2 === "acesa") {
        console.log("A segunda lâmpada é controlada pelo segundo interruptor.");
    }

    if (lampada1 === "quente") {
        console.log("A primeira lâmpada é controlada pelo primeiro interruptor.");
    }

    if (lampada3 === "fria") {
        console.log("A terceira lâmpada é controlada pelo terceiro interruptor.");
    }
}

// Executar a função para identificar as lâmpadas
identificarLampadas();
