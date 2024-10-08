/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* 
    null 3  null 3
 */


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let leftVals = [root.left]
  let rightVals = [root.right]


  while(leftVals.length && rightVals.length) {
    // check if both vals are identical
    const isIdentical = checkIdentical(leftVals, rightVals)

    if(!isIdentical) return false

    // iterate through the left Vals and make new array
    leftVals = constructNewSubTreeValues(leftVals)
    rightVals = constructNewSubTreeValues(rightVals)
  }

  return true
};

function constructNewSubTreeValues(vals) {
    const newValues = []
    let isAllNulls = true

    for(let val of vals) {
      if(val?.left || val?.right) {
        isAllNulls = false
      }
      newValues.push(val?.left)
      newValues.push(val?.right)
    }

    if(isAllNulls) {
      return []
    }

    return newValues
}

function checkIdentical(leftVals, rightVals) {
    if(leftVals.length !== rightVals.length) {
        return false
    }
    
    for(let i=0, j = leftVals.length - 1; i < leftVals.length && j > -1; i++, j--) {
        const val1 = rightVals[i]
        const val2 = leftVals[j]

        if(val1 === null && val2 === null) continue
        
        if(val1?.val !== val2?.val) {
            return false 
        }
    }

    return true
}