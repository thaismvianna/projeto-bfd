import { useParams } from "react-router-dom";
import CardEstampa from "../components/CardEstampa";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";
import { produtos } from "../domains/produtos/produtos.data";

const ProdutoPage = () => {
  const { id } = useParams();

  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <>
      <NavBar />
      <CardEstampa idEstampa={produto.estampaId} />
      <Footer />
    </>
  );
};

export default ProdutoPage;
