import {log, getRandomCatArray} from './helpers.js';

document.getElementById('testButton').addEventListener('click', test);

/**
 * Test your functions here!
 */
export function test() {
    //HW: Sort this array according by age ascending (ie youngest cat to oldest cat)
    const allTheCats = getRandomCatArray(5);

    allTheCats = sortCatsByAge(allTheCats);
    
    log(JSON.stringify(allTheCats));
}

///ADD YOUR FUNCTIONS HERE///

function sortCatsByAge(catArray) {
    return catArray;
}