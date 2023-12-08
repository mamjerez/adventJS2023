const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

// const movements2 = '<<<>'
// const result2 = maxDistance(movements2)
// console.log(result2) // -> 2

// const movements3 = '>***>'
// const result3 = maxDistance(movements3)
// console.log(result3) // -> 5

// 280 puntos
function maxDistance(movements) {
    const dcha = movements.split('>').length - 1;
    const izq = movements.split('<').length - 1;
    const asterisco = movements.split('*').length - 1;
    return (dcha > izq) ? (dcha - izq) + asterisco : izq - dcha + asterisco;
}

// 350 puntos
function maxDistanceCopilot(movements) {
    let dcha = 0, izq = 0, asterisco = 0;
    for (const movement of movements) {
        if (movement === '>') dcha++;
        else if (movement === '<') izq++;
        else if (movement === '*') asterisco++;
    }
    return (dcha > izq) ? (dcha - izq) + asterisco : izq - dcha + asterisco;
}

// 340 puntos
function calcularMovimientosChatGPT(movements) {
    let dcha = 0, izq = 0, asterisco = 0;

    for (let i = 0; i < movements.length; i++) {
        switch (movements[i]) {
            case '>':
                dcha++;
                break;
            case '<':
                izq++;
                break;
            case '*':
                asterisco++;
                break;
        }
    }
    return (dcha > izq) ? (dcha - izq) + asterisco : izq - dcha + asterisco;
}