// src/components/BarraNavegacao.js
'use client';  // Se estiver usando Next.js 13 ou superior, adicione a diretiva 'use client'

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function BarraNavegacao() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Perfil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/endereco">Endereço</Nav.Link>
            <Nav.Link href="/cartao">Cartão</Nav.Link>
            <Nav.Link href="/plano-loja">Plano Loja</Nav.Link>
            <Nav.Link href="/cadastro-plano">Cadastro Plano</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
