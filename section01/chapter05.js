let num1 = 10;
let num2 = 3;

console.log(num1 / num2);

// number 타입 Infinity(양수 무한대) -Infinity(음수 무한대) NaN(Not a Number)
let num3 = 2 * "3abc";


// null 타입과 undifined 차이점
let num4 = null;
console.log(num4);


// 형변환(강제형변환)
let str1 = "10";
let str2 = "10";
let strToNum1 = Number(str1);
console.log(10+strToNum1);
console.log(str1 + str2);

// 형변환 했는데 결과값이 NaN
// Number, parseInt 차이점
let num5 = Number("20a");
let num6 = parseInt("a20");
console.log(num5);
console.log(num6);

// null 병합 연산자
let a;
let b = null;
a = b ?? 0;
console.log(`a=${a}`);