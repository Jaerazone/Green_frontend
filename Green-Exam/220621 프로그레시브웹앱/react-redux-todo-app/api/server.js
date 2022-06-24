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
	📒👀자주 쓰는 HTTP 메서드는 GET, POST, PUT, PATCH, DELETE 정도가 있음(자주쓰이는것들만 적음)
	GET은 가져오다, POST는 게시하다, PUT은 집어넣다, PATCH는 고치다, DELETE는 지우다
	아래 내용에서 resource는 웝페이지(html), binary data(그림파일, 소리파일 등), 
	db data(json/xml/혹은 html로 render된 data)를 뜻함

	💜GET :
	서버에게 resource를 보내달라고 요청합니다. 
	서버(혹은 DB)의 resource는 클라이언트로 전달만 될 뿐 변경되지 않습니다.
	예를 들어 웹브라우저에http://example.com/exmaple.png를 입력하면 해당 그림 파일이 표시되고, 
	http://example.com/something을 입력하면 서버가 해당 route에 표시되어야 하는 페이지를 찾아 
	보여줍니다. 참고로 웹브라우저 주소창에 주소를 입력하면 이 신호는 항상 get으로 요청됩니다.

	💚POST :
	서버에게 resource를 보내면서 생성해 달라고 요청합니다. 
	예를들어 회원가입을 하면 DB에 새로운 회원정보가 등록되고, 
	사진을 업로드 하면 그 사진이 웹사이트에 등록됩니다.

	💙PUT : 
	서버에게 resource의 업데이트 하거나 resource가 없다면 
	새로운 resource를 생성해 달라고 요청합니다. 회원정보 수정 등에 사용됩니다.
	PUT은 PATCH와 비교해서 전체 데이터를 교체하는 차이점이 있습니다.
	가령 user data의 구조가 user._id, user.firstName, user.lastName, user.age라고 한다면, 
	회원정보 수정시 PUT은 _id를 찾아 age만 업데이트하더라도 
	항상 모든 필드값을 가져와서 모든 필드를 항상 새로운 값으로 교체합니다.

	💛PATCH : 
	서버에게 resource의 업데이트를 요청합니다. 회원정보 수정 등에 사용됩니다.
	PATCH는 PUT과 비교해서 부분 데이터를 업데이트하는 차이점이 있습니다.
	가령 user data의 구조가 user._id, user.firstName, user.lastName, user.age라고 한다면, 
	회원정보 수정시 PATCH는 _id를 찾아 age만 업데이트할때 
	_id와 age만 받아와서해당 부분을 업데이트 합니다.

	🤍링크 참조하자
	https://www.zerocho.com/category/HTTP/post/5b3723477b58fc001b8f6385
	https://m.blog.naver.com/azure0777/220824614635
*/

app.get("/todos", (req, res) => res.send(todos)); // postman 읽어오기

app.post("/todos", (req, res) => {
    // todo DB저장, title은 내가입력한거, id는 알아서생성, completed값은 false로 지정
    // todos배열에 todo객체 푸쉬해주고, (프엔에 저장)
    // return으로 서버에도 응답값 todo를 보내준다(보내줘야 서버에도저장, 백엔에 저장)
    const todo = { title: req.body.title, id: nanoid(), completed: false };
    todos.push(todo);
    return res.send(todo);
});

app.patch("/todos/:id", (req, res) => {
    //patch : 고치다
    //params로 받아온 id값의 index값을 추려냄
    // completed 불린값이라 명시해주고,todos배열안에 해당하는id값을가진놈을 send 보내준다
    // 만약 findIndex 반환값이 없으면 -1로 나오기때문에,
    // index 값이 - 1보다 크면 completed를 바꿔주고
    // 반환값이 없으면 실행이 안되거나 else 로 따로 리타이렉트 '/'홈주소를 적어주던지 해보삼
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
