import NavBar from "../../components/Nav";
import Footer from "../../components/Footer";
import { PageContainer, FormBox, Title, Text, Form, TextArea, Input, Button } from "./styled.tsx";

const EncomendasPage = () => {
  const handleSubmit = () => {
    /* para testar a função e depois usar o backend*/
    alert('Mensagem enviada!');
  };

  return (
    <>
      <NavBar />
      
      <PageContainer>
        <FormBox>
          <Title>Encomendas Personalizadas</Title>
          
          <Text>Quer uma arte exclusiva do jeitinho que sempre imaginou? Mande sua ideia abaixo:</Text>
          
          <Form>
            <TextArea placeholder="Descreva sua ideia aqui..."></TextArea>
            <Input type="text" placeholder="Seu nome" />
            <Input type="text" placeholder="Seu WhatsApp ou e-mail" />
            <Button type="button" onClick={handleSubmit}>
              Enviar Mensagem
            </Button>
          </Form>
        </FormBox>
      </PageContainer>
      
      <Footer />
    </>
  );
};

export default EncomendasPage;