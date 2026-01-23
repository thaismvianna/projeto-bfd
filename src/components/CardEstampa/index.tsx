import { produtos } from "../../domains/produtos/produtos.data";
import { CardContainer, ImgEstampaCard } from "./styled";

type cardEstampaProps = {
    idEstampa: number;

}


const CardEstampa = ({ idEstampa }: cardEstampaProps) => {
    // Buscamos o produto. Note que usei p.estampaId, que é o que estava no seu objeto anterior
    const produto = produtos.find(p => p.estampaId === idEstampa);

    const TotalTipos = produto?.tipo.length ?? 0;

    return (
        <CardContainer>
            {/* Usamos imagemUrl e tipo conforme seu arquivo de dados */}
            <ImgEstampaCard src={produto?.imagemUrl} alt={`Estampa: ${produto?.nome}`} />
            <div>
                <h4>{produto?.nome}</h4>
                <p>Esta estampa está disponível em {TotalTipos} tipos diferentes.</p>
            </div>
        </CardContainer>

    );
}

export default CardEstampa;