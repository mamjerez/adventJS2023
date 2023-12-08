const original = 'stepfor';
const modified = 'stepor';
console.log(findNaughtyStepDiscord(original, modified));

// solucion encontrada por mi. 290 puntos
function findNaughtyStepMAM(original, modified) {
    const lenght = original.length > modified.length ? original.length : modified.length;

    for (let i = 0; i < lenght; i++) {
        if (original[i] === modified[i]) {
        } else {
            if (original.length > modified.length) {
                return original[i];
            } else {
                return modified[i];
            }
        }
    }
    return ''
}

// solucion optimizada por ChatGPT. 280 puntos
function findNaughtyStepChatGPT(original, modified) {
    const length = Math.min(original.length, modified.length);

    for (let i = 0; i < length; i++) {
        if (original[i] !== modified[i]) {
            return original.length >= modified.length ? original[i] : modified[i];
        }
    }

    if (original.length !== modified.length) {
        return original.length > modified.length ? original[length] : modified[length];
    }

    return '';
}

// solucion Discord. 260 puntos
function findNaughtyStepDiscord(original, modified) {
    const [main, compare2] = [original, modified]
        .sort((a, b) => b.length - a.length);

    const diffIndex = main.split('')
        .findIndex((char, i) => char !== compare2[i]);
    return diffIndex !== -1 ? main[diffIndex] : '';
}