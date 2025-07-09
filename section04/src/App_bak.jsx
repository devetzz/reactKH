import './App.css';
import { useState } from 'react';
import Bulb from './components/Bulb';
import BulbButton from './components/BulbButton';
import Count from './components/Count';
import CountButton from './components/CountButton';

export default function App( ) {
  // 상태값
  const [light, setLight] = useState('OFF');
  const [count, setCount] = useState(0);

  // 이벤트 핸들러
  const lightClickButton = ()=>{
    setLight(light === 'ON' ? 'OFF' : 'ON');
  };
  const countClickButton = ()=>{
    setCount(count+1);
  };
  
  return (
    <>
      <div>
        <Bulb light={light} />
        <BulbButton light={light} lightClickButton={lightClickButton} />
        <Count count={count} />
        <CountButton countClickButton={countClickButton} />
      </div>
    </>
  )
  
}
