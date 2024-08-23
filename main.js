import {log, getRandomCatArray, getRandomIntArray} from './helpers.js';

document.getElementById('testButton').addEventListener('click', test);

/**
 * Test your functions here!
 */
export function test() {
    //HW1: Sort this array of integers in ascending order
    let intArray = getRandomIntArray(10, 20);

    intArray = sortIntArray(intArray);

    log(JSON.stringify(intArray));

    //HW2: Sort this array according by age ascending (ie youngest cat to oldest cat)
    // let allTheCats = getRandomCatArray(5);

    // allTheCats = sortCatsByAge(allTheCats);
    
    // log(JSON.stringify(allTheCats));
}

///ADD YOUR FUNCTIONS HERE///

function sortIntArray(intArray) {
    return intArray;
}

function sortCatsByAge(catArray) {
    return catArray;
}