import { Section, Container, ContactImage, Info, ContactList, ContactItem } from "./styles";
import { FaInstagram, FaTwitch, FaStore } from "react-icons/fa";

const Contact = () => {
  return (
    <Section>
      <Container>
        <ContactImage
          src="/image-contact.png"
          alt="Imagem de uma ilustração escrito Lute como uma garota"
        />

        <Info>
          <ContactList>
            <h2>Se conecte comigo</h2>

            <ContactItem>
              <FaInstagram />
              <a href="https://www.instagram.com/vitazevedo/" target="_blank" rel="noreferrer">
                @vitazevedo
              </a>
            </ContactItem>

            <ContactItem>
              <FaStore />
              <a href="https://www.colab55.com/@vitazevedo?aff=r6l2h9" target="_blank" rel="noreferrer">
                Colab 55 - Lojinha
              </a>
            </ContactItem>

            <ContactItem>
              <FaTwitch />
              <a href="https://www.twitch.tv/vitazevedo" target="_blank" rel="noreferrer">
                twitch.tv/vitazevedo
              </a>
            </ContactItem>
          </ContactList>
        </Info>
      </Container>
    </Section>
  );
};

export default Contact;
