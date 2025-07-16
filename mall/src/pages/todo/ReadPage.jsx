import React, { useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { createSearchParams, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import ReadComponent from '../../components/todo/ReadComponent';

export default function ReadPage() {
    const { tno } = useParams();
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
    const queryStr = useMemo(() => {
        return createSearchParams({ page, size }).toString();
    }, [page, size]);

    const moveToModify = useCallback((tno)=>{
        navigate({pathname : `/todo/modify/${tno}`, search: queryStr});
    }, [navigate, queryStr]);
    const moveToList = useCallback(()=>{
        navigate({pathname : `/todo/list`, search: queryStr});
    }, [navigate, queryStr]);

    return (
        <Container>
            <Header />
            <ReadComponent tno={tno} />
        </Container>
    );
}