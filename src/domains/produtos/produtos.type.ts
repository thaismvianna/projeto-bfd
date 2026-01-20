export interface Produto {
    id: number;
    estampaId: number; // 🔑 ligação com a estampa
    tipo: TipoProduto;
    preco?: number;
    imagemUrl: string;
}

export type TipoProduto = 'Adesivos' 
| 'Almofadas' 
| 'Azulejos' 
| 'Bolsas' 
| 'Cadernos' 
| 'Canecas' 
| 'Capas' 
| 'Cartoes Comemorativos' 
| 'Case' 
| 'Camisas' 
| 'Chinelos' 
| 'Leggins' 
| 'Meias' 
| 'Toalhas' 
| 'Postes';