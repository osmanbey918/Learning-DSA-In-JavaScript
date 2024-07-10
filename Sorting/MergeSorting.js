// Merge function to merge two sorted arrays
function merge(left, right) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and add the smaller element to mergedArray
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from left array
    while (leftIndex < left.length) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
    }

    // Add remaining elements from right array
    while (rightIndex < right.length) {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
    }

    return mergedArray;
}

// Merge sort function
function mergeSort(arr) {
    // Base case: if array has 0 or 1 element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle index
    const mid = Math.floor(arr.length / 2);

    // Divide the array into left and right halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

// Example usage:
const array = [5, 3, 8, 4, 2, 7, 1];
console.log("Original array:", array);

const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);
