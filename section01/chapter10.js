// 함수 호이스팅 안된다.
// sub(11, 20);
// sub2(11, 20);


// 함수 선언문 : 함수 호이스팅된다.
function add(num1, num2){
    console.log(num1 + num2);
}

// 함수 표현식(익명함수)(화살표함수) : 함수 호이스팅이 안된다.
let sub = function (num1, num2){
    console.log(num1 + num2);
}

let sub2 = (num1, num2) => console.log(num1 + num2);

// 콜백 함수
let sub3 = (sub, num1, num2) => {
    console.log(num1 * num2);
    sub(num1, num2);
}

sub3(sub, 21, 20);

console.log(sub3);

console.log("==============");
// 2) 콜백함수의 활용
function repeat(count, callback) {
for (let idx = 1; idx <= count; idx++) {
    callback(idx);
}
}
repeat(5, (idx) => {
    console.log(idx);
});
repeat(5, (idx) => {
    console.log(idx * 2);
});
repeat(5, (idx) => {
    console.log(idx * 3);
});