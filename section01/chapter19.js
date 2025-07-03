// 배열 내장 함수(forEach)
const arr = [1,2,3,4];
const newArr = [];

// 일반 for문
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// 향상된 for문
for(let value of arr){
    console.log(value);
}

console.log("================");
// forEach문
arr.forEach((v, i, a) => {
    console.log(`value= ${v}`);
    newArr.push(v*2);
    // console.log(`index= ${index}`);
    // console.log(`array= ${array}`);
});

console.log(newArr);

// 배열 내장 함수 map => 위도, 경도 => 새로운 리턴
const newArr2 = arr.map((e)=> e*4);
console.log(newArr2);

// 배열 내장 함수 찾기 4
arr.forEach((e)=>{
    if(e === 4){
        console.log(e);
    }
});

console.log(`5의 유무 : ${arr.includes(5)}`);

// 배열 내장 함수 indexof
console.log(`6의 위치 : ${arr.indexOf(6)}`);

// 배열 내장 함수 findIndex
const resultIndex = arr.findIndex((e)=>{
    console.log("찾는중임");
    return e === 7;
});
console.log(`7 findIndex : ${resultIndex}`);

// 배열 내장 함수 find : 해당되는 객체를 찾아서 리턴
let arr5 = [
    { name: "구길동"},
    { name: "홍길동"}
];

const resultArray = arr5.find((e)=> e.name === "구길동");

console.log(resultArray);


// 배열 내장 함수 filter : 조건에 맞는 객체를 찾아서 모두 리턴(검색 기능에 많이 사용)
let arr6 = [
    { name: "구길동", hobby: "테니스" },
    { name: "저길동", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" }
];

const resultArray2 = arr6.filter((e)=>{
    return e.hobby === "테니스";
});
console.log(resultArray2);

// 배열 내장 함수 map
const resultArray3 = arr6.map((e)=>{
    return e.hobby + e.name;
});
console.log(resultArray3);

console.log("================");
// 배열 내장 함수 slice
let arr7 = [
    { name: "구길동", hobby: "테니스" },
    { name: "저길동", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" }
];

console.log(arr7.slice(0,2));

// 배열 내장 함수 concat
let arr8 = [
    { name: "구길동", hobby: "테니스" },
    { name: "저길동", hobby: "테니스" }
];
let arr9 = [
    { name: "홍길동", hobby: "독서" },
    { name: "저길동", hobby: "독서" }
];

console.log(arr8.concat(arr9));

// 배열 내장 함수 sort
let charArray = ["라", "가", "파", "나"];
console.log(charArray.sort());

// 숫자 정렬 시 문제 발생
let numArray = [1, 20, 11, 34, 50, 100];
console.log(numArray.sort());
// 배열 내장 함수 sort 정렬 기준 설정(콜백 함수)
// numArray.sort((a,b)=> b - a);
console.log(numArray);

// 배열 내장 함수 tosorted : 정렬된 배열 새로 리턴
const sortedArray = numArray.toSorted((a,b)=> b - a);
console.log(sortedArray);

// 배열 내장 함수 join
const arr10 = ["김동진","님","안녕하세요","반가워요"];
const resultStr = arr10.join("===");
console.log(resultStr);

// 배열 삽입 push
let arr1 = [1, 2, 3];
arr1.push(4)
console.log(arr1);
const newLength = arr1.push( 5, 6, 7); //push는 배열의 길이를 리턴한다.
console.log(arr1);
console.log(newLength);

// 배열 내용 삭제 pop
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); //제거한값을 반환한다.
console.log(poppedItem);
console.log(arr2);