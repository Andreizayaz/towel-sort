// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (matrix == undefined || matrix.length === 0) return [];

    let towelArray =[];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            towelArray= towelArray.concat(matrix[i]);
        } else {
            towelArray= towelArray.concat(matrix[i].reverse());
        }
    }
   
    return towelArray;
}
