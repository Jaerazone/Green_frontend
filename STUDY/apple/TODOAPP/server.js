const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 

const MongoClient = require('mongodb').MongoClient;

app.set('view engine', 'ejs');

// app.listen(8080, function() {
//     console.log('listening on 8080')
// })
var db;
MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.n4mld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(에러, client) {

    //연결되면 할일
    if(에러) return console.log(에러);
    db = client.db('todoapp'); // todoapp이라는 database(폴더)에 연결좀요~

    db.collection('post').insertOne({이름 : 'John', _id : 100 }, function(에러, 결과) {
        console.log('저장완료');
    }); // 내가 원하는 데이터 저장할수있음

    // mongoclient 접속이 완료되면, 아래 app.listen 포트8080 실행해주세요~
    app.listen(8080, function() {
        console.log('listening on 8080')
    })
})



// 누군가가 /pet으로 방문하면..
// pet관련된 안내문을 띄워주자

app.get('/pet', function(요청, 응답) {
    응답.send('펫용품 쇼핑할 수 있는 페이지입니다')
})

app.get('/beauty', function(요청,응답) {
    응답.send('뷰티용품 쇼핑 페이지임')
})

app.get('/', function(요청,응답) {
    응답.sendFile(__dirname + '/index.html')
})

app.get('/write', function(요청,응답) {
    응답.sendFile(__dirname + '/write.html')
})

// 어떤사람이 /add경로로 POST 요청을 하면..
// ?? 를 해주세요~

app.post('/add', function(요청,응답) {
    응답.send('전송완료');
    console.log(요청.body);
    console.log(요청.body.title);
    console.log(요청.body.date);
    db.collection('post').insertOne({제목 : 요청.body.title, 날짜 : 요청.body.date }, function(에러, 결과) {
        console.log('저장완료');
    });
}) 

// 몽고DB에 저장한 데이터들을   /list경로에 GET 요청으로 접속하면
// 실제 DB에 저장된 데이터들로 예쁘게 꾸며진 HTML 보여줌
app.get('/list', function(요청, 응답) {
    // 디비에 저장된 post라는 collection안의 제목이뭐인? id가 뭐인? 데이터를 꺼내주세요
    db.collection('post').find().toArray( function(에러, 결과) { // .find().toArray() 임마 다가져와~ 세트로씀
        console.log(결과);
        응답.render('list.ejs', {posts: 결과});
    }) 

    
})

