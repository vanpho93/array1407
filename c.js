function myMap(arr, doSth) {
    let arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        arrOutput.push(doSth(arr[i]));
    }
    return arrOutput;
}

const arrNum = [1, 4, 6, 8, 4];

console.log(myMap(arrNum, e => e * e));
// => [1, 16, 36, 64, 16]
console.log(myMap(arrNum, e => e * 2));

console.log(arrNum.map(e => e * e));
// => [2, 8, 12, 16, 9]

// => [18, 10, 16]
