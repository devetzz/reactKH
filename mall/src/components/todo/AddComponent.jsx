import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useCustomMove from '../../hooks/useCustomMove';
import { postAdd } from '../../api/todoApi';
import InfoModal from '../common/InfoModal';

const initState = { title: '', writer: '', dueDate: '' };

const AddComponent = () => {
    const [todo, setTodo] = useState({ ...initState });
    // post 방식 입력 완료 후  
    const [result, setResult] = useState(null);
    const { moveToList } = useCustomMove();
    // 모달창을 활성화 할 것인가
    const [infoModalOn, setInfoModalOn] = useState(false);

    // 변경되는 input값을 useState에 적용
    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value;
        setTodo({ ...todo });
    };

    const handleClickAdd = () => {
        postAdd(todo).then((result) => {
            console.log(result);
            setResult(result.TNO);
            // 모달창 활성화
            setInfoModalOn(true);
            // 입력 모드를 모두 초기화
            setTodo({ ...initState });
        }).catch((e) => {
            console.error(e);
        });
        console.log(todo);
    };

    // 모달창 close
    const closeModal = () => {
        setInfoModalOn(false);
        moveToList();
    };

    return (
        <>
            <Container className="p-5">
                <InfoModal show={infoModalOn}
                    onHide={() => setInfoModalOn(false)} title={`ADD RESULT`}
                    content={`New ${result} Added`} callbackFn={() => closeModal()}
                />
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>TITLE</Form.Label>
                        <Form.Control name="title" type="text" value={todo.title}
                            onChange={handleChangeTodo} placeholder="Enter Title"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>WRITER</Form.Label>
                        <Form.Control name="writer" type="text" value={todo.writer}
                            onChange={handleChangeTodo} placeholder="Enter Writer"
                        />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>DUEDATE</Form.Label>
                        <Form.Control name="dueDate" type="date" value={todo.dueDate}
                            onChange={handleChangeTodo} placeholder="Enter dueDate"
                        />
                    </Form.Group>
                </Form>
                <div className="d-flex justify-content-center gap-2 ">
                    <Button variant="success" type="button" onClick={handleClickAdd}>저장</Button>
                    <Button variant="secondary" type="button" onClick={() => { moveToList({ page: 1 }); }}>목록</Button>
                </div>
            </Container>
        </>
    );
};

export default AddComponent;