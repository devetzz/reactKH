import './App.css';
import Header from './components/Header';
import Edit from './components/Edit';
import List from './components/List';
import { useState, useRef, useReducer } from 'react';
import Exam from './components/Exam';

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


function App() {
  // 상태관리 (전체 데이터 관리)
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);  // {current: 3}

  // 삽입
  const onInsert = (content)=>{
    dispatch({
      type : "INSERT",
      data : {
        id: idRef.current++, 
        isDone: false, 
        content: content, 
        date: new Date().getTime()
      }
    });
  };
  // 수정
  const onUpdate = (tagId)=>{
    dispatch({
      type : "UPDATE",
      tagId : tagId
    });
    // setTodos(
    //   todos.map((data)=>{return data.id === tagId ? {...data, isDone: !data.isDone} : data})
    // );
  };

  // 삭제
  const onDelete = (tagId)=>{
    dispatch({
      type : "DELETE",
      tagId : tagId
    });
    // setTodos(
    //   todos.filter((data)=>{
    //     return data.id !== tagId;
    //   })
    // );
  };

  return (
    <>
      <div className='App'>
        <Header />
        <Edit onInsert={onInsert} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  )
}

export default App
