// Bài 2: Tính tổng các giá trị trên 1 dòng trong ma trận các số nguyên

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [4, 2, 7]]

function sumRow(row) {
    let sum = 0;
    for (number of row) {
        sum += number;
    }
    return sum;
}

function sumEachRow(matrix) {
    let sum = [];
    for (row of matrix) {
        sum.push(sumRow(row))
    }
    return sum;
}

let sum = sumEachRow(matrix);
console.log(sum);

