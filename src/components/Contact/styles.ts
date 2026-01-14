import styled from "styled-components";

// seção do contact
export const Section = styled.section`
  background-color: #ffc1ff; 
  padding: 20px 260px;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

// container 
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: flex; 
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// parte da imagem 
export const ContactImage = styled.img`
  width: 220px;
  border-radius: 10px;
`;

// parte do texto
export const Info = styled.div`
  color: #000;

  p {
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

// lista de contatos
export const ContactList = styled.ul`
  list-style: none;
  margin-top: 20px;
  padding: 0;
`;

// cada item da lista
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 18px;

  a {
    color: #483648;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    color: #ff69b4;
  }
`;
