# Factom

### Mục tiêu ra đời và phát triển

#### 3 Vấn đề của Bitcoin
##### Tốc độ giao dịch Bitcoin
Giao dịch Bitcoin mất ít nhất 10 phút cho một lần xác nhận. 

Có tới 6 lần xác nhận để giao dịch được xử lý đầy đủ, nhiều người phải mất hơn 1 giờ để hoàn thành giao dịch.


##### Chi phí giao dịch Bitcoin
Chi phí cho 1 transaction khoảng 0.01 mBTC.

Giá trị Bitcoin liên tục biến động.

Giá BTC tăng => chi phí cho transaction tăng.

##### Quá tải về kích thước block và số transactions của Bitcoin

Kích thước giới hạn 1 MB / block.

Tối đa được 7 transactions / second 
		= 7*24*60*60 	transactions / day
		= 604,800 		transactions / day

#### Factom giải quyết 3 vấn đề của Bitcoin

Factom là một giao thức được thiết kế để giải quyết 3 vấn đề này ở Bitcoin.

Factom tạo ra một giao thức cho các ứng dụng cung cấp các chức năng và tính năng ngoài các giao dịch tiền tệ.

Factom xây dựng một nền tảng tiêu chuẩn, hiệu quả và an toàn cho các ứng dụng này để chạy nhanh hơn, rẻ hơn và không bị tình trạng quá tải ở Bitcoin.


### How Applications Validate Factom Chains

Cách các ứng dụng validate các Chains trong Factom

Factom không validate Entries. Entries thay vào đó được valiated bởi users hoặc các ứng dụng ở phía client. Miễn là ứng dụng hiểu được và biết các luật một Chain được tạo ra thì sự tồn tại của các Entries invalid không gây ra sự gián đoạn. Các Entries không tuân theo luật mà ứng dụng hiểu trong một Chain có thể được ignored bởi ứng dụng.

Người dùng có thể sử dụng bất kì tập luật nào cho những Chains của họ, và bất kì quy ước nào để giao tiếp với các users khác trong những Chains của họ. First Entry (entry đầu tiên) trong một Chain có thể nắm giữ tập luật của chuỗi đó, hoặc giá trị hash của chương trình audit, ... Những luật này được hiểu bởi các ứng dụng đang chạy trên mạng Factom để ignore các invalid Entries ở phía client. Một chuỗi thực thi có thể được xác định. Các entries không meet được requirements sẽ bị từ chối (bỏ đi). Tuy nhiên những Entries bị từ chối bởi rules hoặc audit program sẽ vẫn được ghi nhận. Những users sử dụng Chains này sẽ cần chạy chương trình audit để validate chuỗi loại này. Các máy chủ Factom sẽ không can thệp vào các luật này hay chương trình audit.

Việc validation ở ứng dụng cùng với việc tự định nghĩa chains của người dùng tạo ra các thuận lợi như sau:

	Ứng dụng có thể đặt vào Factom bất kì entries nào có ý nghĩa cho ứng dụng. Do đó, 1 danh sách các giá trị hashes dùng để validate 1 danh sách các lệnh có thể được ghi nhận dễ dàng như việc trao đổi 1 tài sản.
	Việc thực thi luật rất hiệu quả. Khi mạng lưới phân tán phải thực thi tập luật validate của bạn, việc validation yêu cầu tất cả các node phải thực hiện. Còn việc vaidate ở phía client chỉ yêu cầu hệ thống quan tâm đến các luật đó để thực thi chúng. Factom để cho 1 Chain tự định nghĩa các luật của nó trong bất kì ngôn ngữ nào mà người thiết kế lựa chọn, và chạy trên bất kì nền tảng nào mà họ chọn, và sử dụng bất kì dữ liệu nào bên ngoài. Không có những quyết định trên một ứng dụng lại ảnh hưởng đến 1 ứng dụng khác.
	Các máy chủ Factom không biết nhiều về những entries được ghi nhận. Chúng ta sử dụng lược đồ cam kết (commitment scheme) để giới hạn lại lượng hiểu biết, khi mà việc cam kết đối để ghi nhận 1 entry được thực hiện trước việc tiết lộ (reveal) entry đó là gì. Điều này làm cho vai trò cua Factom trong việc ghi nhận các entries trở nên rất đơn giản, và làm cho các máy chủ cá nhân tiến hành một công khai. Các máy chủ Factom chấp nhận những thông tin từ mạng full node, và những quyết định và hành vi của họ luôn được xem xét. Sự thất bại có thể được audit từ cả mạng ngoài Factom và bên trọng mạng Factom. Rất dễ dàng cho việc verify độc lập một máy chủ Factom hoàn thành trách nhiệm ghi nhận entries. Factom không thể che giấu các hành vi sai trái.
	Tốc độ ghi nhận có thể rất nhanh, bởi vì số lần kiểm tra được thực hiện bởi các máy chủ Factom là tối thiểu.
	Các bằng chứng chống lại một Chain trong Factom không yêu cầu các kiến thức (tập luật hay chương trình audit) của bất kì Chains nào khác. Những người dùng chỉ cần một phần của Factom họ đang sử dụng và ignore những cái khác.




