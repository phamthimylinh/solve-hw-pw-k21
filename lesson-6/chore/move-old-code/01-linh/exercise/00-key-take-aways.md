# Git

## Git remote
- Làm việc với kho lưu trữ từ xa như github

### Các lệnh thường dùng
- `git remote add orgin <url>`: Kết nối dự án ở máy bạn với 1 link kho chứa trên mạng (đặt tên là origin)
- `git remote -v`: Kiểm tra xem repo ở máy bạn đang kết nối với những "địa chỉ" remote nào.
- git remote remove <tên-remote>: Ngắt kết nối từ repo trên máy của bạn với 1 remote github

## Git push
- Đẩy code lên
- Sau khi commit các thay đổi ở máy, bạn cần đưa chúng lên server như github

### Các lệnh thường dùng
- `git push origin <branch-name>`: Đẩy code từ nhánh hiện tại lên nhánh tương ứng trên remote.
- `git push -u origin main`: đẩy code và thiết lập "mối quan hệ" giữa máy bạn và server, những lần sau chỉ cần gõ git push (-u là viết tắt của --set-upstream)
- `git push --force`: (cẩn thận) Ghi đề code của bạn lên server bất chấp mọi thứ (dễ gây mất code của đồng nghiệp)

## Git pull
- Lấy code về 
- Để đồng bộ hóa những gì người khác đã làm về máy của bạn

### Các lệnh thường dùng
- `git pull origin <branch-name>`: Tải code mới nhất từ server về và tự động gộp (merge) vào code hiện tại của bạn
- `git fetch`: Chỉ tải thông tin mới từ server về để bạn xem trước, chưa gộp vào code máy bạn.

## Git stashing
- Cất tạm code
- Cực kỳ hữu ích khi bạn đang làm dở tay nhưng phải chuyển sang việc khác khẩn cấp.

### Các lệnh thường dùng
- `git stash`: Gom toàm bộ thay đổi chưa commit và "cất vào kho". Code của bạn sẽ trở lại trạng thái sạch sẽ như lúc mới pull.
- `git stash pop`: Lấy những thay đổi đã cất gần nhất ra để làm tiếp và xóa nó khỏi kho lưu trữ tạm.
- `git stash apply`: Lấy những thay đổi đã cất gần nhất ra nhưng vẫn giữ 1 bản copy trong kho tạm.
- `git stash list`: Xem danh sách các lần bạn đã cất.
- Bên cạnh đó còn có các lệnh khác như `git stash pop stash@{x}`, `git stash apply stash@{x}`: lấy ra bản sao x

---
# JavaScript - Class
- Class giống như 1 `bản thiết kế ` để tạo ra các đối tượng (object) giống nhau mà không phải viết lại nhiều lần.
- Giúp code gọn gàng, dễ quản lý và mang tính kế thừa cao

## Cấu trúc
- Constructor: Là hàm tạo, dùng để thiết lập các giá trị ban đầu cho đối tượng.
- Method: Là các hành động (hàm) mà đối tượng có thể thực hiện
