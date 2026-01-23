import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styled/globalStyled";
import EncomendasPage from "./pages/Encomendas";
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* página inicial*/}
          <Route path="/" element={<Home />} />
          {/* página de encomendas */}
          <Route path="/encomendas" element={<EncomendasPage />} />
          <Route path="/produto/:id" element={<ProdutoPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
