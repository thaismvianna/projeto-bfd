import { ThemeProvider } from "styled-components"
import { GlobalStyles, theme } from "./styled/globalStyled"
import NavBar from "./components/Nav"
import CarouselComponent from "./components/Banner"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar/>
      <CarouselComponent />
      <AboutMe />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
