function isFibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === a || num === b) return true;

    let c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }

    return false;
}

let numero = 21;  // Aqui você pode definir o número ou pedir uma entrada do usuário
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
