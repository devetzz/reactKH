// Spread 연산자 [a, b, c, d, f, g,~] => ...
let arr1 = [1,2,3];
let arr2 = [5, ...arr1, 6, 7];
console.log(arr2);

// 2. Spread 연산자(객체)
let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    a: obj1.a,
    b: obj1.b,
    c: 3,
    d: 4,
};
let obj3 = {
    ...obj1,
    c: 3,
    d: 4,
};
console.log(obj3);

// spread의 강력한 힘은 깊은복사
let obj4 = {...obj3};
console.log(obj4);
obj4.d = 10;
console.log("=============");
console.log(obj3);
console.log(obj4);

// 3. Spread 연산자(함수매개변수)
function funcA(p1, p2, p3) {
console.log(p1, p2, p3);
}
funcA(...arr1);


// 4. rest 매개변수
// rest는 나머지 , 나머지 매개변수
arr1 = [1, 2, 3];
function funcB(one, ...ds) {
console.log(ds);
}
funcB(...arr1);