const sumAll = function(a, b) {
    let min, max;

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } else if (a < 0 || b < 0) {
        return 'ERROR';
    } else if (a < b) {
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
