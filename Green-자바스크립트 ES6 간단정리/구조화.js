//? 구조화?
//? 객체나 배열에 저장된 데이터 전체가 아닌 일부만 필요한 경우 사용
//? 구조화 이전, 배열의 값을 각각의변수에 할당하는 방법

const vehicles = ['mustang', "f-150", "expendition"];

// 구조화 : 사용할 변수들의 이름을 모아서, 배열기호안에 나열한 후
// 다른 배열의 요소들을 순서에 맞게 할당받는다.
// 요소값이 필요하지않은 경우는 빈칸으로 두고 작성한다
const [car, , suv] = vehicles;
console.log(car);
//console.log(truck);
console.log(suv);

//todo 구조화 실습1)
const fruit = ['사과', '바나나', '오렌지'];
const [apple, , orange] = fruit;
console.log(apple);
console.log(orange);