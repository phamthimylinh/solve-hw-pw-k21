> Lưu ý tất cả các bài tập hãy làm ở repo `pw-course` đã tạo ở bài học số 1

# Kiến thức bổ sung để làm bài
- Viết file ở định dạng markdown: https://youtu.be/RKhnKmsVb_k
- Câu điều kiện trong Javascript: https://youtu.be/k8OAVa-5K3Y
- Vòng lặp trong Javascript: https://youtu.be/9kQUepMJB-Y

# Tổng hợp kiến thức
Tại repo `pw-course` đã tạo từ lesson 1, hãy tạo file `tests/lesson-02/00-key-takeaway.md`, để tổng hợp lại các kiến thức được học trong bài

# Git
## Quy ước về "vùng local"
Ở trong bài học, ta tìm hiểu về 3 vùng: `working directory`, `staging area` và `repository`. Để có thể làm bài dễ hơn, hãy quy ước 1 vùng mới: cùng `local`.    

Vùng local là vùng khi 1 thư mục chưa được khởi tạo git (chưa gõ lệnh `git init`). Lúc này, tất cả các file sẽ nằm ở trong vùng local. Sau khi init, file sẽ di chuyển từ vùng local vào vùng `working directory`.  
Quy ước này chỉ có trong phạm vi trong lớp học của chúng ta thôi bạn nhé ^^

## Bài tập 
1. Hãy tạo file `tests/lesson-02/01-lythuyet-git.txt` để trả lời cho các câu hỏi sau:   
giải thích các câu lệnh: `git init`, `git add <file_name>`, `git add .`, `git commit -m "message"`.
2. Hãy tạo file `tests/lesson-02/02-cacvung-git.txt` để trả lời cho các câu hỏi sau:     
Trong một folder mới được tạo ra, mình thực hiện lần lượt các lệnh sau. Hãy liệt kê các file <u>**Theo từng vùng** sau khi thao tác</u> một loạt các lệnh sau (sẽ rất tuyệt nếu bạn không chạy lệnh trên máy thật, mà bạn suy nghĩ trong đầu để ra được kết quả; bạn sẽ nhớ rất lâu đấy^^):
   1. Tạo 3 file: `file1`, `file2`, `file3`
   2. Chạy lệnh: `git init`
   3. Chạy lệnh: `git commit -m"init project"`
   4. Chạy lệnh: `git add file1`
   5. Chạy lệnh: `git commit -m"add file1"`
   6. Chạy lệnh: `git commit -m"add file"`
3. Push bài tập lên GitHub

**<u>Lưu ý:</u>** đề bài là chính xác. Một số câu bạn sẽ thấy "hơi sai sai". Nhưng đó là "bẫy" mà mentor đã chuẩn bị nha^^.

# Javascript
Tại repo `pw-course` đã tạo từ lesson 1 hãy tạo folder `tests/lesson-02` để chứa code cho bài tập 2.

## Kiến thức bổ sung để làm bài: toán tử chia dư (%)
`%` sẽ trả về phần dư của phép tính.  
Giải sử:
- 3 % 3 = 0 (vì 3 chia hết cho 3, dư 0)
- 3 % 2 = 1 (vì 3 không chia hết cho 2, dư 1)
- 3 % 1 = 0 (vì 3 chia hết cho 1, dư 0)
- 1 % 2 = 0 (vì 1 không chia hết cho 2, dư 1)   
Ứng dụng tìm số chẵn, lẻ:
- Nếu là số lẻ, chia dư cho 2 = 1: x % 2 === 1
- Nếu là số chẵn, chia dư cho 2 = 0, x % 2 === 0

## Kiến thức bổ sung để làm bài: nếu kết hợp giá trị chuỗi và biến với `console.log()`
Ở bài học, ta đã biết dùng `console.log("message")` để in ra giá trị kiểu chuỗi, hay `console.log(<vaiable_name>)` để in ra giá trị của biến.    
Để in ra kết hợp nhiều giá trị kiểu chuỗi và giá trị của biến, ta có 2 cách như sau:
- console.log("Dùng dấu cộng như sau" + name)
- console.log("Hoặc dùng dấu phẩy", name)

## Kiến thức bổ sung để làm bài: nối chuỗi với toán tử +
Để nối chuỗi từ 2 biến, ta sử dụng dấu (+):
- const str1 = 'hello';
- const str2 = 'Playwright Viet Nam'
- console.log(str1 + str2) // helloPlaywright Viet Nam

# Bài tập khao báo biến và điều kiện
1. Tạo file `ex1.js` để giải bài sau:
   1. Khai báo một hằng số `number` với giá trị là 12.
   2. Khai báo một biến `name` với giá trị là "my number".
   3. Khai báo một biến isEven với giá trị là sai.
   4. Kiểm tra nếu `number` là số chẵn, gán lại `isEven` thành giá trị đúng.

2. Tạo file `ex2.js`, kiểm tra đoạn code sau sai ở đâu, sửa lại cho đúng và đưa nội dung vào file:
   ```
   const myName = 'Alex';
   myName = 'Nagi';

   console.log(myName)
   ```

3. Tạo file `ex3.js`, thêm vào code đáp án cho đề bài sau:
   1. Khai báo 1 hằng số với giá trị kiểu `Number` bất kỳ.
   2. In ra dòng sau ở console:
      1. Nếu hằng số lớn hơn 0: "Giá trị bạn nhập là số dương"
      2. Nếu hằng số nhỏ hơn 0: "Giá trị bạn nhập là số âm"
      3. Nếu hằng số = 0: "Giá trị bạn nhập là số 0"

4. Các thông số sức khoẻ được tính như sau:  
Cân nặng lý tưởng = số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10  
Mức cân tối đa = bằng số lẻ của chiều cao (tính bằng cm) 
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10  

Như vậy, nếu bạn cao 1.7m, tức 170cm thì: 
Cân nặng lý tưởng của bạn là: 70 x 9 : 10 = 63kg   
Cân nặng tối đa là: 70kg   
Cân nặng tối thiểu là: 70 x 8 : 10 = 56kg 
**Phạm vi áp dụng**: Công thức áp dụng cho chiều cao > 100  

Tạo file `ex4.js`, thêm vào code đáp án cho đề bài sau:
   1. Khai báo chiều cao của bạn (cm)
   2. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.

# Bài tập vòng lặp
1. Tạo file `ex5.js`, thêm vào code đáp ứng cho đề bài sau:
   1. Lặp từ 1 tới 100
   2. Trong mỗi vòng lặp, in ra:
      1. Nếu giá trị của vòng lặp chia hết cho 2, in "số <i> là số chẵn"
      2. Nếu giá trị của vòng lặp không chia hết cho 2, in "số <i> là số lẻ"
2. Tạo file `ex6.js`, thêm vào code đáp án cho đề bài sau:
   In ra giá trị từ 12 đến 30
3. Tạo file `ex7.js`, thêm vào code đáp án cho đề bài sau: 
   In ra các giá trị chia hết cho 3 từ 1000 đến 2000
4. Tạo file `ex8.js`, thêm vào code đáp án cho đề bài sau: 
   In các giá trị cách nhau 4 đơn vị từ 1 đến 100  
   ví dụ: 1, 5, 9, 13, ...
5. Tạo file `ex9.js`. thêm vào code đáp án cho đề bài sau: 
   In ra các giá trị tử 25 về 12 
   Ví dụ: 25, 24, ... 12
