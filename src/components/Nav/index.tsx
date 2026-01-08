import { Nav, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavbarWrapper, NavItems, NavbarCard } from "./styled";

import logo from "../../assets/icone.svg";
import { IoCartOutline } from "react-icons/io5";


const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <NavbarCard>
                    <NavbarWrapper >
                        {/* Brand à esquerda */}
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="Logo" height={64} />
                        </Navbar.Brand>

                        {/* Links à direita */}
                        <NavItems>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#">Minha História</Nav.Link>
                                    <Nav.Link href="#">Estampas</Nav.Link>
                                    <Nav.Link href="#">Encomendas</Nav.Link>
                                    <Nav.Link href="#">
                                        <IoCartOutline />
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </NavItems>
                    </NavbarWrapper>
                </NavbarCard>
            </Container>
        </Navbar>
    );
};

export default NavBar;
