// 익명객체
const person = {
    name : "김동진",
    age : 25,
    tall : 175
}

let keyArray = Object.keys(person);
for(let i = 0; i < keyArray.length; i++){
    console.log(`[${i}]`);
    console.log(person[keyArray[i]]);
}