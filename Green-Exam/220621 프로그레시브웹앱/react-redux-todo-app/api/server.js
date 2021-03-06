const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const { json } = require("body-parser");
const { nanoid } = require("nanoid");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(json());

let todos = [
    {
        id: nanoid(),
        title: "todo 1",
        completed: true,
    },
    {
        id: nanoid(),
        title: "todo 2",
        completed: false,
    },
    {
        id: nanoid(),
        title: "todo 3",
        completed: false,
    },
    {
        id: nanoid(),
        title: "todo 4",
        completed: false,
    },
    {
        id: nanoid(),
        title: "todo 5",
        completed: false,
    },
];

/* 
	๐๐์์ฃผ ์ฐ๋ HTTP ๋ฉ์๋๋ GET, POST, PUT, PATCH, DELETE ์ ๋๊ฐ ์์(์์ฃผ์ฐ์ด๋๊ฒ๋ค๋ง ์ ์)
	GET์ ๊ฐ์ ธ์ค๋ค, POST๋ ๊ฒ์ํ๋ค, PUT์ ์ง์ด๋ฃ๋ค, PATCH๋ ๊ณ ์น๋ค, DELETE๋ ์ง์ฐ๋ค
	์๋ ๋ด์ฉ์์ resource๋ ์ํ์ด์ง(html), binary data(๊ทธ๋ฆผํ์ผ, ์๋ฆฌํ์ผ ๋ฑ), 
	db data(json/xml/ํน์ html๋ก render๋ data)๋ฅผ ๋ปํจ

	๐GET :
	์๋ฒ์๊ฒ resource๋ฅผ ๋ณด๋ด๋ฌ๋ผ๊ณ  ์์ฒญํฉ๋๋ค. 
	์๋ฒ(ํน์ DB)์ resource๋ ํด๋ผ์ด์ธํธ๋ก ์ ๋ฌ๋ง ๋  ๋ฟ ๋ณ๊ฒฝ๋์ง ์์ต๋๋ค.
	์๋ฅผ ๋ค์ด ์น๋ธ๋ผ์ฐ์ ์http://example.com/exmaple.png๋ฅผ ์๋ ฅํ๋ฉด ํด๋น ๊ทธ๋ฆผ ํ์ผ์ด ํ์๋๊ณ , 
	http://example.com/something์ ์๋ ฅํ๋ฉด ์๋ฒ๊ฐ ํด๋น route์ ํ์๋์ด์ผ ํ๋ ํ์ด์ง๋ฅผ ์ฐพ์ 
	๋ณด์ฌ์ค๋๋ค. ์ฐธ๊ณ ๋ก ์น๋ธ๋ผ์ฐ์  ์ฃผ์์ฐฝ์ ์ฃผ์๋ฅผ ์๋ ฅํ๋ฉด ์ด ์ ํธ๋ ํญ์ get์ผ๋ก ์์ฒญ๋ฉ๋๋ค.

	๐POST :
	์๋ฒ์๊ฒ resource๋ฅผ ๋ณด๋ด๋ฉด์ ์์ฑํด ๋ฌ๋ผ๊ณ  ์์ฒญํฉ๋๋ค. 
	์๋ฅผ๋ค์ด ํ์๊ฐ์์ ํ๋ฉด DB์ ์๋ก์ด ํ์์ ๋ณด๊ฐ ๋ฑ๋ก๋๊ณ , 
	์ฌ์ง์ ์๋ก๋ ํ๋ฉด ๊ทธ ์ฌ์ง์ด ์น์ฌ์ดํธ์ ๋ฑ๋ก๋ฉ๋๋ค.

	๐PUT : 
	์๋ฒ์๊ฒ resource์ ์๋ฐ์ดํธ ํ๊ฑฐ๋ resource๊ฐ ์๋ค๋ฉด 
	์๋ก์ด resource๋ฅผ ์์ฑํด ๋ฌ๋ผ๊ณ  ์์ฒญํฉ๋๋ค. ํ์์ ๋ณด ์์  ๋ฑ์ ์ฌ์ฉ๋ฉ๋๋ค.
	PUT์ PATCH์ ๋น๊ตํด์ ์ ์ฒด ๋ฐ์ดํฐ๋ฅผ ๊ต์ฒดํ๋ ์ฐจ์ด์ ์ด ์์ต๋๋ค.
	๊ฐ๋ น user data์ ๊ตฌ์กฐ๊ฐ user._id, user.firstName, user.lastName, user.age๋ผ๊ณ  ํ๋ค๋ฉด, 
	ํ์์ ๋ณด ์์ ์ PUT์ _id๋ฅผ ์ฐพ์ age๋ง ์๋ฐ์ดํธํ๋๋ผ๋ 
	ํญ์ ๋ชจ๋  ํ๋๊ฐ์ ๊ฐ์ ธ์์ ๋ชจ๋  ํ๋๋ฅผ ํญ์ ์๋ก์ด ๊ฐ์ผ๋ก ๊ต์ฒดํฉ๋๋ค.

	๐PATCH : 
	์๋ฒ์๊ฒ resource์ ์๋ฐ์ดํธ๋ฅผ ์์ฒญํฉ๋๋ค. ํ์์ ๋ณด ์์  ๋ฑ์ ์ฌ์ฉ๋ฉ๋๋ค.
	PATCH๋ PUT๊ณผ ๋น๊ตํด์ ๋ถ๋ถ ๋ฐ์ดํฐ๋ฅผ ์๋ฐ์ดํธํ๋ ์ฐจ์ด์ ์ด ์์ต๋๋ค.
	๊ฐ๋ น user data์ ๊ตฌ์กฐ๊ฐ user._id, user.firstName, user.lastName, user.age๋ผ๊ณ  ํ๋ค๋ฉด, 
	ํ์์ ๋ณด ์์ ์ PATCH๋ _id๋ฅผ ์ฐพ์ age๋ง ์๋ฐ์ดํธํ ๋ 
	_id์ age๋ง ๋ฐ์์์ํด๋น ๋ถ๋ถ์ ์๋ฐ์ดํธ ํฉ๋๋ค.

	๐ค๋งํฌ ์ฐธ์กฐํ์
	https://www.zerocho.com/category/HTTP/post/5b3723477b58fc001b8f6385
	https://m.blog.naver.com/azure0777/220824614635
*/

