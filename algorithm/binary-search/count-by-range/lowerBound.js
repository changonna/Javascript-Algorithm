// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
};