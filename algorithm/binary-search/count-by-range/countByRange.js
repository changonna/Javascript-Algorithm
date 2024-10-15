// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
};

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
const upperBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) end = mid;
    else start = mid + 1; // 최대한 오른쪽으로 이동하기
  }
  return end;
};

// 값이 [leftValue, rightValue]인 데이터의 개수를 반환하는 함수
const countByRange = (arr, leftValue, rightValue) => {
  // 유의 lowrBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
};

// 예시
let arr = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];
console.log(countByRange(arr, 4, 4)); // 값이 4인 데이터 개수 출력
console.log(countByRange(arr, -1, 3)); // [-1, 3] 범위의 데이터 개수 출력
