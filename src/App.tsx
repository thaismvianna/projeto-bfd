import { ThemeProvider } from "styled-components"
import { GlobalStyles, theme } from "./styled/globalStyled"


function App() {

  return (
    // <ThemeProvider theme={{theme}}>
    <>
    <GlobalStyles/>
      <h1>Meu projeto esta funcionando!
      </h1>
    </>
    // </ThemeProvider>
  )
}

export default App
