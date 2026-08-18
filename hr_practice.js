function diagonalDifference(arr) {
    // Write your code here
    let sumLefTorigth = 0;
    let sumRightToLeft = 0;
    for (let i = 0; i < arr.length; i++) {
        let toSum = arr[i][i];
        sumLefTorigth += toSum;
        let toSumRight = arr[i][arr[i].length - 1 - i];
        sumRightToLeft += toSumRight;
    };
    return Math.abs(sumLefTorigth - sumRightToLeft);
}


function plusMinus(arr) {
    // Write your code here
    const n = arr.length;
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    arr.forEach(el => {
        if (el > 0) positive++;
        if (el < 0) negative++;
        if (el == 0) zeros++;
    });
    console.log((positive/n).toFixed(6));
    console.log((negative/n).toFixed(6));
    console.log((zeros/n).toFixed(6));
}

function staircase(n) {
    // Write your code here
    for (let i = 0; i < n; i++) {
        let spaces = ' '.repeat(n - 1 - i);
        let hashtags = '#'.repeat(i + 1);
        console.log(`${spaces}${hashtags}`)
    }
}

function birthdayCakeCandles(candles) {
    // Write your code here
    const tallestCandle = Math.max(...candles);
    console.log(tallestCandle);
    
    let countTallests = 0;
    candles.forEach(candle => {
        if (candle == tallestCandle) countTallests++;
    })
    return countTallests;
}