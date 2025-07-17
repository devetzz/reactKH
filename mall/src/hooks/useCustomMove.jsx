import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

// param Tures이면 자신의 값을 정수로 변환하여 리턴하고, False이면 defaultValue
const getNum = (param, defaultValue) => {
    if (!param) {
        return defaultValue;
    }

    return parseInt(param);
}

const useCustomMove = () => {
    // <a href = ""></a>
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);
    const [queryParams] = useSearchParams();
    const page = getNum(queryParams.get('page'), 1);
    const size = getNum(queryParams.get('size'), 10);
    // ?page=1&size=10
    const queryDefault = createSearchParams({ page, size }).toString(); //새로 추가

    const moveToList = (pageParam) => {
        let queryStr = "";
        if (pageParam) {
            // ?page=4&size=10
            const pageNum = getNum(pageParam.page, page);
            const sizeNum = getNum(pageParam.size, size);
            queryStr = createSearchParams({ 
                page: pageNum,
                size: sizeNum 
            }).toString();
        } else {
            // ?page=1&size=10
            queryStr = queryDefault;
        }

        navigate({
            // ../list?page=1&size=10
            pathname: `../todo/list`,
            search: queryStr
        });

        // 계속 요청을 하면 값이 변하지 않더라도 계속해서 랜더링 진행할 수 있도록 설정
        setRefresh(!refresh); //추가
    }

    const moveToModify = (num) => {
        console.log(queryDefault);

        navigate({
            // ../modify/45?page=1&size=10
            pathname: `../todo/modify/${num}`,
            search: queryDefault //수정시에 기존의 쿼리 스트링 유지를 위해
        })
    }

    const moveToRead = (num) => {
        console.log(queryDefault);
        navigate({
            pathname: `../todo/read/${num}`,
            search: queryDefault
        })
    }

    return { moveToList, moveToModify, moveToRead, page, size, refresh }; //moveToModify 추가
}

export default useCustomMove;