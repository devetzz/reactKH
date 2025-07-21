import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useParams } from 'react-router-dom';
import useCustomMove from '../../hooks/useCustomMove'
import ReadComponent from '../../components/todo/ReadComponent';

export default function ReadPage() {
    const { tno } = useParams();
    const { moveToList, moveToModify } = useCustomMove();
    
    return (
        <Container>
            <Header />
            <ReadComponent tno={tno} moveToList={moveToList} moveToModify={moveToModify} />
        </Container>
    );
}