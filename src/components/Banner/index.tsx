import { Carousel } from "react-bootstrap";
import { CarouselSlide, CarouselWrapper } from "./styled";

const CarouselComponent = () => {
    return (
        <CarouselWrapper>
            <Carousel>
                <Carousel.Item>
                    <CarouselSlide>Slide 1 - Adicione sua imagem aqui</CarouselSlide>
                </Carousel.Item>

                <Carousel.Item>
                    <CarouselSlide>Slide 2 - Adicione sua imagem aqui</CarouselSlide>
                </Carousel.Item>

                <Carousel.Item>
                    <CarouselSlide>Slide 3 - Adicione sua imagem aqui</CarouselSlide>
                </Carousel.Item>
            </Carousel>
        </CarouselWrapper>
    );
};

export default CarouselComponent;
