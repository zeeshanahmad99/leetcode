/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const cache = new Map
    for(let val of nums) {
        if(cache.has(val)) return true
        cache.set(val, true)
    }
    return false
};