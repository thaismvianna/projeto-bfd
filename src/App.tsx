import { ThemeProvider } from "styled-components"
import { GlobalStyles, theme } from "./styled/globalStyled"
import NavBar from "./components/Nav"
import CarouselComponent from "./components/Banner"
import AboutMe from "./components/AboutMe"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar/>
      <CarouselComponent />
      <AboutMe />
      <h1>Meu projeto esta funcionando!
      </h1>
    </ThemeProvider>
  )
}

export default App