### How Factom Federated Servers Manage Chains

Các máy chủ liên kết quản lý các chains như thế nào?

Factom là một phương pháp phân tán để thu thập, đóng gói, bảo vệ dữ liệu vào blockchain Bitcoin. Factom hoàn thành việc này bằng mạng lưới các máy chủ liên kết (Federated Server). Những máy chủ này luân phiên thay đổi trách nhiệm cho những mặt khác nhau trong hệ thống. Không có máy chủ nào điều khiển cả hệ thống mà chỉ một phần trong hệ thống. Và cũng không có máy chủ nào duy trì việc điều khiển bất kì phần nào của hệ thống. Trách nhiệm điều khiển các phần trong hệ thống Factom được xoay vòng giữa các máy chủ từng phút.
Các máy chủ liên kết chịu trách nhiệm cho một phần con của những Chains của người dùng từ lúc tạo ra một Directory Block. Quá trình đó gồm những bước sau:
1. Tất cả máy chủ reset danh sách các tiến trình về empty.
2. Người dùng submit Entry Payment (thanh toán Entry) sử dụng public key (pubkey) liên kết với Entry Credits (ECs)
3. Dựa trên pubkey được sử dụng để thanh toán cho entry, một trong những server sẽ chấp thuận việc thanh toán.
4. Server đó (chấp thuận payment) broadcast (phát tín hiệu đi) việc đã chấp nhận thanh toán đó.
5. Người dùng nhận được tín hiệu từ server và submit Entry lên.
6. Dựa trên ChainID (id của Chain)  của Entry, một trong các máy chủ thêm Entry đó vào danh sách các process, và thêm Entry đó vào Entry Block tương ứng với ChainID nói trên, nếu Entry Block là rỗng, tạo ra một Entry Block mới với first entry là Entry này.
7. Server này broadcast việc confirm Entry đồng thời chứa chỉ mục danh sách các process của Entry này, giá tị hash của entry (được linked tới payment), và chuỗi hash liên tục của danh sách tiến trình của máy chủ này.
8. Tất cả các máy chủ khác cập nhật view của danh sách process, validate danh sách này và cập nhật view của Entry Block với ChainID trên.
9. Miễn là user có thể validate danh sách tiến trình giữ Entry của họ, thì họ có được mức độ công bằng về việc đảm bảo Entry sẽ được thêm vào Factom thành công.
10. Phút cuối cùng, tất cả máy chủ confirm lại chiều cao của danh sách tiến trình, tiết lộ một con số bí mật được xác định (Reverse Hash: xuất ra một ảnh của một chuỗi hash dài liên tiếp), chuỗi hash liên tục của process block (match với item cuối trong danh sách).
11. Directory Block cho phút này được xây dựng từ tất cả các entry blocks được định nghĩa bởi tất cả máy chủ. Nên mỗi máy chủ có tất cả Entry Blocks, tất cả Directory Blocks và tất cả Entries.
12. Tập hợp các Reverse Hash được combined để tạo một seed cho việc tái phân bố các ChainIDs cho các máy chủ trong mạng cho round tiếp theo.
	12.1. Khi hoàn tất Directory Block thứ 10, thực hiện những bước sau:
		12.1.1. Tạo ra Merkel roots cho các Entry Blocks tại phút cuối cùng, sorted by ChainID.
		12.1.2. Tạo Directory Block tại phút cuối cùng và tính Merkel root của nó.
		12.1.3. Tạo ra một neo của Merkle root của 10 Directory Block.
		12.1.4. Các Revse Hashes được combined để tạo ra 1 seed dùng để lựa chọn máy chủ ghi neo vào Bitcoin.
	12.2. Quay về bước 1.


