import styled from "styled-components";

// Container principal do carrossel
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center; // centraliza título
`;

// Título do carrossel com espaçamento
export const Title = styled.h3`
  margin-bottom: 32px; // espaço abaixo do título
`;

// Wrapper para alinhar setas e lista, centralizado
export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

// Botões de seta
export const ArrowButton = styled.button<{ disabled?: boolean }>`
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

// Lista horizontal de produtos
export const ListaProdutos = styled.ul`
  display: flex;
  overflow: hidden;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: center;
`;

// Cada item da lista
export const ProdutoItem = styled.li`
  min-width: 200px;
  margin: 0 1rem;
  flex-shrink: 0;
`;

// Link clicável para o produto
export const ProdutoLink = styled.a`
  display: block;
  cursor: pointer;
`;

// Imagem do produto
export const ProdutoImagem = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

