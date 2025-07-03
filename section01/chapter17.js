// 단락 평가 TEST
let varA = false;
let varB = true;

// AND 연산자
console.log(varA && varB);

// OR 연산자
console.log(varB || varA);

// 증명
let falseFnc = () => {
    console.log("false 함수");
    return false;
}
let trueFnc = () => {
    console.log("true 함수");
    return true;
}

console.log(trueFnc() && falseFnc());
console.log(falseFnc() && trueFnc());
console.log(trueFnc() || falseFnc());
console.log(falseFnc() || trueFnc());

// 단락평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName(); // 출력: person의 값이 없음
printName({ name: "홍길동" }); //출력: 홍길동
// 조건문에서 false 로 인정되는 것(primitive type 모두 들어간다) + NaN
undefined;
null;
0;
false;
("");
NaN;