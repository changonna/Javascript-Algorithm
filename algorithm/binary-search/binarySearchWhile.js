const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

let n = 10;
let target = 7;
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// 이진 탐색 수행 결과 출력
let result = binarySearch(arr, target, 0, n - 1);
if (result == -1) console.log(`원소가 존재하지 않습니다.`);
else console.log(`${result + 1}번째 원소입니다.`);
