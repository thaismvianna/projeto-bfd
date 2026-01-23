import styled from "styled-components";

export const ListaContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 itens por linha */
  gap: 16px; /* espaço entre itens */
`;

export const TipoItem = styled.li`
  display: flex;
  flex-direction: column; /* imagem em cima, nome embaixo */
  align-items: center;
`;

export const TipoImagem = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 16px; /* espaço entre imagem e nome */
`;

export const TipoNome = styled.span`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

export const ContainerListaProdutos = styled.div`
  max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

export const TituloLista = styled.h4`
  margin-bottom: 16px;`;