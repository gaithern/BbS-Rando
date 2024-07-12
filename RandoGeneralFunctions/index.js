// Initializes function to return any amount of random items out of a specified item pool
export function grabRandom(itemPool, amountOfItems) {
  let elements = {};
  for (let i = 1; i <= amountOfItems; i++) {
    let random = Math.floor(Math.random() * itemPool.length);
    let element = itemPool.splice(random, 1)[0];
    elements[`element${i}`] = element;
  }
  return elements;
}

// Initializes function to return the total length of all arrays inside a multiarray
export function getMultiArrayLength(array) {
  let length = 0;
  for ( let i = 0; i < array.length; i++) {
    length += array[i].length;
  }
  return length;
}