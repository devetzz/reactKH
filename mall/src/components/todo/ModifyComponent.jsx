import { useEffect, useState } from "react";
import { Form, Container } from "react-bootstrap";
import { getOne, putOne, deleteOne } from "../../api/todoApi";
import InfoModal from "../common/InfoModal";

const initState = {
    tno: 0,
    title: "",
    writer: "",
    dueDate: "",
    complete: false,
};

const ModifyComponent = ({ tno, moveToList }) => {
    const [todo, setTodo] = useState({ ...initState });
    //모달창을 활성화 할것인지 안할것인지 결정
    const [infoModalOn, setInfoModalOn] = useState(false);
    //post 방식 입력완료후 결과값을 저장 상태객체
    const [result, setResult] = useState(null);

    useEffect(() => {
        getOne(tno).then((data) => {
            setTodo(data);
            console.log(data);
        });
    }, [tno]);

    // form 데이타를 수정했을때 상태값을 변경
    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value;
        setTodo({ ...todo });
    };

    // select option 변경 시 todo.complete (true, false)
    const handleChangeTodoComplete = (e) => {
        const value = e.target.value;
        setTodo({
            ...todo,
            complete : value === "true"
        });
    };

    // 수정하기 버튼 이벤트 처리
    const handleClickModify = () => {
        putOne(todo).then((data) => {
            console.log("modify result:" + data);
            setResult(data.RESULT);
            //모달창 활성화
            setInfoModalOn(true);
        })
    };

    // 삭제하기 버튼 이벤트 처리
    const handleClickDelete = () => {
        deleteOne(tno).then((data) => {
            console.log("modify result:" + data);
            setResult(data.RESULT);
            //모달창 활성화
            setInfoModalOn(true);
        })
    }

    //모달창을 close
    const closeModal = () => {
        setInfoModalOn(false);
        moveToList();
    };

    return (
        <Container className="p-5">
            <InfoModal
                show={infoModalOn}
                title={`RESULT`}
                content={`${result}`}
                callbackFn={closeModal}
            />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>TNO</Form.Label>
                    <Form.Control
                        value={tno}
                        type="text"
                        placeholder="Enter no"
                        disabled
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>WRITER</Form.Label>
                    <Form.Control
                        value={todo.writer}
                        type="text"
                        placeholder="Enter writer"
                        disabled
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>TITLE</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={todo.title}
                        placeholder="Enter title"
                        onChange={handleChangeTodo}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>DATE</Form.Label>
                    <Form.Control
                        name="dueDate"
                        value={todo.dueDate}
                        type="date"
                        onChange={handleChangeTodo}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>COMPLETE</Form.Label>
                    <Form.Select
                        name="status"
                        value={todo.complete ? true : false}
                        onChange={handleChangeTodoComplete}
                    >
                        <option value="true">Completed</option>
                        <option value="false">Not Yet</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-center gap-2 mt-5">
                <button className="btn btn-secondary" type="button" onClick={handleClickModify}>
                    수정하기
                </button>
                <button className="btn btn-danger" type="button" onClick={handleClickDelete}>
                    삭제하기
                </button>
                <button className="btn btn-primary" type="text" onClick={() => moveToList({ page: 1 })}>
                    목록가기
                </button>
            </div>
        </Container>
    );
};

export default ModifyComponent;