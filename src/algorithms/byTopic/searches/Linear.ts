function linearSearch(arr: number[], value: number): boolean {
  return arr.some(item => item === value);
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const res = linearSearch(arr, 343);

console.log(res)