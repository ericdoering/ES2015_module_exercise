
function fruitChoice(items){
    let choice = Math.floor(Math.random() * items.length)
    return items[choice];
}

function sellFruit(item, items){
    for(let i = 0; i < items.length; i++){
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
          }
        }
      };

export {fruitChoice, sellFruit};