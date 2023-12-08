const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufactureCopilot(gifts, materials)) 


// solucion optimizando  ops y complejidad cognitiva al maximo por Copilot. 270 puntos
function manufacture(gifts, materials) {
    const materialSet = new Set(materials);
   return gifts.filter(item => 
       item.split('').every(letra => materialSet.has(letra))
   );
}

// solucion optimizada por Copilot. 270 puntos
function manufactureCopilot(gifts, materials) {
    return gifts.filter(item => 
        item.split('').every(letra => materials.includes(letra))
    );
}


// solucion optimizada por ChatGPT. 270 puntos
function manufactureChatGPT(gifts, materials) {
    const posibles = gifts.filter(item =>
        item.split('').every(letra => materials.includes(letra))
    );

    return posibles;
}


// solucion encontrada por mi
function manufactureMAM(gifts, materials) {
    let posibles = [];
    gifts.map((item) => {
        let isPosible = false;
        for (let j = 0; j < item.length; j++) {
            const letra = item[j];
            if (materials.includes(letra)) {
                isPosible = true
            } else {
                isPosible = false;
                break;
            }
        }

        if (isPosible) {
            posibles.push(item);
        } else {
            // return null;
        }

    });

    return posibles;
}