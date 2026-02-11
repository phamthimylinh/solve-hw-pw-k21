console.log('// Bai 1');
for (let i = 2; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('--------------------------------');
}

console.log('// Bai 2');
let result = '';
for (let i = 1; i <= 20; i++) {
    result += i + ' ';
    if (i % 5 === 0) {
        result += '\n';
    }
}
console.log(result);

console.log('// Bai 3');
let tamgiac = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        tamgiac += j + ' ';
    }
    tamgiac += '\n';
}
console.log(tamgiac);

console.log('// Bai 4');
let hcn = '';
let cols = 8;
let rows = 5;

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
        // hang dau hang cuoi, cot dau cot cuoi
        if (i === 1 || i === rows || j === 1 || j === cols) {
            hcn += '*';
        } else {
            hcn += ' ';
        }
    }
    hcn += '\n';
}
console.log(hcn);

console.log('// Bai 5');
const arrs = [2, 4, 6, 8, 3, 7, 5, 1, 2, 4, 6, 8, 3, 7, 5, 1];
for (let i = 0; i < arrs.length; i++) {
    for (let j = i + 1; j < arrs.length - 1; j++) {
        if (arrs[i] + arrs[j] === 10) {
            console.log(`${arrs[i]} + ${arrs[j]} = ${arrs[i] + arrs[j]}`);
        }
    }
}

console.log('// Bai 5: cach 2');
const target = 10;
const seenNumbers = new Set();
const pairs = [];

for (let i = 0; i < arrs.length; i++) {
    let complement = target - arrs[i];
    if (seenNumbers.has(complement)) {
        pairs.push(`${complement} + ${arrs[i]} = 10`);
    }
    seenNumbers.add(arrs[i]);
}

console.log(pairs.join('\n'));

// arrs.forEach(num => {
//     let complement = target - num;
//     if (seenNumbers.has(complement)) {
//         // Nếu số bù đã tồn tại trong Set, ta có một cặp
//         pairs.push(`${complement} + ${num} = 10`);
//     }

//     // Thêm số hiện tại vào Set để các số sau "tìm" nó
//     seenNumbers.add(num);
// });
// console.log(pairs.join('\n'));