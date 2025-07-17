import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useParams} from 'react-router-dom';
import ModifyComponent from '../../components/todo/ModifyComponent';
import useCustomMove from '../../hooks/useCustomMove';

export default function ModifyPage() {
    const { tno } = useParams();
    const { moveToList, moveToRead } = useCustomMove();

    return (
        <Container>
            <Header />
            <ModifyComponent tno={tno} moveToList={moveToList} moveToRead={moveToRead} />
        </Container>
    );
}