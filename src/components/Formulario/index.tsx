import { Button, Form, FormBox, Input, PageContainer, TextArea, Title, Text } from "./styled";

const Formulario = () => {
  const handleSubmit = () => {
    /* para testar a função e depois usar o backend*/
    alert('Mensagem enviada!');
  };

  return (
    <>        
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
    </>
  );
};

export default Formulario;