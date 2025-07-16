import { Container } from 'react-bootstrap';
import Header from '../include/Header';

const MainPage = () => {
    return (
        <>
            <Container>
                <Header />
                <div className="d-grid gap-2 mt-3">
                    <button type="button" className="btn btn-outline-secondary">Main Page</button>
                </div>
            </Container>
        </>
    );
}

export default MainPage;