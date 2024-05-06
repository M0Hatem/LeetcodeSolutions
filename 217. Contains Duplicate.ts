function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>(nums);
    console.log(set)
    return (set.size < nums.length);
}
console.log(containsDuplicate([1,2,3,4,2]))