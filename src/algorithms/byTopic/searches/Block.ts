export default function blockSearch(sortedArr: number[], searchValue: number): number {
  const arraySize = sortedArr.length;
  
  if (!arraySize) return -1;
  const jumpSize = Math.floor(Math.sqrt(arraySize));

  let blockStart = 0;
  let blockEnd = jumpSize;

  while (searchValue > sortedArr[Math.min(arraySize, blockEnd) - 1]) {
    blockStart = blockEnd;
    blockEnd += jumpSize;

    if (blockStart > arraySize) return -1;
  }

  while (blockStart < Math.min(blockEnd, arraySize)) {
    if(sortedArr[blockStart] === searchValue) return blockStart;

    blockStart +=1;
  }

  return -1;
}