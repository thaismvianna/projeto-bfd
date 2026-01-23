


import type { Produto } from './produtos.type';

export const produtos: Produto[] = [
    {
        id: 1,
        estampaId: 1,
        nome: 'Camiseta Azul',
        tipo: ['Camisas', 'Almofadas', 'Canecas', 'Adesivos'],
        imagemUrl: 'https://placehold.co/400x400/0000ff/ffffff',
    },
        {
        id: 2,
        estampaId: 2,
        nome: 'Camiseta Vermelha',
        tipo: ['Camisas'],
        imagemUrl: 'https://placehold.co/400',
    },
    {
        id: 3,
        estampaId: 3,
        nome: 'Caneca Vermelha',
        tipo: ['Canecas'],
        imagemUrl: 'https://placehold.co/400x400/ff0000/ffffff',
    },  
    {
        id: 4,
        estampaId: 4,
        nome: 'Adesivo Verde',
        tipo: ['Adesivos'],
        imagemUrl: 'https://placehold.co/400x400/00ff00/000000',
    },  
    {
        id: 5,
        estampaId: 5,
        nome: 'Caderno Amarelo',
        tipo: ['Cadernos'],
        imagemUrl: 'https://placehold.co/400',
    },  
    {
        id: 6,
        estampaId: 6,
        nome: 'Capa Preta',
        tipo: ['Capas'],
        imagemUrl: 'https://placehold.co/400',
    },
];