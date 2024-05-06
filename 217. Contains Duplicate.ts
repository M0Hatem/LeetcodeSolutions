function containsDuplicate(nums: number[]): boolean {
    let founded: boolean = false;
    for (const num of nums) {
        const indexOfNum = nums.indexOf(num)
        const newArr = nums.slice(indexOfNum + 1)

        for (const numElement of newArr) {
            if (numElement == num) {
                founded = true
                break
            }
        }
    }
    return founded
}

console.log(containsDuplicate([1,23,4,4]))