// Написати функцију која исписује све елементе низа који су дељиви са 5

let x = [1, 2, 3, 4, 5, 10, 15, 23, 1, 5];

function divisibleByFive(arr) {
    let y = [];
    for (let el of arr) {
        if (el % 5 == 0) {
            y.push(el);
        }
    }
    return y
}
console.log(divisibleByFive(x));