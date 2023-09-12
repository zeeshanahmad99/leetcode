/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    if(x === 0) return true

    let original = x
    let reverse = 0
    
    while(original) {
        const result = original % 10
        reverse = reverse * 10 + result
        original = Math.floor(original / 10)
    }
    
    return reverse === x
};