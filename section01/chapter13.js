// 객체 생성 (생성자 객체, 리터럴 객체)
let obj1 = new Object();
let obj2 = {};

console.log(obj1);
console.log(obj2);

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "홍길동",
    age: 30,
    hobby: "축구",
    job: "Developer",
    extra: {}, // 객체도 들어올수 있음
    extra2: function () {}, // 함수도 들어올수 있음
    "like cat": true, // 한칸띄는 변수가 있으면 ""
};

// person.name = 10;
console.log(person);
console.log(person.name);
console.log(person["name2"]);

person.kh = "abc";
person.job = "abc";
delete person.job;

// 프로퍼티 존재 유무 확인
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);
