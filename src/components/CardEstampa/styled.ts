import styled from 'styled-components';

// Criamos o componente estilizado
export const CardContainer = styled.div`
  /* Estilo base */
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  max-width: 800px;
  height: 300px;
    margin: 20px auto;
    display: flex;
  
  /* Aqui entra a lógica: se a prop 'isActive' for true, a borda é verde */
  border: 2px solid #000;

  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

export const ImgEstampaCard = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  padding-top: 20px;
`;