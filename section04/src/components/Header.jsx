import {useState} from 'react';

function Header(){
  // let count = 0;
  const [count, setCount] = useState(0);
  const [sw, setSwitch] = useState("ON");
  // 이벤트 핸들러
  // const onClickBtn1 = (e)=>{setSwitch(sw === "ON" ? "OFF" : "ON" );};
  const onClickBtn2 = (e)=>{setCount(count+1)};


  return (
    <>
    <div>
      <h1>{sw}</h1>
      <button style={{border: "1px solid black"}} onClick={(e)=>{setSwitch(sw === "ON" ? "OFF" : "ON" )}} >
        {sw === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button onClick={(e)=>{setCount(count+1)}}> + </button>
    </div>
    </>
  )
}

export default Header;