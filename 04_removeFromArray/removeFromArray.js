const removeFromArray = function(arr, ...itms) {
    for (let i = 0; i < arr.length; i++) {
        for (let itm of itms) {
            if (itm === arr[i]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
