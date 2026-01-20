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