// interface IBubbleSorting {
// }
// class BubbleSorting {
//   test() {
//     console.log('test')
//   }
// }
function bubbleSorting(arr) {
    let isSorted = false;
    let lasUnsorted = arr.length - 1;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < lasUnsorted; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                isSorted = false;
            }
        }
        lasUnsorted--;
    }
    return arr;
}
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const res = bubbleSorting([3, 99, 1, 12, 43, 56, 20]);
console.log('res', res);
export {};
