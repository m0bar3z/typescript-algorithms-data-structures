export default function binarySearch(sortedArray, searchValue) {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;
    // let middleElement = startIndex + Math.floor((endIndex - startIndex) / 2);
    while (endIndex >= startIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        console.log("start index", startIndex);
        console.log("end index", endIndex);
        if (sortedArray[middleIndex] === searchValue) {
            return middleIndex;
        }
        if (searchValue > sortedArray[middleIndex]) {
            startIndex = middleIndex + 1;
        }
        else {
            endIndex = middleIndex - 1;
        }
    }
    return -1;
}
const arr = [43, 324, 32, 234, 453, 45, 7, 34, 9, 10, 11, 1, 2222];
const sortedArr = arr.sort((a, b) => a - b);
console.log('sorted', sortedArr);
const res = binarySearch(sortedArr, 199999);
console.log(res);
