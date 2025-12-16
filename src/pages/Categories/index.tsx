import EstateList from '../../components/EstateList'
import Imoveis from '../../models/Imoveis'

const promoçoes: Imoveis[] = [
  {
    id: 1,
    category: 'Apartamento',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'venda',
    infos: ['10%', 'R$ 250.000,00'],
    image: 'https://placehold.co/222x250'
  },
  {
    id: 2,
    category: 'Apartamento',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'venda',
    infos: ['10%', 'R$ 250.000,00'],
    image: 'https://placehold.co/222x250'
  },
  {
    id: 3,
    category: 'Apartamento',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'venda',
    infos: ['10%', 'R$ 250.000,00'],
    image: 'https://placehold.co/222x250'
  },
  {
    id: 4,
    category: 'Apartamento',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'venda',
    infos: ['10%', 'R$ 250.000,00'],
    image: 'https://placehold.co/222x250'
  }
]

const comercio: Imoveis[] = [
  {
    id: 5,
    category: 'Comércio',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'venda',
    infos: ['15%', 'R$ 400.000,00'],
    image: 'https://placehold.co/222x250'
  },
  {
    id: 6,
    category: 'Comércio',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'venda',
    infos: ['15%', 'R$ 400.000,00'],
    image: 'https://placehold.co/222x250'
  },
  {
    id: 7,
    category: 'Comércio',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'venda',
    infos: ['15%', 'R$ 400.000,00'],
    image: 'https://placehold.co/222x250'
  },
  {
    id: 8,
    category: 'Comércio',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'venda',
    infos: ['15%', 'R$ 400.000,00'],
    image: 'https://placehold.co/222x250'
  }
]

const chales: Imoveis[] = [
  {
    id: 9,
    category: 'Chalé',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'Diárias',
    infos: ['5%', 'R$ 3000,00'],
    image: 'https://placehold.co/222x250'
  },
  {
    id: 10,
    category: 'Chalé',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'Diárias',
    infos: ['5%', 'R$ 3000,00'],
    image: 'https://placehold.co/222x250'
  },
  {
    id: 11,
    category: 'Chalé',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'Diárias',
    infos: ['5%', 'R$ 3000,00'],
    image: 'https://placehold.co/222x250'
  },
  {
    id: 12,
    category: 'Chalé',
    description:
      'Este apartamento oferece conforto e funcionalidade em um espaço bem distribuído, ideal para quem busca praticidade sem abrir mão de qualidade de vida...',
    title: 'Apartamento Moderno',
    system: 'Diárias',
    infos: ['5%', 'R$ 3000,00'],
    image: 'https://placehold.co/222x250'
  }
]

const Categories = () => (
  <>
    <EstateList imoveis={promoçoes} title="Urbanho" />
    <EstateList imoveis={comercio} title="Comércio" />
    <EstateList imoveis={chales} title="Chalés" />
    <EstateList imoveis={comercio} title="Rual" />
  </>
)

export default Categories
