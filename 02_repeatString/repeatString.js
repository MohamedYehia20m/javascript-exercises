const repeatString = function(str , NoTimes) {
    if (NoTimes < 0) {
        return 'ERROR'
    }
    new_str = '';

    for (let i = 0 ;i < NoTimes ;i++)
    {
        new_str = new_str.concat(str);
    }

    return new_str
};

// Do not edit below this line
module.exports = repeatString;
