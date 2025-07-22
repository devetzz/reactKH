import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import { Container } from "react-bootstrap";
import PageComponent from "../common/PageComponent";

const initState = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    next: false, totoalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}

const ListComponent = () => {
    const { page, size, moveToList, moveToRead, refresh } = useCustomMove();
    //serverData는 나중에 사용
    const [serverData, setServerData] = useState(initState);

    useEffect(() => {
        getList({ page, size }).then(data => {
            setServerData(data);
        })
    }, [page, size, refresh])

    return (
        <>
            <Container className="px-5 justify-content-center mt-3">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">TNO</th>
                            <th scope="col">WRITER</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">DATE</th>
                            <th scope="col">COMPLETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            serverData.dtoList.map((todo)=>{
                                return (
                                <tr key={todo.tno} className="text-center" onClick={()=>moveToRead(todo.tno)}>
                                    <td>{todo.tno}</td>
                                    <td>{todo.writer}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.dueDate}</td>
                                    <td>{todo.complete}</td>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>
                <PageComponent serverData={serverData} moveToList={moveToList} />
            </Container>
        </>
    );
};

export default ListComponent;