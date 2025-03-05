import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getrandomFoodPosition;
const EXPANSION_RATE = 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getrandomFoodPosition;
    }
  
}



export function draw(gameBoard) {
const foodElement = document.createElement('div');
foodElement.style.gridRowStart = food.x;
foodElement.style.gridColumnStart = food.y;
foodElement.classList.add('food');
gameBoard.appendChild(foodElement);
}


function getrandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}