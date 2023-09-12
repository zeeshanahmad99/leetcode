/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const last = strs.pop()

  let common = ''

  for(let i=0; i<last.length; i++) {
      const char = last[i]
      const same = strs.every((singleStr) => singleStr[i]===char)
      if(same) common += char
      else break; 
  }

  return common
};