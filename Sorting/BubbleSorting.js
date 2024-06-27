function bubbleSorting(array) {

    for (let i = 0; i < array.length; i++) {
        let flag = false
        for (let j = 0; j < array.length - 1 - i; j++) { //adjust the inner loop to run only up to array.length - 1 - i
            if (array[j] > array[j + 1]) {
                let curr = array[j]
                array[j] = array[j + 1]
                array[j + 1] = curr
                flag = true
            }
        }
        if (flag == false)
            break;

    }
    return array
}
console.log(bubbleSorting([9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(bubbleSorting([9, 3, 3, 5, 65, 6, 7, 87, 8, 6, 6, 6, 5, 4, 34, 3, 2, 2, 334, 5, 677, 43, 21, 1, 2, 3, 4, 5, 6, 60, 0, 1, 0, 5, 4, 3]))