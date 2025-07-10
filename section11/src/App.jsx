import './App.css';
import Header from './components/Header';
import Edit from './components/Edit';
import List from './components/List';
import Exam from './components/Exam';
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';

const mockData = [
  {id:0, isDone: false, content: 'react 공부하기', date: new Date().getTime()},
  {id:1, isDone: false, content: 'spring boot 공부하기', date: new Date().getTime()},
  {id:2, isDone: false, content: 'oracle 공부하기', date: new Date().getTime()},
];

function reducer(todos, action){
  switch(action.type){
    case "INSERT" : return [action.data, ...todos];
    case "UPDATE" : return todos.map((data)=>{
      return data.id === action.tagId ? {...data, isDone: !data.isDone} : data;
    });
    case "DELETE" : return todos.filter((data)=>{
      return data.id !== action.tagId
    });
    default : return todos;
  }
}


// 1. createContext() 생성해서 export 시킨다.(context : 자바static과 유사, 공동으로 사용됨)
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // 상태관리 (전체 데이터 관리)
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);  // {current: 3}

  // 삽입
  // useCallback : 해당되는 이벤트핸들러 함수를 딱 1번만 작동하도록 한다 = useEffect
  const onInsert = useCallback((content)=>{
    dispatch({
      type : "INSERT",
      data : {
        id: idRef.current++, 
        isDone: false, 
        content: content, 
        date: new Date().getTime()
      }
    });
  }, []);
  
  // 수정
  const onUpdate = useCallback((tagId)=>{
    dispatch({
      type : "UPDATE",
      tagId : tagId
    });
  }, []);

  // 삭제
  const onDelete = useCallback((tagId)=>{
    dispatch({
      type : "DELETE",
      tagId : tagId
    });
  }, []);

  // 딱 한번만 발생하도록 처리한다.
  const memorizedDispatch = useMemo(()=>{
    return {onInsert, onUpdate, onDelete};
  }, [onInsert, onUpdate, onDelete]);

  return (
    <>
      <div className='App'>
        <Header />
        <TodoStateContext.Provider value={{todos}}>
          <TodoDispatchContext.Provider value={memorizedDispatch}>
            <Edit />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  )
}

export default App
