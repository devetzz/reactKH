import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useParams } from 'react-router-dom';
import useCustomMove from '../../hooks/useCustomMove'
import ReadComponent from '../../components/product/ReadComponent';

export default function ReadPage() {
    const { pno } = useParams();
    const { moveToList, moveToModify } = useCustomMove();
    
    return (
        <Container>
            <Header />
            <ReadComponent pno={pno} />
        </Container>
    );
}