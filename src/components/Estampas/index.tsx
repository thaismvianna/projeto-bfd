import { Container,ArrowButton, CarouselWrapper, ListaProdutos, ProdutoItem, ProdutoLink, ProdutoImagem, Title } from "./styled";
import { useState } from "react";
import { produtos } from "../../domains/produtos/produtos.data";

const EstamapList = () => {
    
      const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // quantos produtos mostrar por vez
  const total = produtos.length;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, total - visibleCount));
  };

  const visibleProdutos = produtos.slice(
    startIndex,
    startIndex + visibleCount
  );
    
    return (
    <Container id="estampas">
      <Title>Estampas</Title>
      <CarouselWrapper>
        <ArrowButton onClick={handlePrev} disabled={startIndex === 0}>
          ◀
        </ArrowButton>

        <ListaProdutos>
          {visibleProdutos.map((produto) => (
            <ProdutoItem key={produto.id}>
              <ProdutoLink href={`/produto/${produto.id}`}>
                <ProdutoImagem src={produto.imagemUrl} alt={`Produto ${produto.id}`} />
              </ProdutoLink>
            </ProdutoItem>
          ))}
        </ListaProdutos>

        <ArrowButton
          onClick={handleNext}
          disabled={startIndex + visibleCount >= total}
        >
          ▶
        </ArrowButton>
      </CarouselWrapper>
    </Container>
  );
};

export default EstamapList;