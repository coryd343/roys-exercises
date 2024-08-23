export function log(text) {
    console.log(text);
}

/**
 * Creates a cat with the given parameters
 * @param {string} name 
 * @param {string} breed 
 * @param {string} age 
 * @returns 
 */
export function createCat(name, breed, age) {
    return {name: name, breed: breed, age: age};
}

/**
 * Generates a random integer between 1 and the given max number (inclusive).
 * @param {number} max 
 * @returns 
 */
export function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

/**
 * Returns an array of random integers with length equal to the given length parameters
 * @param {number} length length of the array
 * @param {number} maxVal maximum value for any given element of the array
 */
export function getRandomIntArray(length, maxVal) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomInt(maxVal));
    }
    return array;
}

export function getRandomCat() {
    const names = ['Fluffy', 'Mr. Bojangles', 'SerialKiller', 'Numpty', 'Margaret Thatcher'];
    const age = getRandomInt(30);
    const breeds = ['Russian Blue', 'Mexican Green', 'Canadian Dry', 'Burnt Umber', 'Pumpkin Spice'];

    return createCat(names[getRandomInt(names.length - 1)], age, breeds[getRandomInt(breeds.length - 1)]);
}

export function getRandomCatArray(arrayLength) {
    let catArray = [];
    for (let i = 0; i < arrayLength; i++) {
        catArray.push(getRandomCat());
    }
    return catArray;
}

export function swap(array, indexOne, indexTwo) {
    const placeHolder = array[indexOne];
    theArray[indexOne] = theArray[indexTwo];
    theArray[indexTwo] = placeHolder;
    return array;
}