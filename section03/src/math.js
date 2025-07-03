// 모듈, 클래스, 함수(선언, 표현(2))
export default function (a, b){
    return a + b;
}
export const sub = (a, b)=> a - b;

// 모듈을 통해 외부로 보낸다
// 키값과 value값이 같으면 생략 가능
// module.exports = {
//     add : add,
//     sub : sub
// };
// export {add,sub};