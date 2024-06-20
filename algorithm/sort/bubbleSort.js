const bubbleSort = (arr) => {
    const n = arr.length; // 5
    for (let i = n - 1; i > 0; i--) { // 4   3  2 1
        for (let j = 0; j < i; j++) { // 0123 012 01 0
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}


const arr = [1, 5, 3, 9, 7];
console.log(bubbleSort(arr)); // [1, 3, 5, 7, 9]