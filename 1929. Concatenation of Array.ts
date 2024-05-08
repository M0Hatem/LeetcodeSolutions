function getConcatenation(nums: number[]): number[] {
    const ans:number[] = Array(nums.length*2)
    let i = 0;
    while(i<nums.length){
        ans[i]=nums[i]
        ans[nums.length+i]=nums[i]
        i++
    }
    return ans
}

console.log(getConcatenation([1,2,3]))