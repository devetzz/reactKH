import './ListItem.css';
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const ListItem = ({id, isDone, content, date})=>{
    
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckBox = ()=>{
        onUpdate(id);
    };

    const onClickBtn = ()=>{
        onDelete(id);
    };

    return (
        <div className="ListItem">
            <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickBtn}>삭제</button>
        </div>
    );
};

//export default memo(TodoItem); 그런데 이렇게 했는데도 모두 TodoItem 이 리 랜더링이 진행이 된다.
//그 이유는 onUpdate, onDelete 랜더링이 될때마다 새로 만들어지기 때문에 주소로 비교하기 때문에
//내용은 같아도 주소는 달라서 Props 가 바뀐것으로 생각하기 때문에 모두 TodItem 이 리랜더링이 발생하게 된다.
// 여기서 이런기능을 하는 memo 컴포넌트를 고차 컴포넌트 (HOC) : Higher Order Component 라고 한다.
// export default memo(ListItem, (prevProps, nextProps)=>{
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;
//     return true;
// });
export default memo(ListItem);