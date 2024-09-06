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

export function swap(theArray, indexOne, indexTwo) {
    const placeHolder = theArray[indexOne];
    theArray[indexOne] = theArray[indexTwo];
    theArray[indexTwo] = placeHolder;
    return theArray;
}

/**
 * Finds and returns the index where a given "pivot point" (in this case, the last element) should
 * belong, where all elements before it are < the value of the pivot and all elements after it are
 * greater than it. Moves this pivot point to this location.
 * @param {Array} theArray 
 * @param {number} start 
 * @param {number} end 
 * @returns 
 */
export function findPartitionPosition(theArray, start, end) {
    let pivot = theArray[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
        if (theArray[j] < pivot) {
            i++;
            swap(theArray, i, j);
        }
    }
    i++
    swap(theArray, i, end);
    // log(`Pivot ${pivot} belongs at index ${i}`);
    return i;
}

/**
 * Executes the given sorting function on the given data array and returns the time to complete the operation in milliseconds.
 * @param {Array} theArray 
 * @param {function} sortFunc 
 * @returns 
 */
export function sortAndTime(theArray, sortFunc) {
    const startTime = Date.now();
    sortFunc(theArray);
    const diff = Date.now() - startTime;
    // log (diff);
    return diff;
}

export function getAverageExecutionTime(dataset, sortFunc, times) {
    if (times < 1) {
        log(`Invalid times: ${times}`)
        return 0;
    }
    let totalTime = 0;
    for (let i = 0; i < times; i ++) {
        totalTime += sortAndTime(dataset, sortFunc);
    }

    if (totalTime < 1)
        return 0;

    return totalTime / times;
}