/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = new Map()

    for(let i=0; i<nums.length; i++) {
        const num = nums[i]
        const diff = target - num
        if(hash.has(diff)) return [hash.get(diff), i]
        hash.set(num, i)
    }

    return []
};