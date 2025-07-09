import './List.css'
import ListItem from './ListItem';
import { useState } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChangeInput = (e) => {
        setSearch(e.target.value);
    };

    const getFilterTodos = () => {
        if (search === '') {
            return todos;
        }

        return todos.filter((data) => data.content.toLowerCase().includes(search.toLowerCase()));
    };

    const filterTodos = getFilterTodos();

    // 랜더링이 일어날때 마다, todo 전체갯수, todo isDone=true 완료된 갯수, todo isDone=false 완료된 갯수
    // useMemo(()=>{}, [])  useEffect(()=>{},[])
    const getAnalyzeData = ()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((data)=>{return data.isDone === true}).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount};
    };
    const {totalCount, doneCount, notDoneCount} = getAnalyzeData();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>
                <p>totalCount : {totalCount}</p>
                <p>doneCount : {doneCount}</p>
                <p>notDoneCount : {notDoneCount}</p>
            </div>
            <input value={search} placeholder="검색어를 입력하세요" onChange={onChangeInput} />
            <div className="list_wrapper">
                {filterTodos.map((data) => { return <ListItem key={data.id} {...data} onUpdate={onUpdate} onDelete={onDelete} /> })}
            </div>
        </div>
    );
};


export default List;