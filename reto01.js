const giftIds = [2, 1, 3, 5, 3, 2]
console.log(findFirstRepeated(giftIds)) 


// solucion optimizada por ChatGPT. 360 puntos
function findFirstRepeated(gifts) {
  return gifts.filter((item,i) => (gifts.indexOf(item) !== i))?.[0] ?? -1
}


// solucion optimizada por Copilot. 160 puntos
function findFirstRepeatedCopilot(gifts) {
  const seen = new Set();
  for (const item of gifts) {
      if (seen.has(item)) {
          return item;
      }
      seen.add(item);
  }
  return -1;
}