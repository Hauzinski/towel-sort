
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return (!matrix) ? [] : matrix.map((value, index) => (index % 2 ? value.sort((a, b) => b - a) : value.sort((a, b) => a - b))).flat(1);
}
