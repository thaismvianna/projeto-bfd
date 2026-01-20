import AboutMe from "../components/AboutMe";
import CarouselComponent from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";

export default function Home() {
    return (
        <>
        <NavBar/>
        <CarouselComponent/>
        <AboutMe/>
        <Contact/>
        <Footer/>
        </>
    )
}