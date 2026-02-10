console.log('// Bai 1');
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log('sum 1 -> 100: ', sum);

console.log('// Bai 2');
for (let i = 2; i <= 9; i++) {

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('--------------------------------');
}

console.log('// Bai 3');
const oddArr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        oddArr.push(i);
    }
}
console.log('Array of odd numbers: ', oddArr);

console.log('// Bai 4');
for (let i = 1; i <= 10; i++) { 
    console.log(`user${i}@example.com`);
}

console.log('// Bai 5');
const revenue = [
    {
        month: 1,
        total: 100
    },
    {
        month: 2,
        total: 100
    },
    {
        month: 3,
        total: 100
    },
    {
        month: 4,
        total: 100
    },
    {
        month: 5,
        total: 100
    },
    {
        month: 6,
        total: 100
    },
    {
        month: 7,
        total: 100
    },
    {
        month: 8,
        total: 100
    },
    {
        month: 9,
        total: 100
    },
    {
        month: 10,
        total: 100
    },
    {
        month: 11,
        total: 100
    },
    {
        month: 12,
        total: 100
    },
];

let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
    totalRevenue += revenue[i].total;
}
console.log('Total revenue: ', totalRevenue);

let totalRevenue2 = 0;
revenue.forEach(item => {
    totalRevenue2 += item.total;
});
console.log('Total revenue: ', totalRevenue2);

let totalRevenue3 = 0;
revenue.reduce((acc, item) => {
    return acc + item.total;
}, 0);
console.log('Total revenue: ', totalRevenue3);
