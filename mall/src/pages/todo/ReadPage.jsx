import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useParams } from 'react-router-dom';
import ReadComponent from '../../components/todo/ReadComponent';

export default function ReadPage() {
    const { tno } = useParams();
    
    return (
        <Container>
            <Header />
            <ReadComponent tno={tno} />
        </Container>
    );
}