app.get("/todos", (req, res) => res.send(todos)); // postman ์ฝ์ด์ค๊ธฐ

app.post("/todos", (req, res) => {
    // todo DB์ ์ฅ, title์ ๋ด๊ฐ์๋ ฅํ๊ฑฐ, id๋ ์์์์์ฑ, completed๊ฐ์ false๋ก ์ง์ 
    // todos๋ฐฐ์ด์ todo๊ฐ์ฒด ํธ์ฌํด์ฃผ๊ณ , (ํ์์ ์ ์ฅ)
    // return์ผ๋ก ์๋ฒ์๋ ์๋ต๊ฐ todo๋ฅผ ๋ณด๋ด์ค๋ค(๋ณด๋ด์ค์ผ ์๋ฒ์๋์ ์ฅ, ๋ฐฑ์์ ์ ์ฅ)
    const todo = { title: req.body.title, id: nanoid(), completed: false };
    todos.push(todo);
    return res.send(todo);
});

app.patch("/todos/:id", (req, res) => {
    //patch : ๊ณ ์น๋ค
    //params๋ก ๋ฐ์์จ id๊ฐ์ index๊ฐ์ ์ถ๋ ค๋
    // completed ๋ถ๋ฆฐ๊ฐ์ด๋ผ ๋ช์ํด์ฃผ๊ณ ,todos๋ฐฐ์ด์์ ํด๋นํ๋id๊ฐ์๊ฐ์ง๋์ send ๋ณด๋ด์ค๋ค
    // ๋ง์ฝ findIndex ๋ฐํ๊ฐ์ด ์์ผ๋ฉด -1๋ก ๋์ค๊ธฐ๋๋ฌธ์,
    // index ๊ฐ์ด - 1๋ณด๋ค ํฌ๋ฉด completed๋ฅผ ๋ฐ๊ฟ์ฃผ๊ณ 
    // ๋ฐํ๊ฐ์ด ์์ผ๋ฉด ์คํ์ด ์๋๊ฑฐ๋ else ๋ก ๋ฐ๋ก ๋ฆฌํ์ด๋ ํธ '/'ํ์ฃผ์๋ฅผ ์ ์ด์ฃผ๋์ง ํด๋ณด์ผ
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id == id);
    const completed = Boolean(req.body.completed);
    if (index > -1) {
        todos[index].completed = completed;
    }
    // else {
    // 	return res.redirect('/')
    // }
    return res.send(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id == id);
    if (index > -1) {
        todos.splice(index, 1);
    }

    res.send(todos);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
