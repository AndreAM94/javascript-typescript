module.exports = {
    impureArrayAdd: function (arr, name, age) {
        arr.push({
            name: name,
            age: age
        });
        return arr;
    },
    pureArrayAdd: function(arr, name, age) {
        // versione es5
        return [].concat(arr, {
            name: name,
            age: age
        })
        // versione es6
        // return [...arr, { name, age}]
    }
};