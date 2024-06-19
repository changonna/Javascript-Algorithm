/* 1. 선택 정렬 */

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i; // 가장 작은 원소의 인덱스
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) minIdx = j;
        }
        // swap
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
}

/* Test */
let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr); // [11, 12, 22, 25, 64]