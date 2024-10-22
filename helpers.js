function frequencyCounter(array) {
    let count = array.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});

    return count;
}

function parseNums(numsStr) {
    let nums = [];
    for (let i = 0; i < numsStr.length; i++) {
        let num = numsStr[i];
        if (isNaN(num)) {
            return new Error(`The value '${num}' at index ${i} is not a valid number.`);
        }
        nums.push(parseFloat(num));
    }
    return nums;
}

function findMean(array) {
    if (array.length == 0) {
        return 0;
    }
    let mean = (array.reduce(function(acc, next) {
        return acc + next;
    })) / array.length;
    return mean;
}

function findMedian(array) {
    array.sort((a, b) => a - b);

    let middle = Math.floor(array.length / 2);
    let median = null;

    if (array.length % 2 === 0) {
        median = (array[middle] + array[middle-1])/2
    } else {
        median = array[middle];
    }
    return median;
}

function findMode(array) {
    let freqCounter = frequencyCounter(array);
    let mode = null;
    let count = 0;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            count = freqCounter[key];
            mode = key;
        };
    };

    return mode;
}

module.exports = {
    frequencyCounter,
    parseNums,
    findMean,
    findMedian,
    findMode
  };