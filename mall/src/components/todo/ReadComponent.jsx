import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";

const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: null,
    complete: false
}

const ReadComponent = ({ tno }) => {
    const [todo, setTodo] = useState(initState);

    useEffect(() => {
        getOne(tno).then((data) => {
            return setTodo(data);
        });
    }, [tno]);

    return (
        <>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">tno</label>
                <div className="col-sm-10">
                    {todo.tno}
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">title</label>
                <div className="col-sm-10">
                    {todo.title}
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">writer</label>
                <div className="col-sm-10">
                    {todo.writer}
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Due Date</label>
                <div className="col-sm-10">
                    {todo.dueDate}
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">complete</label>
                <div className="col-sm-10">
                    {todo.title}
                </div>
            </div>
        </>
    );
};

export default ReadComponent;