//Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)

function maxNum(num1, num2, num3) {
    var max = 0;
    if ((num1 >= num2) && (num1 >= num3)) {
        max = num1;
    }
    else if ((num2 >= num1) && (num2 >= num3)) {
        max = num2;
    }
    else {
        max = num3;
    }
    return max;
}

let maxNumber = maxNum(20,22,16)
console.log(maxNumber);
