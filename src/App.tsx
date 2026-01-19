import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styled/globalStyled";
import NavBar from "./components/Nav";
import CarouselComponent from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EncomendasPage from "./pages/Encomendas";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* página inicial*/}
          <Route path="/" element={
            <>
              <NavBar />
              <CarouselComponent />
              <AboutMe />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* página de encomendas */}
          <Route path="/encomendas" element={<EncomendasPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
