# Tổng hợp kiến thức Lesson 02

## Git

### Các vùng trong Git
1. **Local**: Vùng khi thư mục chưa được khởi tạo git (chưa chạy `git init`)
2. **Working Directory**: Vùng chứa các file sau khi đã khởi tạo git
3. **Staging Area**: Vùng chứa các file đã được thêm vào bằng `git add`
4. **Repository**: Vùng chứa các commit đã được tạo

### Các lệnh Git cơ bản
- `git init`: Khởi tạo repository git trong thư mục hiện tại
- `git add <file_name>`: Thêm file cụ thể vào staging area
- `git add .`: Thêm tất cả các file thay đổi vào staging area
- `git commit -m "message"`: Tạo commit với message từ các file trong staging area

## JavaScript

### Khai báo biến
- `const`: Khai báo hằng số, không thể thay đổi giá trị sau khi khai báo
- `let`: Khai báo biến, có thể thay đổi giá trị

### Toán tử
- `%`: Toán tử chia dư, dùng để kiểm tra số chẵn/lẻ
  - Số chẵn: `x % 2 === 0`
  - Số lẻ: `x % 2 === 1`

### Câu điều kiện
- `if`: Kiểm tra điều kiện
- `if...else`: Kiểm tra điều kiện với nhánh else
- `if...else if...else`: Kiểm tra nhiều điều kiện

### Vòng lặp
- `for`: Vòng lặp với số lần lặp xác định
  - `for (let i = start; i <= end; i++)`: Lặp tăng dần
  - `for (let i = start; i >= end; i--)`: Lặp giảm dần
  - `for (let i = start; i <= end; i += step)`: Lặp với bước nhảy

### Console.log
- `console.log("message")`: In chuỗi
- `console.log(variable)`: In giá trị biến
- `console.log("message" + variable)`: Nối chuỗi với dấu +
- `console.log("message", variable)`: In nhiều giá trị với dấu phẩy

