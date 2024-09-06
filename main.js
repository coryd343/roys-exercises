import {log, getRandomCatArray, getRandomIntArray, swap, findPartitionPosition, sortAndTime, getAverageExecutionTime} from './helpers.js';

document.getElementById('testButton').addEventListener('click', test);

/**
 * Test your functions here!
 */
export function test() {
    //HW1: Sort this array of integers in ascending order
    let times = 20;
    let numElements = 20000;
    let maxVal = 50;
    let intArray = getRandomIntArray(numElements, maxVal);

    // WARNING! Bubble sort takes about 60 seconds to run 20 iterations on 20000 elements (~3 seconds per iteration)
    // log(`TESTING BUBBLE SORT`);
    // let bubbleSortTime = getAverageExecutionTime(intArray, bubbleSort, times);
    // log(`Bubble sort average runtime: ${bubbleSortTime} milliseconds`);

    intArray = getRandomIntArray(numElements, maxVal);
    log(`TESTING INSERTION SORT`);
    let insertionSortTime = getAverageExecutionTime(intArray, insertionSort, times);
    log(`Insertion sort average runtime: ${insertionSortTime} milliseconds`);

    intArray = getRandomIntArray(numElements, maxVal);
    log(`TESTING QUICK SORT`);
    let quickSortTime = getAverageExecutionTime(intArray, quickSort, times);
    log(`Quick sort average runtime: ${quickSortTime} milliseconds`);

    //Breakeven point appears to be ~25000 elements. After that, quicksort is faster.



    //HW2: Sort this array according by age ascending (ie youngest cat to oldest cat)
    // let allTheCats = getRandomCatArray(5);

    // allTheCats = sortCatsByAge(allTheCats);
    
    // log(JSON.stringify(allTheCats));
}

///ADD YOUR FUNCTIONS HERE///

function insertionSort(intArray) {
    //Insertion Sort Algorithm:
    let iterations = 0;
    //Create an outer loop that loops from the second element to the end of the array (the first element is considered sorted)
    for (let i = 1; i < intArray.length; i++) {
        //Create an inner loop which loops backward from the index of the outer loop until the first element of the array
        for (let j = i - 1; j >= 0; j--) {
            // log(JSON.stringify(intArray) + `, i:${i}, j:${j}`);
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
    // log(`Sorted in ${iterations} iterations`);

    return intArray;
}

function sortCatsByAge(catArray) {
    return catArray;
}

function bubbleSort(theArray) {
    for (let i = 0; i < theArray.length; i++) {
        for (let j = 0; j < theArray.length; j++) {
            if (theArray[j] > theArray[j + 1]) {
                swap(theArray, j, j + 1);
            }
        }
    }
}

/**
 * Sorts the given array using the quicksort algorithm.
 * @param {*} theArray 
 */
function quickSort(theArray) {
    quickSortRecursive(theArray, 0, theArray.length - 1);
}

/**
 * Sorts the given array using the quicksort algorithm.
 * @param {Array} theArray 
 * @param {number} start 
 * @param {number} end 
 * @returns 
 */
function quickSortRecursive(theArray, start, end) {
    //Base case
    if (end < start)
        return;

    //Find the index of the pivot
    let pivot = findPartitionPosition(theArray, start, end);

    //Recurse on each side of the partition
    quickSortRecursive(theArray, start, pivot - 1);
    quickSortRecursive(theArray, pivot + 1, end);
    return;
}