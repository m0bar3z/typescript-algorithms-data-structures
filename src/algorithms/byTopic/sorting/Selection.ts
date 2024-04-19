function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


function SelectionSorting(arr: number[]) {
  const firstUnsortedIndex = -1
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i])
        swap(arr, i, j);
    }
  }
}

const arr = [3, 99, 1, 12, 43, 56, 20];
SelectionSorting(arr);

console.log('arr', arr);