var express = require("express");
var router = express.Router();
const comments = require("../comment.json");
let count = comments.length;

/* memo.id값에 맞는 코멘트 배열을 전달 */
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    // 값을 여러개 찾기위해 filter사용
    const comment = comments.filter((c) => c.memoid == id);
    console.log(comment);
    res.send(comment);
  });
  

/* */
router.post('/', function(req,res, next) {
    const comment = req.body.data.comment;
    // 전체 코멘트에 푸쉬, 새로 추가할 코멘트의 id값
    // 위에 작성한 cout의 const를 let으로 수정하였음
    count ++;
    // 자바스크립트 객체 comment에다가 id객체 추가
    comment.id = count;
    console.log(comment);
    //전체 코멘트에 추가
    comments.push(comment);
    // 특정메모(id)의 코멘트에만 필터
    const commentmemo = comments.filter((c) => c.memoid == comment.memoid);
    res.send(commentmemo);
})

module.exports = router;
