import styled from "styled-components";

/* Wrapper principal da Navbar */
export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* brand à esquerda, links à direita */
  align-items: center;
  width: 100%;
`;

/* Container dos links e toggle */
export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/* Navbar Card (fundo branco + bordas arredondadas + sombra) */
export const NavbarCard = styled.div`
  background-color: #ffffff;   /* fundo branco */
  border-radius: 12px;         /* bordas arredondadas */
  padding: 0.5rem 1rem;        /* espaçamento interno */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* sombra leve */
  width: 80%;                  /* largura centralizada */
  max-width: 1200px;           /* limite de largura */
  margin: 1rem auto;           /* centraliza horizontalmente */
`;
