## Điều chú ý đầu tiên là dự án này chạy ở phiên bản node 14.18.0
    Mọi người có thể sử dụng nhiều và linh hoạt các phiên bản node khi sử dụng nvm
    Hãy cài nvm (cụ thể không nhớ nên mn lên yt tìm nha:)))
    nvm list: các phiên bản node hiện tại có trên máy
    nvm install <phiên bản node>: cài một phiên bản node mới
    nvm use <phiên bản node>: sử dụng phiên bản node đó
## Khi mọi người vừa clone dự án này bằng link http:
    hãy chạy câu lệnh "npm install"
    hệ thống sẽ cài đặt những thư viện cần thiết được định nghĩa trong file package.json
    chương trình này sẽ chạy trên cổng 3000 nên mọi người đảm bảo cổng này của mọi người đang rảnh
    và chạy câu lệnh "npm start"
    đợi chương trình một lát thì trang web localhost:3000 sẽ hiện lên
    nếu chưa thấy gì hãy truy cập đường link: "http://localhost:3000/home"

    nếu mọi người muốn dừng thì bấm Crtl C và nhấn Y (tức là Yes)
## Chú ý lần commit đầu tiên: 
    đây chỉ là dự án front end nên không chưa liên quan đến BE, vậy nên đường link gọi api trong file .env đã bị comment, mọi người sẽ thấy giao diện của trang home khá là hoàn chỉnh là vì giao diện đang được hardcode, vậy thì cứ qua mỗi chức năng chúng ta sẽ lấy dữ liệu và sửa sau