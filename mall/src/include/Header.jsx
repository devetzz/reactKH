import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Header() {
    const loginState = useSelector((state) => state.loginSlice);

    return (
        <>
            <Navbar collapseOnSelect bg="primary" data-bs-theme="dark" className="bg-body-primary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">MAIN</Nav.Link>
                            <Nav.Link href="/about">ABOUT</Nav.Link>
                            {loginState.email ? (
                                <>
                                    <NavDropdown title="TODO" className="bg-body-primary" bg="primary">
                                        <NavDropdown.Item href="/todo/list">LIST</NavDropdown.Item>
                                        <NavDropdown.Item href="/todo/add">ADD</NavDropdown.Item>
                                        {/* <NavDropdown.Item href="/todo/read/50">READ</NavDropdown.Item>
                                        <NavDropdown.Item href="/todo/modify/5">MODIFY</NavDropdown.Item> */}
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">예비용</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="PRODUCT" className="bg-body-primary" bg="primary">
                                        <NavDropdown.Item href="/product/list">LIST</NavDropdown.Item>
                                        <NavDropdown.Item href="/product/add">ADD</NavDropdown.Item>
                                        <NavDropdown.Item href="/product/read/3">READ</NavDropdown.Item>
                                        <NavDropdown.Item href="/product/modify/5">MODIFY</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">예비용</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <></>
                            )}
                        </Nav>
                        <Nav>
                            {!loginState.email ? (
                                <Nav.Link href={'/member/login'}>Login</Nav.Link>
                            ) : (
                                <Nav.Link href={'/member/logout'}>Logout</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;