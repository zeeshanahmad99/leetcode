/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2) return 0

    let buyPrice = prices[0]
    let sellPrice = prices[0]
    let lastProfit = 0
    for(let i=1; i<prices.length; i++) {
        const val = prices[i]
        if(val < buyPrice) {
            const profit = sellPrice - buyPrice
            if(profit > lastProfit) {
                lastProfit = profit
            }
            
            buyPrice = val
            sellPrice = val
        } else if(val > sellPrice) {
            sellPrice = val
        }
    }

    const profit = sellPrice <= buyPrice ? 0 : sellPrice - buyPrice

    return lastProfit > profit ? lastProfit : profit
};

/* 
    [7,1,5,3,6,4]
     + - 
 */