/*
//? 배열 메서드.map()
//? Map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열에 반환
//?          한줄에 쓰기때문에 return 안적어줘도되고, return을 안적게되면 반환값이없어서 출력안됨.!
//? Map() 메서드를 이용해서 태그를 쉽게 추가해서 쓸 수 있다

const num = [1, 4, 9, 16];
const map1 = num.map(n => n*2);
const map2 = num.map(n => {
    n*2
} );

console.log(map1); // [2, 8, 18, 32] 출력
console.log(map2); // [ undefined, undefined, undefined, undefined ] 출력
// map 은 return 값을 꼭 줘야한다 ! 
// 배열의 메서드 같은경우, 화살표 함수가 들어가게되면 return 값을 거의 필수로 쓰기때문에
// 2줄이상으로 코드작성 시 return 썼는지 안썼는지 필수로 확인하길 바람!

//todo 배열 메서드.map() 실습1)
const num1 = [1,16,49,121];
const map33 = num1.map(x => Math.sqrt(x))
console.log(map33)

// 짝수이 경우에는 나누기 2의값, 홀수인 경우에는 제곱근

const mapresult = num1.map(x => {
    if(x % 2 == 0) {
       return x/2
    } else {
        return Math.sqrt(x)
    }
})
console.log(mapresult)


// 위의 내용을 삼항 연산자로 바꿔서 실행하세요
let result = num1.map((x) => { 
    return x%2==0 ? x/2 : Math.sqrt(x);  
})
// 혹은 한줄에 쓰고싶으면 {} 빼고 아래처럼 써준다
// let result = num1.map((x) => x%2==0 ? x/2 : Math.sqrt(x) )
console.log('삼항연산자로 답 : '+ result);
console.log(result);

//? 삼항연산자
let a = 10;
let b = 50;
let max = a>b ? a : b;
console.log(max);

if(a>b) {
    max = a;
}else {
    max = b;
}
console.log(max);


//todo 삼항연산자 실습1)
let accessAllowed;
let age = 30;

if(age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
console.log(accessAllowed);

let accessAllowed1 = age>18 ? true : false
console.log(accessAllowed1);
*/

//? 스프레드 연산자
//? 스프레드 연산자( ...) 
//?  : 기존 배열 또는 개체의 전체 또는 일부를 다른 배열이나 개체에 빠르게 복사
//?  배열 혹은 객체의 값을 꺼내서 보여주는 연산자
const num1 = [1,2,3];
const num2 = [4,5,6];
const num = [...num1, ...num2]; // ...num1 호출하면 숫자만 나오기때문에 [] 배열에 감싸서 넣어준다!
console.log(num);
console.log(...num1);

// 두개의 배열을 더할때 사용하는 메서드 : concat
const numPlus = num1.concat(num2);
console.log(numPlus);

// 스프레드 연산자와 구조화 : 구조화할때 사용하게되면 남은 값을 다 들고온다(배열로 사용됨)
// 위에 작성한 num 배열을 구조화 
const [one, two, ...rest] = num;
console.log(rest);


const myVehicle = {
    brand : "ford",
    model : "Mustang",
    color : "red"
}

const updateMyVehicle = {
    type : 'car',
    year : 2021,
    color : 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);