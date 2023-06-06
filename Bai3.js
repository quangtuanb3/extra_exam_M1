// Bài 3: Đếm tần suất xuất hiện của 1 giá trị x trong ma trận các số nguyên
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [4, 2, 7], [8, 2, 6]];
let number = 2;

function getFrequency(number, matrix) {
    let frequency = 0;
    for (row of matrix) {
        for (num of row) {
            if (num === number) {
                frequency += 1;
            }
        }
    }
    return frequency;
}
let total = getFrequency(number, matrix);
console.log(total);