export default function binarySearch(sortedArray: number[], searchValue: number): number {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  // let middleElement = startIndex + Math.floor((endIndex - startIndex) / 2);
  while (endIndex >= startIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

    if (sortedArray[middleIndex] === searchValue) {
      return middleIndex;
    }

    if (searchValue > sortedArray[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return -1;
}

