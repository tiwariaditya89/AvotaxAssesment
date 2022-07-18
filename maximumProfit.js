function maxProfitWithKTransactions(prices, k) {
    let res = maxProfit(prices, 0, prices.length-1);
    console.log(res);
}

function maxProfit(prices, start, end, k) {
    if (end <= start || k==0)
        return 0;
    let profit = 0;
    for (let i = start; i < end; i++) 
    {
        for (let j = i + 1; j <= end; j++)
        {
            if (prices[j] > prices[i]) 
            {
                k--;
                let currProfit = prices[j] - prices[i] + maxProfit(prices, start, i - 1, k) + maxProfit(prices, j + 1, end, k);
                profit = Math.max(profit, currProfit);
            }
        }
    }
    return profit;
}

exports.maxProfitWithKTransactions=maxProfitWithKTransactions;
