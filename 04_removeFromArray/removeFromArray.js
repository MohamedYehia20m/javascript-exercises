const removeFromArray = function() {
    let len = arguments.length;

    for (let i = 1 ;i < len ;i++)
    {
        arguments[0] = arguments[0].filter(element => element !== arguments[i]);
    }

    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
