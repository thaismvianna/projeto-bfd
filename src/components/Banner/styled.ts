import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 80%;          /* largura do carrossel */
  max-width: 1200px;   /* limite de largura */
  margin: 2rem auto;   /* centraliza horizontalmente */
  border-radius: 12px; /* bordas arredondadas */
  overflow: hidden;    /* para manter bordas arredondadas */
  background-color: #000; /* cor de fundo temporária */
  height: 400px;       /* altura do carrossel */
  
  `;

export const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  height: 400px;
  overflow: hidden;
`;
