import { produtos } from "../../domains/produtos/produtos.data";
import { ListaContainer, TipoItem, TipoImagem, TipoNome, ContainerListaProdutos, TituloLista } from "./styled";

const ListaProdutosEstampados = () => {
    const produto = produtos[0]; // ou receber via props depois

    return (
        <ContainerListaProdutos>
            <TituloLista>Lista de produto:</TituloLista>
            <ListaContainer>
                {produto?.tipo?.map((tipo, index) => (
                    <TipoItem key={index}>
                        <TipoImagem src={produto.imagemUrl} alt={tipo} />
                        <TipoNome>{tipo}</TipoNome>
                    </TipoItem>
                ))}
            </ListaContainer>
        </ContainerListaProdutos>
    );
};

export default ListaProdutosEstampados;
