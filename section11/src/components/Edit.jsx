import './Edit.css'
import { useState, useRef, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const Edit = ()=>{
    const { onInsert } = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onChangeInput = (e)=>{
        setContent(e.target.value);
    };

    const onSubmit = ()=>{
        if(content === ''){
            alert('값을 입력하세요');
            inputRef.current.focus();
            return;
        }
        onInsert(content);
        setContent("");
    };
    
    const onKeyDown = (e)=>{
        // KeyCode 13 : Enter
        if(e.keyCode === 13){
            if(content === ''){
                alert('값을 입력하세요');
                inputRef.current.focus();
                return;
            }
            onSubmit();
        }
    };

    return (
        <div className="Edit">
            <input value={content} placeholder="새로운 Todo..." type='text' onChange={onChangeInput} onKeyDown={onKeyDown} />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};


export default Edit;