
//? 선언적 함수와 익명함수

//? 선언적 함수 function 키워드로 작성한 함수
//? funtion hello() { 블라블라 }

//? 익명함수 : 함수의 이름없이 내용만 있는 함수(변수에 넣어서 사용가능
//? hello = funtin() { 블라블라 }

//? 이런 익명함수에서 화살표 함수가 하나더 나옴
//? 함수 표현식보다 단순하고 간결한 문법으로 함수를 만드는 방법
//? let func = (arg1, arg2, ...argN) => expression
// ? 표현식 ,안에 실행될 코드를 {}감싸면 : 실행코드
//? *return이 필요하다면 반드시 return을 따로 적어야한다.
//? 표현식, 안에 실행될 코드를 한줄로 작성 ; return 실행코드

//? 화살표 함수 this
//? 화살표 함수에는 this가 없다
//? 화살표 함수 안에서 쓰이는 this는 화살표함수의 thir가 아닌 바깥의함수 this
//? 외부의 this를 쓰기 위해서는 화살표 함수를 써야한다

//todo 화살표 함수 실습1)
// 화살표함수는 익명함수이기 때문에 변수에 할당해서 사용
let sum = (a,b) => a+b
console.log(sum(1,2))

// 선언적 함수의 모습 (return을 꼭 적어줘야한다)
function sumFunction(a,b) {
    return a+b
}
console.log(sumFunction(1,2))

//todo 화살표 함수 실습2)
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length<=6 );
console.log(result);

