// Khai báo chiều cao của bạn (cm)
const height = 170; // ví dụ: 170cm (1.7m)

// Tính số lẻ của chiều cao (phần đơn vị)
// Ví dụ: 170cm -> số lẻ là 70
const lastTwoDigits = height % 100;

// Tính cân nặng lý tưởng = số lẻ x 9 / 10
const idealWeight = (lastTwoDigits * 9) / 10;

// Tính mức cân tối đa = số lẻ
const maxWeight = lastTwoDigits;

// Tính mức cân tối thiểu = số lẻ x 8 / 10
const minWeight = (lastTwoDigits * 8) / 10;

// In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng
console.log("Cân nặng lý tưởng:", idealWeight, "kg, Cân nặng tối đa:", maxWeight, "kg, Cân nặng tối thiểu:", minWeight, "kg");

