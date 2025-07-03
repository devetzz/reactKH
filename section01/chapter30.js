// function task() {
//   setTimeout(() => {
//     console.log("hello");
//   }, 3000);
// }
// task();

// function add(a, b) {
//   setTimeout(() => {
//     const sum = a + b;
//     console.log(sum);
//   }, 3000);
// }
// add(1, 2);

//비동기적인 함수를 외부에서 활용하고 싶으면 다음과 같이 콜백함수 활용하기
function add(a, b, cb) {
  setTimeout(() => {
    const sum = a + b;
    cb(sum);
  }, 3000);
};

// add(a, b, callback)
add(1, 2, (sum) => {
  console.log(sum);
});
