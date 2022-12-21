import fruits from './fruits';
import { fruitChoice, sellFruit } from "./helpers";

let fruit = fruitChoice(fruits);

console.log(`I'd like one ${fruit}, please!`)
console.log(`Here you go: ${fruit}`)
console.log("Delicious! May I have another?")

let remainingFruit = sellFruit(fruit, fruits);

console.log(`I'm sorry, we're all out. We have ${remainingFruit.length} left.`)




