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

console.log('// Bai 6');
const triangleRows = 5;
let triangle = '';
for (let i = triangleRows; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        triangle += `${j} `;
    }
    triangle += '\n';
}
console.log(triangle);

console.log('// Bai 6: cach 2');
const n = 5;
// Tạo mảng gốc: [1, 2, 3, 4, 5]
let base = Array.from({ length: n }, (_, i) => i + 1);

for (let i = n; i >= 1; i--) {
    // Cắt mảng từ vị trí 0 đến i và nối thành chuỗi
    console.log(base.slice(0, i).join(' '));
}

console.log('// Bai 6: cach 3');
function drawTriangle(n) {
    if (n < 1) return; // Điểm dừng

    let row = '';
    for (let i = 1; i <= n; i++) row += i + ' ';
    console.log(row);

    drawTriangle(n - 1); // Gọi lại chính nó với n - 1
}

drawTriangle(5);

console.log('// Bai 7');
let totalDays = 30;
let output = "Tuần 1:";

for (let i = 1; i <= totalDays; i++) {
    output += ` ${i}`;
    
    // Nếu là ngày cuối tuần (chia hết cho 7) và chưa phải ngày cuối tháng
    if (i % 7 === 0 && i < totalDays) {
        output += `\nTuần ${Math.floor(i / 7) + 1}:`;
    }
}

console.log(output);

console.log('// Bai 7: cach 2');
let thang = '';
for (let i = 1; i <= 5; i++) {
    thang += `Tuần ${i}: `;
    for (let j = 1; j <= 7; j++) {
        let day = (i - 1) * 7 + j;
        if (day > 30) {
            break;
        }
        thang += `${day} `;
    }
    thang += '\n';
}
console.log(thang);
