console.log(organizeGifts(`76a11b`))

// 220 puntos
function organizeGiftsChatGPT(gifts) {
    let organized = '';
    let numString = '';
    let currentGift = '';

    for (let i = 0; i < gifts.length; i++) {
        if (!isNaN(gifts[i])) {
            numString += gifts[i];
        } else {
            currentGift = gifts[i];
            let count = parseInt(numString, 10);

            while (count > 0) {
                if (count >= 50) {
                    organized += '[' + currentGift + ']';
                    count -= 50;
                } else if (count >= 10) {
                    organized += '{' + currentGift + '}';
                    count -= 10;
                } else {
                    organized += '(' + currentGift.repeat(count) + ')';
                    count = 0;
                }
            }

            numString = '';
        }
    }

    return organized;
}

// 220 puntos
function organizeGiftsCopilot(gifts) {
    let organized = [];
    let numString = '';
    let currentGift = '';

    for (let i = 0; i < gifts.length; i++) {
        if (!isNaN(gifts[i])) {
            numString += gifts[i];
        } else {
            currentGift = gifts[i];
            let count = parseInt(numString, 10);

            while (count > 0) {
                if (count >= 50) {
                    organized.push('[' + currentGift + ']');
                    count -= 50;
                } else if (count >= 10) {
                    organized.push('{' + currentGift + '}');
                    count -= 10;
                } else {
                    organized.push('(' + currentGift.repeat(count) + ')');
                    count = 0;
                }
            }

            numString = '';
        }
    }

    return organized.join('');
}