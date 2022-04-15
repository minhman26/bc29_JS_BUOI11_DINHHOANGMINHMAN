// Sơ đồ 3 khối bài 1

// Đầu vào 
// songaylam : 26
// luong1ngay : 100.000

// Xử lý 
// Bước 1 : Tạo biến cho luong1ngay và songaylam
// Bước 2 : Tạo biến cho luongNV
// Bước 3 : Dùng công thức luongNV = luong1ngay * songaylam
// Bước 4 : In kết quả 

// Đầu Ra
// + Lương nhân viên 

var luong1ngay = 100.000;
var songaylam = 26;
var luongNV = 0;
luongNV = luong1ngay * songaylam;
console.log("lương nhân viên là " + luongNV);

// Sơ đồ 3 khối bài 2

// Đầu vào 
// Các số thực lần lượt là : 5, 6, 7, 8, (-3)
// Số thực 1 : 5
// Số thực 2 : 6
// Số thực 3 : 7
// Số thực 4 : 8
// Số thực 5 : (-3)

// Xử lý 
// Bước 1 : Tạo 5 biến cho 5 số thực : sothuc1 , sothuc2, sothuc3 , sothuc4 , sothuc5
// Bước 2 : Tạo biến cho giatrisothuc
// Bước 3 : Dùng công thức giá trị trung bình là giatrisothuc = (sothuc1+sothuc2+sothuc3+sothuc4+sothuc5)/5
// Bước 4 : In kết quả

// Đầu ra 
// + Gía trị trung bình 5 số thực 

var sothuc1 = 5;
var sothuc2 = 6;
var sothuc3 = 7;
var sothuc4 = 8;
var sothuc5 = (-3);
var giatrisothuc;

giatrisothuc = (sothuc1+sothuc2+sothuc3+sothuc4+sothuc5)/5;
console.log("giá trị trung bình 5 số thực là " + giatrisothuc);

// Sơ đồ 3 khối bài 3 

// Đầu vào 
// Giá USD hiện nay : 23.500 VND
// Số tiền USD : 1.03 USD 

// Xử lý 
// Bước 1 : Tạo biến cho giausdhiennay và sotienusd 
// Bước 2 : Tạo biến sotiensauquydoivnd 
// Bước 3 : Dùng công thức sotiensauquydoivnd = giausdhientai * 2 
// Bước 4 : In kết quả 

// Đầu ra 
// + Số tiền sau quy đổi vnd 

var giausdhiennay = 23.500;
var giausdhiennay = 23.500;
var sotiensauquydoivnd;

sotiensauquydoivnd = giausdhiennay * 2;
console.log("số tiền sau quy đổi vnd là " + sotiensauquydoivnd);

// Sơ đồ 3 khối bài 4 

// Đầu vào 
// chieudai : 15
// chieurong : 18

// Xử lý 
// + dientich = chieudai * chieurong
// + chuvi = (chieudai + chieurong)*2

// Đầu ra 
// + Diện tích 
// + Chu vi 

var chieudai = 15;
var chieurong = 8;
var dientich;
var chuvi;

dientich = chieudai * chieurong;
chuvi = (chieudai + chieurong)*2;

console.log("diện tích là " + dientich);
console.log("chu vi là " + chuvi);

// Sơ đồ 3 khối bài 5
//  Đầu vào 
//  + n = 44

//  Xử lý 
//  + Tách lấy hàng chục : Math.floor(n % 100 / 10)
//  + Tách lấy hàng đơn vị : Math.floor n % 10 
// hangchuc + hangDV 
//  Đầu ra 
//  + In kết quả 

var n = 44;

var hangchuc = Math.floor(n % 100 / 10);
var hangDV = n % 10;

var tong2kyso = hangchuc + hangDV;
console.log("Tổng 2 ký số là " + tong2kyso);





