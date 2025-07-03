// 배열의 구조분해 할당
let arr = [1,2,3];
let [one, two, three=4, four=5] = arr;

console.log(one, two, three, four);

// 객체의 구조 분해 할당
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
};

// 얕은복사(주소공유) <-> 깊은복사(또다른주소)
let personCopy = person;
let name1 = personCopy.name;

let {
    age: myAge, //age 변수명을 myAge
    hobby,
    name,
    extra = "hello",
} = person;

console.log(myAge, name, hobby, extra);


const func = ({ name, age, hobby, extra }) => {
console.log(name, age, hobby, extra);
};
func(person);