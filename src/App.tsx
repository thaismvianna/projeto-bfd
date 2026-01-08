import { ThemeProvider } from "styled-components"
import { GlobalStyles, theme } from "./styled/globalStyled"
import NavBar from "./components/Nav"
import CarouselComponent from "./components/Banner"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar/>
      <CarouselComponent />
      <h1>Meu projeto esta funcionando!
      </h1>
    </ThemeProvider>
  )
}

export default App
