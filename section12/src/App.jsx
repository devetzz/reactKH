import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react';
import Button from './components/Button';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "INSERT": return [action.data, ...state];
    case "UPDATE": return state.map((item)=> String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE": return state.filter((item)=> String(item.id) !== String(action.id));
    default : return state;
  }
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();


function App() {
  
  
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(4);

  // 입력하기
  const onInsert = (createdDate, emotionId, content) => {
    dispatch({
      type: 'INSERT',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    });
  };
  // 수정하기
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 삭제하기
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  // const onClickHome = ()=>{
  //   nav('/');
  // };
  // const onClickDiary = ()=>{
  //   nav('/diary/2');
  // };

  return (
    <>
      {/* <div className='App'>
        <Link to={"/"}>HOME</Link>
        <Link to={"/new/*"}>NEW</Link>
        <Link to={"/diary/3"}>DIARY</Link>
        <Link to={"/edit/3"}>EDIT</Link>
      </div>
      <div className='App'>
        <button onClick={onClickHome}>HOME</button>
        <button onClick={()=>{nav('/new/*');}}>NEW</button>
        <button onClick={onClickDiary}>DIARY</button>
        <button onClick={()=>{nav('/edit/2');}}>EDIT</button>
      </div>
      <div className='App'>
        <img src="/emotion11.png" alt="" />
        <img src="/emotion12.png" alt="" />
        <img src="/emotion13.png" alt="" />
        <img src="/emotion14.png" alt="" />
        <img src="/emotion15.png" alt="" />
      </div>
      <div className='App'>
        <img src={getEmotionImages(1)} alt="" />
        <img src={getEmotionImages(2)} alt="" />
        <img src={getEmotionImages(3)} alt="" />
        <img src={getEmotionImages(4)} alt="" />
        <img src={getEmotionImages(5)} alt="" />
      </div>
      <div className='App'>
        <Header title={'리액트'} leftChild={<Button text={'<'} />} rightChild={<Button text={'>'} />} />
      </div>
      <div className='App'>
        <Button text={'시작하기'} type={'POSITIVE'} onClick={()=>{alert('시작하기')}} />
        <Button text={'정지하기'} type={'NEGATIVE'} onClick={()=>{alert('정지하기')}} />
        <Button text={'홈으로가기'} type={'POSITIVE'} onClick={()=>{alert('홈으로가기')}} />
      </div> */}
      <hr />
      {/* <div className='App'>
        <Button text={'insert'} onClick={()=>{onInsert(new Date().getTime(), 3, '민우짱')}} />
        <Button text={'update'} onClick={()=>{onUpdate(3, new Date().getTime(), 1, '민우짱')}} />
        <Button text={'delete'} onClick={()=>{onDelete(3)}} />
      </div> */}
      <DiaryStateContext.Provider value = {data}>
        <DiaryDispatchContext.Provider value = {{onInsert, onUpdate, onDelete}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new/*' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;
