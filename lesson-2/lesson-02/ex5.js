// Lặp từ 1 tới 100
for (let i = 1; i <= 100; i++) {
    // Nếu giá trị của vòng lặp chia hết cho 2, in "số <i> là số chẵn"
    if (i % 2 === 0) {
        console.log("số " + i + " là số chẵn");
    } else {
        // Nếu giá trị của vòng lặp không chia hết cho 2, in "số <i> là số lẻ"
        console.log("số " + i + " là số lẻ");
    }
}

