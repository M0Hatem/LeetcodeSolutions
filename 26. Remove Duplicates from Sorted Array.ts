function removeDuplicates(nums: number[]): number {
   let left:number= 1
    for (let i:number =1 ;i <nums.length;i++){
        if (nums[i]!= nums[i-1]){
            nums[left]=nums[i]
            left++
        }
    }

    return left
}
console.log(removeDuplicates([1,1,2,4,4,5]))