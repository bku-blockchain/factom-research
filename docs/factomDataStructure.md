# Factom Data Structure
========================================

## Building Blocks

### Chain Name

+ Chain Name xác định duy nhất một chuỗi (Chain).
+ Chain Name có thể là một số ngẫu nhiên, một chuỗi các kí tự, một public key hoặc hash của một vài đường dẫn thư mục riêng tư.
+ Việc lựa chọn Chain Name thuộc về user.
+ Chain Name có thể được xác định bởi nhiều chuỗi bytes liên tiếp. Các chuỗi bytes là những đoạn dữ liệu khác biệt.
+ Mỗi phần tử của Chain Name dài ít nhất 1 byte.
+ 1 Chain Name không có phần tử nào là trường hợp đặt biệt của ChainID có gía trị hash của chuội null `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`.

### ChainID

+ ChainID là dãy các giá trị hash SHA256 của các đoạn Chain Name.
+ ChainID dài 32 bytes
+ ChainID phải hash một tập dữ liệu mờ trong cấu trúc cấp cao của block, tức mỗi ChainID phải lưu trữ thông tin gì đó được che giấu.
+ Thuật toán này hash mỗi đoạn của Chain Name. Các trị hash này được nối lại và hash thêm lần nữa thành giá trị 32 bytes duy nhất.
+ Tạo 1 ChainID từ 1 Chain Name chỉ có 1 đoạn tương đương với việc hash Chain Name đó 2 lần.
+ Công thức tìm ChainID:

`ChainID = SHA256( SHA256(Name[0]) | SHA256(Name[1]) | ... | SHA256(Name[X]) )`

trong đó:
+ `Name[0..X]` là Chain Name của ChainID cần tìm.
+ `X+1` là số lượng đoạn của Chain Name.
+ `SHA256(str)` là giá trị hash SHA256 của một chuỗi `str`.


## User Elements

Các phần tử thuộc về User

### Entry
+ Là phần tử mang dữ liệu của user. Entry Reveal là bản chất dữ liệu này.
+ External IDs là 1 phần của Entry, có chiều dài chuỗi bytes được Factom kiểm soát.
+ Entry đầu tiên trong 1 chuỗi Factom (Factom Chain) sử dụng External IDs (ExtID) để định nghĩa Chain Name. Những Entries khác sử dụng External IDs khi ứng dụng của nó ra lệnh.
+ Để hợp lệ, External IDs phải được phân tích cú pháp và phần cuối của phần tử cuối cùng phải khớp với độ dài được xác định cho các External IDs như đã được định nghĩa trong header.
+ ExtID không được sử dụng trong thuật toán đồng thuận sau entry đầu tiên.
+ ExtID và Content không được kiểm tra sự hợp lệ, chỉ có góc nhìn như giá trị nhị phân.


| Data | Field Name | Description |
| ----------------- | ---------------- | --------------- | 
| **Header** |  | |
| varInt_F | Version | starts at 0. Higher numbers are currently rejected. Can safely be coded using 1 byte for the first 127 versions. |
| 32 bytes | ChainID | This is the Chain which the author wants this Entry to go into. |
| 2 bytes | ExtIDs Size | Describes how many bytes required for the set of External IDs for this Entry.  Must be less than or equal to the Payload size.  Big endian. |
| **Payload** | | This is the data between the end of the Header and the end of the Content. |
| **External IDs** |  | This section is only interpreted and enforced if the External ID Size is greater than zero. |
| 2 bytes | ExtID element 0 length | This is the number of the following bytes to be interpreted as an External ID element.  Cannot be 0 length. |
| variable | ExtID 0 | This is the data for the first External ID. |
| 2 bytes | ExtID X | Size of the X External ID  |
| variable | ExtID X data | This is the Xth element.  The last byte of the last element must fall on the last byte specified ExtIDs Size in the header. |
| **Content** | | |
| variable | Entry Data | This is the unstructured part of the Entry.  It is all user specified data. |


