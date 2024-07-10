/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const checkPalindrome = (word) => {
        const shouldConsole = word === 'ada'
        let left = 0, right = word.length - 1
        while(left < right) {
            const leftVal = word[left]
            const rightVal = word[right]
            if(leftVal !== rightVal) return false
            left++
            right--
        }
        return true
    }

    for(const word of words) {
        if(checkPalindrome(word)) return word
    }

    return ''
};