/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0

    for(let i=0; i<s.length; i++) {
        let value = symbols[s[i]]
        
        if(i+1 < s.length) {
            const value2 = symbols[s[i+1]]
            if(value2 > value) {
                value = value2 - value
                i++
            }
        } 
        result += value
    }

    return result
};