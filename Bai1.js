// Bài 1: Hãy đưa chẵn về đầu, lẻ về cuối, phần tử 0 nằm giữa mảng

let numbers = [1, 2, 3, 4, 5, 6, 7, 0, 10, 8, 2, 1];

function sort(numbers) {
    let result = [];
    for (number of numbers) {
        if (number === 0) {
            result.push(number);
        }
    }
    for (number of numbers) {
        if (number % 2 == 0 && number != 0) {
            result.unshift(number);
        } else if (number % 2 != 0) {
            result.push(number);
        }
    }
    return result;
}
let result = sort(numbers);
console.log(result)