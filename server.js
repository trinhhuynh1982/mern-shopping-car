import  express from "express";
import bodyParser from "body-parser";

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

/*Lưu ý đang xây dựng server để KH truy cập do đó phải mở port và cổng này dành cho KH truy cập lên server*/

const port = 5000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

/*
	Hiện tại nó báo 'Cannot GET /', lý do chưa khai báo route 
	Request(req): khách hàng gửi lên và có rất nhiều phương thức KH truyền lên (GET,POST)
	Response(res): Server trả về
	KH gõ: http://localhost:3000/hello sau từ port 3000 trở về trước là domain là ta ko tính, route chỉ tính từ dấu '/'' trở đi
*/
/* 
	Khi KH đẩy route thì hành động tương ứng xảy ra dùng function, cần 2 biến req đại diện tham số KH gửi lên và biến res đại diện tham số tải về cho KH 
	Có rất nhiều phương thức ở thằng res, vd: send
*/
app.get("/hello", function(req,res){
	res.send("<p>GETTING HELLO NOTEJS</p>");
}); /*=> Đây là khái niệm Route*/

// KH truyền username, password
app.post("/hello", urlencodedParser, function(req,res){
	let u = req.body.username;
	let p = req.body.password;
	res.send(`Username: ${u} Password: ${p}`);
}); /*=> Đây là khái niệm Route*/

/*app.get("/tintuc/:id", function(req,res){
	let i = req.params.id;
	res.send(`<p>Server nhận được id = ${i} </p>`) //res.send("<p>Server nhận được id =" + i + "</p>")
});*/ /*=> Đây là khái niệm Route*/

app.get("/tintuc/:id", (req,res) => {
	let i = req.params.id;
	res.send(`<p>Đổi hàm error. Server nhận được id = ${i} </p>`);
});

/*
Trong GET lấy dl từ trên thanh địa chỉ về
Còn POST thì lấy dl KH nhập ko xuất hiện trên thanh địa chỉ
Trong GET thì mặc định Nodejs có sẵn hàm lấy dl rồi
Nếu dùng phương thức POST thì trong nodejs không có sẵn hàm để ta lấy dữ liệu POST về, nếu lấy dl POST về sử dụng module riêng là body-parser
*/

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];
  res.json(customers);
});