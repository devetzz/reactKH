// 1. 상수 객체
// 변수 선언 (let,const : 상수 수정불가, 선언할때)
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.type = 10; // 수정 가능
animal.age = 10; // 추가 가능
delete animal.age; // 삭제 가능

// 상수인 animal에 새로운 객체를 대입하면 안됨.
// animal = {};
console.log(animal);


console.log("===============");

// 2.메서드
//값이 함수인 프로퍼티를 말함
const person = {
  name: "홍길동",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
  //익명함수 가능
  sayHi2: function () {
    console.log("안녕2!");
  },
  //화살표함수 가능
  sayHi3: () => {
    console.log("안녕3!");
  },
  //메서드 선언방식
  sayHi4() {
    console.log("안녕4!");
  },
};

person.sayHi4();
person["sayHi3"]();