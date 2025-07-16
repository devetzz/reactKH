import React from 'react';
import { Container } from 'react-bootstrap';
import AddComponent from '../../components/todo/AddComponent';
import Header from '../../include/Header';

export default function AddPage() {
    return (
        <Container>
            <Header />
            <AddComponent />
        </Container>
    );
}