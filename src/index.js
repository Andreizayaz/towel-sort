// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (matrix == undefined || matrix.length === 0) return [];

    let str = '';

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            str += matrix[i].join();
        } else {
            str += ',' + matrix[i].reverse().join() + ',';
        }
    }

    let towelArray = str.split(',');

    if (towelArray[towelArray.length - 1] === '') {
        towelArray.splice(towelArray.length - 1, 1);
    }

    return towelArray;
}
