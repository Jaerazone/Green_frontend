/*
//! 터미널에 node 자바스크립트.js 엔터치면 콘솔들이 출력됨!
console.log("Hello world");


//? 1) for문
//* 1-1) var는 for ()안에 작성하면 전역으로 선언
for (var i =0; i < 3; i++) {
    console.log(i); // 0,1,2출력
}
console.log(i); // i++로, 3출력

//* 1-2) let은 for ()안에 작성하면 스코프(유효범위)로 선언
for (let i =0; i < 3; i++) {
    console.log(i); // 0,1,2 출력
}
console.log(i); // 출력되는값 없음. 오류! 선언하지 않은 i라고 뜬다


//? 2) 클래스 란? 함수의 한 유형이지만 function 대신 class키워드를 사용
//?     속성 : constructor()메소드 내부에 할당
//* 2-1) 자바스크립트 객체
let user = {
    name: "Jhon",
    age: 30
};

//* 2-2) 함수 프로토타입
function User(name, age) {
    this.name = name;
    this.age = age;
}
//* 2-3) 함수로 생성한 객체(인스턴스)
let user1 = new User('jane', 30);
console.log(user);
console.log(user1);

//* 2-4) 클래스로 생성한 객체
class Car {
    // 클래스에서 속성 값을 할당할 때 사용하는 메서드
    constructor(name) {
        this.brand = name;
    }
    // 메서드는 동일하게 작성
    printbrand() {
        console.log(this.brand);
    }
}
let mycar = new Car("Ford");
mycar.printbrand();


//todo 클래스 실습1)
class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayhi() {
        console.log("반갑습니다 "+this.name+"입니다");
    }
}

let user = new UserClass("홍길동", 30)
user.sayhi()

//todo 클래스 실습2)
class Dog {
    constructor(family, name, age) {
        this.family = family;
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    sayhi() {
        console.log(this.family+"인 "+this.name+"입니다")
    }
}

const mydog = new Dog("진돗개", "백구", 1)
mydog.sayhi()
mydog.setName("마루");
console.log(mydog.getName())


//? 3) 클래스의 getter와 setter
//?  get과 set을 이용해서 getter와 setter 만들기
class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get name() {
        return this._name + "님";
    }
    set name(value) {
        if(value.length <3) {
            console.log('이름이 너무 짧습니다')
            return;
        }
        this._name = value;
    }
    sayhi() {
        console.log(`반갑습니다 ${this.name} 입니다`);
    }
}

let user2 = new UserClass("홍길동", 30)
user2.sayhi();
user2.name = "홍";
console.log(user2.name);


//todo 클래스 getter와 setter 실습1)
class Dog {
    constructor(family, name, age) {
        this.family = family;
        this.name = name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if(value == 0) {
            console.log('이름에 빈값은 안됩니다')
            return;
        }
        this._name = value;
    }
    sayhi() {
        console.log(`${this.family}인 ${this.name}입니다`);
    }
}

const mydog = new Dog("진돗개", "백구", 1);
mydog.sayhi();
mydog.name = "";
mydog.name = "마루";
console.log(mydog.name);


//? 클래스의 상속
//? 클래스를 다른 클래스로 확장, 기존에 존재하던 기능을 토대로 새로운 기능
//? 'extends' 키워드
//! 아들 = 아들 (오버라이딩)
//! 상속받은 메서드 아닌, 자체 메서드 사용
//! 유산다 물려받음, 내꺼있으면 내꺼씀
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}은 ${this.speed}로 달립니다`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name}이 멈췄습니다`);
    }
}
// extends를 이용해서 상속받은 자식 클래스
class Rabbit extends Animal {
    constructor(name, earLength) {
        // name은 부모한테 있는값이라 super()로 들고옴
        super(name); //부모한테 name가져옴
        this.earLength = earLength; // 자식의 추가된 속성은 this를 이용하여 생성ㄴㅁ
    }
    hide() {
        console.log(`${this.name}이 숨었습니다`);
    }
    //부모클래스에서도 있는 stop 메서드를 오버라이딩
    stop() {
        console.log(`자식클래스에서 멈췄습니다`);

        super.stop(); // 부모에 있는 stop을 가져와서 출력 - super 키워드 사용
        this.hide(); // 자기자신의 hide를 가져와서 출력 - this 키워드 사용
    }
}

let rabbit = new Rabbit("흰 토끼", 10);
rabbit.run(5); // 부모클래스의 메서드 사용
rabbit.hide(); // 자식클래스의 메서드 사용
rabbit.stop(); // 자식클래스에서 오버라이딩한 메소드가 출력
// 부모와 자식 똑같은 메서드가 있으면 자식 메서드가 실행됨(자신한테서 더 가까운메서드니깐~)
// super때문에 부모도 호출됨 (이런걸 명시적으로 호출한다고 한다)
console.log(rabbit.earLength);


//todo 클래스의 상속 실습 1)

class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get name() {
        return this._name + "님";
    }
    set name(value) {
        if(value.length <3) {
            console.log('이름이 너무 짧습니다')
            return;
        }
        this._name = value;
    }
    sayhi() {
        console.log(`반갑습니다 ${this.name} 입니다`);
    }
}
class Student extends UserClass {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    sayhi() {
        console.log(`${this.major}를 공부합니다`);
    }
    sayhi() {
        console.log(`${this.major}를 공부하는 ${this.name}입니다`);
    }
}

let student = new Student("홍길동", 30, "국어");
student.sayhi()


//todo 클래스의 상속실습 2)
class Dog {
    constructor(family, name, age) {
        this.family = family;
        this.name = name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if(value == 0) {
            console.log('이름에 빈값은 안됩니다')
            return;
        }
        this._name = value;
    }
    sayhi() {
        console.log(`${this.family}인 ${this.name}입니다`);
    }
}

class HouseDog extends Dog {
    constructor(family, name, age, address) {
        super(family, name, age);
        this.address = address;
    }
    intro() {
        super.sayhi();
        console.log(`${this.address}에 살고 있습니다`)
    }

}
let housedog = new HouseDog("비숑", "뽀미", 3, "부산");
housedog.intro();

*/