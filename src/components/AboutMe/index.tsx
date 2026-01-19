
import icone from '../../assets/bfsqvizOQduz3h55rIQT_0yriIrW3kiUluPaF-removebg-preview.png';
import { AboutMeContainer, Centrtalize } from './styled';


const AboutMe = () => {
    return(
        <>
        <Centrtalize>
            <h3>Minha História</h3>
            <AboutMeContainer>
                <img src={icone} alt="Imagem de perfil" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolores, vero ut harum, facilis quisquam esse distinctio accusantium magnam inventore natus dolore voluptates nostrum eum cumque quam laborum quidem rerum.</p>
            </AboutMeContainer>
        </Centrtalize>
        </>
    )
}

export default AboutMe; 