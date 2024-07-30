/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const cache = {}
    for(let val of nums) {
        if(cache[val]) return true
        cache[val] = true
    }
    return false
};