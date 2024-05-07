function shuffle(nums: number[], n: number): number[] {

    const newArr: number[] = []
    let r: number = n

    for (let i: number = 0; i < n; i++) {
        newArr.push(nums[i])
        newArr.push(nums[r])
        r++

    }
    return newArr
}

console.log(shuffle([1, 2, 3, 4, 5, 6], 3))