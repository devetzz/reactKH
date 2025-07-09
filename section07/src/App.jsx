import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect } from 'react';
import Even from './components/Even';

function App() {
  // 상태값 변화
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  // 마운트(App이 생성되었을때 자동으로 실행하는 기능 : DB자료 가져옴)
  // 마운트, [count] 변화가 있을때 마다 자동으로 작동
  // [] 지우면 모든 스테이트 변화가 있을때 작동
  useEffect(()=>{
    // 마운트될때 실행하고 싶은 기능 구현
    console.log(`mount count = ${count} input = ${input}`);
  });

  // 이벤트 핸들러
  const onClickButton = (value) => {
    setCount(count + value);
  };
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} name={"phone"} onChange={onChangeInput} type="text" />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App
