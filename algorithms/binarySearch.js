
/*
    *START*
    Generate a random sorted array!
*/
let numbers = []

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateArray(howMany) {

    let minNum = 1;
    let maxNum = 20;
    for (let i=0;i<howMany;i++) {
        minNum = getRandomNum(minNum,maxNum);
        maxNum = minNum + Math.floor(Math.random() * 20);
        numbers.push(minNum);
    }

    console.log(numbers);
}

generateArray(20);
/*
    *END*
    Generated random sorted array!
*/

/*
    *START*
    Binary search
*/

// What to search for
let numberToSearch = numbers[Math.floor(Math.random() * (numbers.length - 0) + 0)]

/*
    Binary search splits the array in half and compares the mid point with the target.
    If the target is lower, it searches higher, if it's higher, it searches lower.
    So this only works on a SORTED array.

    Binary Searches Big O notation is 0(log n), because it cuts the search area in half
    after every iteration.
*/
function binarySearch(array, target) {
    console.log(target)
    let currentElement;
    let minIndex = 0;
    let maxIndex = array.length - 1;
    
    while (minIndex <= maxIndex) {
        let mid = Math.floor((maxIndex + minIndex) / 2);
        if (array[mid] === target) {
            console.log("target found at index: " + mid)
            break;
        } else {
            if (target < array[mid]) {
                maxIndex = mid;
            } else {
                minIndex = mid;
            }
        }
    }
}

binarySearch(numbers, numberToSearch);

