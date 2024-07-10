/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let count = 0
    logs.forEach(log => {
        if(log === '../') {
            if(count !== 0) count--
        } else if(log !== './') {
            count++
        }
    })
    return count
};