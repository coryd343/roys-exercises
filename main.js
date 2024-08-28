import {log, getRandomCatArray, getRandomIntArray, swap} from './helpers.js';

document.getElementById('testButton').addEventListener('click', test);

/**
 * Test your functions here!
 */
export function test() {
    //HW1: Sort this array of integers in ascending order
    let intArray = getRandomIntArray(10, 20);
    log(`Before: ${JSON.stringify(intArray)}`);

    intArray = sortIntArray(intArray);

    log(`After: ${JSON.stringify(intArray)}`);

    //HW2: Sort this array according by age ascending (ie youngest cat to oldest cat)
    // let allTheCats = getRandomCatArray(5);

    // allTheCats = sortCatsByAge(allTheCats);
    
    // log(JSON.stringify(allTheCats));
}

///ADD YOUR FUNCTIONS HERE///

function sortIntArray(intArray) {
    //Insertion Sort Algorithm:
    let iterations = 0;
    //Create an outer loop that loops from the second element to the end of the array (the first element is considered sorted)
    for (let i = 1; i < intArray.length; i++) {
        //Create an inner loop which loops backward from the index of the outer loop until the first element of the array
        for (let j = i - 1; j >= 0; j--) {
            log(JSON.stringify(intArray) + `, i:${i}, j:${j}`);
            //If the element at the index of the inner loop is greater than the one to its right, swap them
            if (intArray[j] > intArray[j + 1]) {
                intArray = swap(intArray, j, j + 1);
            }
            //Otherwise, break the inner loop
            else {
                break;
            }
            iterations++
        }
    }
    log(`Sorted in ${iterations} iterations`);

    return intArray;
}

function sortCatsByAge(catArray) {
    return catArray;
}