Các máy chủ liên kết xây dựng một danh sách các process cho các Chains mà nó có trách nhiệm cũng như xây dựng Entry Blocks sẽ được sử dụng để tạo ra Directory Blocks vào phút cuối. Danh sách này là quan trọng cho việc broadcast các quyết định được thực hiện bởi một máy chủ trong mạng.


Cứ 4 tiếng, các máy chủ được xếp lại rank. Việc xếp hạng là một hàm số vote bởi các users, người mà phải tạo ra một chain profile của mình trong Factom. Profile đó chứa bất kì số địa chỉ Entries đã được kí. Trọng số của vote của user được xác định bởi public address profile của họ. Hàm này tính trọng số này là tổng của 2 yếu tố:
1. Số lương ECs được mua trong 6 tháng gần nhất (nhân hệ số 6 cho tháng hiện tại, 5 cho trước, ...)
2. Số lượng Entries được dùng trong 6 tháng gần nhất (nhân hệ số tương tự trên)

Khi thực thi vơi n máy chủ, n máy chủ xếp hạng đầu tiên là các máy chủ liên kết được chọn, và n máy chủ khác sẽ là các máy chủ kiểm tra (auditing server). Tất cả máy chủ được duy trì bởi hạng dựa trên số lượng vote của họ. Số lượng n được khởi tạo là 16, nhưng số lượng này được tăng lên bởi cộng đồng, và có thể là giá trị thực.

Tất cả máy chủ phải broadcast nhịp tim (heartbeat) sau mỗi khoảng thời gian nhịp tim (heartbeat: kiểm tra máy chủ còn hoạt động). Nếu một máy chủ không nhận được 1 nhịp tim hoặc verify entry timeout, máy chủ broadcast 1 Server Fault Message (SFM). Nếu một máy chủ đa số broadcast 1 SFM, nó sẽ bị giáng làm Auditing server, và auditing server có rank tiếp theo sẽ đảm nhận trách nhiệm này (thay thế). Máy chủ này (được thăng hạng, thay thế) sẽ đảm nhiệm đến phút cuối của nhiệm kì 4 tiếng này.

Khoảng thời gian nhip tim và khoảng thời gian timeout sẽ được sửa đổi bởi số đông máy chủ liên kết, được thiết lập trong chuỗi cấu hình. Hearbeat nên là 4svà timeout nên là 8s.

Về thuật toán đồng thuận của Factom được trình bày trong tài liệu "Factom Concensus"


### Factom System Overview

Tổng quan về hệ thống Factom

Factom được xây dựng từ tập hợp các tầng CTDL.

Factom được xây dựng từ một tập thứ bậc các khối (blocks) với chiều cao nhất là Directory Blocks. Chúng cấu tạo nên 1 micro-chain, bao gồm chủ yếu những tham khảo nhỏ gọn. Để giữ được kích thước nhỏ gọn, mỗi reference trong Directory Block phải là giá trị hash của Entry Block cùng với ChainID. Các Entry Blocks có references tới tất cả Entries với một giá trị ChainID nhất định trong một khoản thời gian. Entry Block cho một ChainID cũng là một phần của micro-chain. Tập hợp dữ liệu trong Factom nằm ở các lá và ở chính bản thân các Entries. Những CTDL thứ bậc này được render không thẻ thay đổi bởi sức mạnh của Bitcoin. Chúng có thể hình dung như là các lớp khác nhau.

