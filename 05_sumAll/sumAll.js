const sumAll = function(start ,end) {
    if ((Number.isInteger(start) && start > 0) && (Number.isInteger(end) && end > 0))
    {
        return (start + end)*(Math.max(start,end)/2);
    }
    else
    {
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = sumAll;
