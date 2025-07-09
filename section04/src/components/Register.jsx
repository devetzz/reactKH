import { useState, useRef } from "react";

function Register(props){
  // 값을 입력해서 화면에 보여야 되는 곳은 useState
  // 값이 계속해서 유지되야 하는 곳도 useState
  // 값이 변동이 되면 화면이 랜더링이 되는 것도 useState
  // 상태값(무조건 리랜더링 발생)
  const [input, setInput] = useState({
    name: '', birth: '', country: '', bio: ''
  });
  // 상태값(리랜더링 발생 안됨), 객체참조
  const countRef = useRef(0);   // const countRef = {current:0}
  const nameRef = useRef();   // const inputRef = {current: <input ~ />}

  // input 변경 이벤트 핸들러
  const onChange = (e)=>{
    countRef.current++;
    setInput({...input,[e.target.name]: e.target.value});
  };
  // submit 클릭 이벤트 핸들러
  const onSubmit = (e)=>{
    if(nameRef.current.value === ""){
        alert("이름을 입력하세요");
        nameRef.current.focus();
    }else{
        alert("전송 완료!");
    }
  };

  return (
    <>
    <div>
        <h1>이벤트 발생 횟수 {countRef.current}</h1>
        <div>
            <input ref={nameRef} value={input.name} name={"name"} onChange={onChange} placeholder={'이름'} />
        </div>
        <div>
            <input value={input.birth} name={"birth"} onChange={onChange} type="date" />
        </div>
        <div>
            <select value={input.country} name={"country"} onChange={onChange}>
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
            </select>
            {input.country}
        </div>
        <div>
            <textarea value={input.bio} name={"bio"} onChange={onChange} />
        </div>
        <div>
            <button onClick={onSubmit}>서버로 전송</button>
        </div>
    </div>
    </>
  );
}

export default Register;