Các lớp và các ý niệm trong hệ thống Factom:

1. Directory Layer: Tổ chức các Merkle Root của Entry Blocks.
2. Entry Block Layer: Tổ chức các references tới các Entries.
3. Entries: chứa dữ liệu thô (raw data) của ứng dụng hoặc giá trị hash của dữ liệu riêng tư (private data).
4. Chains: Nhóm các Entries cụ thể cho một ứng dụng.


### Directory Layer: How the Directory Layer Organizes Merkle Roots

Directory Layer tổ chức Merkle root như thế nào?

Directory Layer là mức đầu tiên trong các tầng kiến trúc của hệ thống Factom. Nó định nghĩa các Entry ChainIDs được cập nhật trong suốt khoản thời gian được covered bởi Directory Block. (ChainID xác định Chain của các Entries của người dùng, việc sinh ra ChainID như thế nào sẽ trình bày sau ^^). Nó chủ yếu bao gồm một danh sách cặp ChainID và Merkle root của Entry Block chứa dữ liệu cho ChainID đó.

Mỗi Entry Block tham khảo trong một Directory Block chiếm 64 bytes (2 giá trị hash 32 bytes của ChainID, và của Merkle root của Entry Block). Một triệu mục như vậy sẽ dẫn đến một tập hợp các khối thư mục có kích thước khoảng 64 MB. Nếu trung bình Entry Block có 5 Entries, 64 MB của Directory Blocks (DBs) sẽ cung cấp việc quản lý cấp cao cho 5 triệu Entries riêng biệt.

Nếu một ứng dụng chỉ có các DBs, nó có thể tìm thấy các EBs mà nó quan tâm mà không cần tải xuống mọi EB. Một ứng dụng riêng lẻ sẽ chỉ quan tâm đến một tập nhỏ các ChainID đang được Factom theo dõi. Điều này sẽ hạn chế đáng kể số lượng băng thông mà một client sẽ cần phải sử dụng với Factom làm hệ thống ghi nhận của họ. Ví dụ, một ứng dụng giám sát chuyển giao bất động sản có thể an toàn bỏ qua các bản ghi bảo mật máy quay video.

Các máy chủ Factom thu thập các Merkle roots của các EBs và gói chúng vào một DB. 10 DBs liên tiếp được hash thông qua một cây Merkle, và gốc Merkle được ghi vào bitcoin blockchain. Điều này cho phép mở rộng tối thiểu của blockchain, và vẫn cho phép cuốn sổ cái được bảo đảm bằng sức mạnh hash của Bitcoin. Quá trình thêm gốc Merkle vào bitcoin blockchain mà chúng tôi gọi là "neo". 

Dữ liệu được nhập vào Directory Blocks là đắt nhất, từ góc độ băng thông và lưu trữ. Tất cả người dùng của Factom muốn tìm dữ liệu trong chuỗi của họ cần toàn bộ các khối thư mục bắt đầu từ khi chuỗi của họ bắt đầu.

Các hoạt động làm tăng kích thước DBs bao gồm việc tạo và cập nhật đầu tiên các Chains cá nhân. Những hoạt động này chỉ ra chi phí của các ứng dụng cố gắng tổ chức tốt hơn. Các ứng dụng phải được yêu cầu chi nhiều ECs hơn là một Entry đơn giản sẽ đòi hỏi phải ngăn cản làm quá tải Directory Blocks.


### Entry Block Layer: How the Entry Block Layer Organizes Hashes and Data

Entry Block Layer tổ chức các giá trị hash và data như thế nào?

Entry Blocks là cấp thứ hai của kiến trúc phân cấp trong hệ thống. Các ứng dụng cá nhân sẽ chú ý đến các ChainID khác nhau. Entry Blocks là nơi ứng dụng tìm kiếm Entries có thể mở rộng tìm kiếm của nó từ một ChainID để khám phá tất cả các mục có liên quan.

