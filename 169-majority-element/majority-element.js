/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = nums[0], majority = 0
    for(let num of nums) {
        if(res === num) majority++
        else majority--
        if(majority === 0) {
            res = num
            majority = 1
        }
    }

    return res
    
    
    
    // const halfLength = Math.floor(nums.length / 2)
    // const cache = new Map()
    // let majority = [nums[0], 1]
    // for(let num of nums) {
    //     if(!cache.has(num)) {
    //         cache.set(num, 1)
    //     } else {
    //         const val = cache.get(num) + 1
    //         cache.set(num, val)
    //         if(val > majority[1]) majority = [num, val]
    //     }
    // }
    // return majority[0]
};