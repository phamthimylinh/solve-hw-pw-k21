console.log('// Bai 1');
function multiply(a, b) {
    return a * b;
}
console.log('multiply', multiply(2, 3));

console.log('// Bai 2');
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}
console.log('findMin', findMin(1, 1, 2));
console.log('findMin', findMin(1, 2, 1));

console.log('// Bai 3');
function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i]);
        }
    }
    return topStudents;
};
console.log('getTopStudents', getTopStudents([
    { name: 'John', score: 85 },
    { name: 'Jane', score: 90 },
    { name: 'Jim', score: 75 },
], 80));

console.log('// Bai 4');
function calculateInterest(principal, rate, year) {
    return principal + principal * rate * year / 100;
};
console.log('calculateInterest', calculateInterest(1000, 5, 1));
