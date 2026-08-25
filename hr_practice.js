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


function timeConversion(s) {
    // Write your code here
    let amOrPm = s.slice(-2);
    let mutatedS = s.slice(0, 8);
    let convertedToArr = mutatedS.split(':');
    let hours = convertedToArr.shift();
    const timeList = {
        "01": "13",
        "02": "14",
        "03": "15",
        "04": "16",
        "05": "17",
        "06": "18",
        "07": "19",
        "08": "20",
        "09": "21",
        "10": "22",
        "11": "23",
        "12": "00"
    }
    if ((amOrPm == 'PM' && hours != '12') || (amOrPm == 'AM' && hours == '12')) {
        let replacement = timeList[hours];
        convertedToArr.unshift(replacement)
    } else {
        convertedToArr.unshift(hours);
    }
    
    const formattedTime = convertedToArr.join(':');
    return formattedTime;
}

function timeConversion1(s) {
    const period = s.slice(-2);
    let hour = Number(s.slice(0, 2));

    if (period === 'AM' && hour === 12) {
        hour = 0;
    } else if (period === 'PM' && hour !== 12) {
        hour += 12;
    }

    return String(hour).padStart(2, '0') + s.slice(2, 8);
}

function miniMaxSum(arr) {
    // Write your code here
    const sortedArr = arr.sort((a, b) => a - b);
    const minValueSum = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3];
    const maxValueSum = sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4];
    
    const min_max = minValueSum + ' ' + maxValueSum;
    console.log(min_max);
}

function miniMaxSum(arr) {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;

    for (const num of arr) {
        sum += num;
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    console.log(sum - max, sum - min);
}

function weightedUniformStrings(s, queries) {
    // Write your code here
    const alphabetWeights = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26
    }
    const result = [];
    const weights = [];
    let uniform = '';
    
    for (let i = 0; i < s.length; i++) {
        let weightToPush;
        if (i == 0) {
            weightToPush = alphabetWeights[s[i]];
            weights.push(weightToPush);
            uniform = s[i];
            continue;
        };
        if (s[i] == s[i-1]) {
            uniform += s[i];
            weightToPush = alphabetWeights[s[i]] * uniform.length;
            weights.push(weightToPush);
        } else {
            weightToPush = alphabetWeights[s[i]];
            weights.push(weightToPush);
            uniform = s[i];
        }
    }
    
    for (let q of queries) {
        if (weights.includes(q)) {
            result.push('Yes');
        } else {
            result.push('No');
        };
    };
    
    return result;
}

function weightedUniformStrings(s, queries) {
    const weights = new Set();

    let currentWeight = 0;
    let previousChar = '';

    for (const char of s) {
        const charWeight = char.charCodeAt(0) - 96;

        if (char === previousChar) {
            currentWeight += charWeight;
        } else {
            currentWeight = charWeight;
        }

        weights.add(currentWeight);
        previousChar = char;
    }

    return queries.map(query =>
        weights.has(query) ? 'Yes' : 'No'
    );
}

function separateNumbers(s) {
    if (s[0] === '0') {
        console.log('NO');
        return;
    }

    const length = s.length;

    for (let firstLength = 1; firstLength <= Math.floor(length / 2); firstLength++) {
        const firstNumberString = s.slice(0, firstLength);
        const firstNumber = BigInt(firstNumberString);

        let currentNumber = firstNumber;
        let generatedString = '';
        console.log(generatedString.length);
        
        while (generatedString.length < length) {
            console.log(`generatedString is length: ${generatedString.length}`);
            generatedString += currentNumber.toString();
            currentNumber++;
        }

        if (generatedString === s) {
            console.log(`YES ${firstNumberString}`);
            return;
        }
    }

    console.log('NO');
}

function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = grades.map(grade => {
        if (grade < 38) return grade;
        let rest = grade % 5;
        if ((rest) >= 3) {
            return grade + (5 - rest);
        } else return grade;
    })
    
    return roundedGrades;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesInRangeCount = 0;
    let orangesInRangeCount = 0;
    for(let apple of apples) {
        let location = a + apple;
        if (location >= s && location <= t) applesInRangeCount++;
    };
    
    for(let orange of oranges) {
        let location = b + orange;
        if (location >= s && location <= t) orangesInRangeCount++;
    }
    
    console.log(applesInRangeCount + '\n' + orangesInRangeCount)
}


/* x1 + n*v1 = x2 + n*v2

n*v1 - n*v2 = x2 - x1

n(v1 - v2) = x2 - x1

n = (x2 - x1) / (v1 - v2) */
function kangaroo(x1, v1, x2, v2) {
    if (v2 >= v1) return "NO";

    return (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
}

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (v2 >= v1) return "NO";
    let kang1 = x1;
    let kang2 = x2;
    
    while (kang1 < kang2) {
        kang1 += v1;
        kang2 += v2;
    }
    
    return kang1 == kang2 ? "YES" : "NO";
}


function getTotalX(a, b) {
    // Write your code here
    let total = 0;
    for (let i = 1; i <= Math.min(...b); i++) {
        let flagman = false;
        for (let num of a) {
            if (i % num == 0) {
                flagman = true;
            } else {
                flagman = false;
                break;
            }
        };
        if (!flagman) continue;
        
        for (let num of b) {
            if (num % i == 0) {
                flagman = true;
            } else {
                flagman = false;
                break;
            }
        };
        
        if (flagman) {
            total++;
        };
    };
    return total;
}

function breakingRecords(scores) {
    // Write your code here
    let initMax = scores[0];
    let maxBreaktrough = 0;
    let initMin = scores[0];
    let minBreaktrough = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > initMax) {
            initMax = scores[i];
            maxBreaktrough++;
        };
        if (scores[i] < initMin) {
            initMin = scores[i];
            minBreaktrough++;
        };
    }
    
    return [maxBreaktrough, minBreaktrough];
}


function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let counter = 0;
    for (let i = 0; i < ar.length; i++) {
        let currentNum = ar[i];
        let restToCalc = ar.slice(i+1);
        for (let num of restToCalc) {
            console.log(currentNum + num)
            if ((currentNum+num)%k == 0) {
                counter++;
            }
        }
    }
    return counter;
}

function migratoryBirds(arr) {
    let list = {};

    for (let num of arr) {
        if (list[num] === undefined) {
            list[num] = 1;
        } else {
            list[num]++;
        }
    }

    let maxCount = 0;
    let lowestType = Infinity;

    for (let key in list) {
        if (
            list[key] > maxCount ||
            (list[key] === maxCount && Number(key) < lowestType)
        ) {
            maxCount = list[key];
            lowestType = Number(key);
        }
    }

    return lowestType;
}

function dayOfProgrammer(year) {
    // Write your code here
    if (year === 1918) {
        return "26.09.1918";
    }

    let isLeapYear;

    if (year < 1918) {
        isLeapYear = year % 4 === 0;
    } else {
        isLeapYear =
            year % 400 === 0 ||
            (year % 4 === 0 && year % 100 !== 0);
    }

    const day = isLeapYear ? 12 : 13;

    return `${day}.09.${year}`;
}