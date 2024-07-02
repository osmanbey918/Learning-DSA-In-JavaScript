function insertionsort(nums) {

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i]; // Store the current element to be inserted
        let j = i - 1;

        // Shift elements of nums[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j];
            j--;
        }
        
        // Insert the stored current element into its correct position
        nums[j + 1] = current;
    }
    return nums
}
console.log(insertionsort([9, 3, 3, 5, 65, 6, 7, 87, 8, 6, 6, 6, 5, 4, 34, 3, 2, 2, 334, 5, 677, 43, 21, 1, 2, 3, 4, 5, 6, 60, 0, 1, 0, 5, 4, 3]))
console.log(insertionsort([9,8,7,6,5,4,3,2,1]))