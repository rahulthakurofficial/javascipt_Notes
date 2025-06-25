const Mynums = [1,2,3,4,5]

const myTotal = Mynums.reduce(function (acc, currval ){
    return acc + currval
}, 0)
console.log(myTotal);
