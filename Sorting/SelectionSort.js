function selectionSort(array) {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
        return array;
    }
}


console.log(selectionSort([9,8,6,4,2]))
console.log(selectionSort([9, 3, 3, 5, 65, 6, 7, 87, 8, 6, 6, 6, 5, 4, 34, 3, 2, 2, 334, 5, 677, 43, 21, 1, 2, 3, 4, 5, 6, 60, 0, 1, 0, 5, 4, 3]));
console.log(selectionSort([9, 3, 3, 5, 65, 6, 7, 87, 8, 1,2,3,3,3,2,2,1,2,3,4,6,7,7,8,9,9,7,7,6,5,55,44,33,22,11,11,22,33,44,55,66,77,88,99,0,90,98,96,48,463,366,74,47,48,58,58,58,689,574,63,53,52,5,46,99,88,7,6,6,5,4,4,3,3,6, 6, 6, 5, 4, 34, 3, 2, 2, 334, 5, 677, 43, 21, 1, 2, 3, 4, 5, 6, 60, 0, 1, 0, 5, 4, 3]));