Có một Entry Block cho mỗi ChainID được cập nhật cho mỗi Directory Block. Các EBs chứa các giá trị hash của các Entries riêng lẻ. Các trị hash của Entries đều chứng minh sự tồn tại của dữ liệu và đưa ra một khóa để tìm các Entries trong mạng Hash Distributed Hash Table (DHT).

Các EBs bao gồm các Entries liên quan đến 1 ChainID. Nếu 1 Entry không được tham chiếu trong 1 EB, nó có thể giả sử không tồn tại. Điều này cho phép 1 ứng dụng chứng minh 1 tiêu cực (prove a negative)

EB cố tình không chứa các Entries của chính nó. Điều này để cho EBs nhỏ hơn nếu tất cả dữ liệu được nhóm lại cùng nhau. Việc tách biệt các Entries từ EBs cũng cho phép việc auditing dễ dàng hơn. Một auditor có thể đăng các Entries trong một chuỗi tách biệt phê chuẩn hoặc từ chối trong cùng một chuỗi. Việc audit có thể thêm các nguyên nhân về việc từ chối Entry. Nếu ứng dụng tin tưởng vào auditor, họ có thể tham chiếu chéo rằng người audit đã phê duyệt hoặc từ chối mọi Entry không cần biết Entry đó là gì. Ứng dụng sau đó chỉ việc thử download các Entries đã passed người audit. Rất nhiều auditor có thể tham chiếu cùng các Entries và các Entries cũng sẽ chỉ tồn tại duy nhất 1 lần trên bảng DHT. Các entries được kì vọng lớn hơn đáng kể 32 bytes 1 giá trị hash chiếm giữ. 

Một Entry mô tả chi tiết về các chi tiết cụ thể của việc chuyển nhượng sẽ được đưa vào một Chuỗi khi dự kiến ​​việc chuyển giao tìm thấy. Sau đó, một hoặc nhiều auditor có thể tham khảo các hash của việc chuyển trong chuỗi của riêng họ, thêm các chữ ký mã hóa cho biết một đường chuyền hoặc không thành công. Tài liệu chuyển nhượng chỉ cần được lưu trữ một lần và nó sẽ được tham chiếu bởi nhiều Chuỗi khác nhau.


### Entries: How Entries are Created

Entries được xây dựng bởi người dùng và được submit lên Factom. Bằng những thông tin được hash hoặc mã hóa, người dùng có thể đảm bảo tính privacy của các entries. Các Entries này có thể là plain text nếu việc mã hóa dữ liệu là không cần thiết. Bằng việc ghi nhận 1 giá trị hash của 1 tài liệu, Factom có thể cung cấp proof of publication cơ bản. Trình bày tài liệu tại một thời gian sau cùng cho phép tạo giá trị hash của nó, so sánh nó với các giá trị hash được ghi nhận trong quá khứ.

Dữ liệu cho phép là rất mềm dẻo và linh hoạt. Nó có thể nhỏ như một hyperlink. Nó có thể lớn hơn nhưng không thể quá lớn vì chi phí giới hạn kích thước dữ liệu. Điều này là tương tự như Bitcoin. Các transactions lớn hơn 100 kB+ Bitcoin là có thể nhưng yêu cầu chi trả cho khoảng phí tương ứng. Trong Bitcoin chi phí này sẽ là khổng lồ, bởi vì mỗi full node yêu cầu tất cả blockchain cho việc validate. Trong Factom, chỉ các DBs có level cao nhất yêu cầu full validate 1 chain, do đó chi phí nhỏ hơn.


### Chains: How Entries are Organized into Chains

Các Chains trong Factom là các chuỗi Entries cái phản ánh các sự kiện liên quan đến 1 ứng dụng. Những chuỗi này là cốt lõi của Bitcoin 2.0. 

Chains là sự diễn giải logic dữ liệu được đặt bên trong DBs và EBs. DBs chỉ ra Chains nào được updated. EBs chỉ ra Entries được updated vào Chain nào.
