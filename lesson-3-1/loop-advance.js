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
        if(i === 1 || i === rows || j === 1 || j === cols) {
            hcn += '*';
        } else {
            hcn += ' ';
        }
    }
    hcn += '\n';
}
console.log(hcn);

console.log('// Bai 5');
