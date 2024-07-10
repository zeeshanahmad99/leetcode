/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const halfLength = Math.floor(nums.length / 2)
    const cache = new Map()
    let majority = [nums[0], 1]
    for(let num of nums) {
        if(!cache.has(num)) {
            cache.set(num, 1)
        } else {
            const val = cache.get(num) + 1
            cache.set(num, val)
            if(val > majority[1]) majority = [num, val]
        }
    }
    return majority[0]
};