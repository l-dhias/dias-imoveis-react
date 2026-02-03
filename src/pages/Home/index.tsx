import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import estrela from '../../assets/images/estrela.svg'
import DishesList from '../../components/DishesList'

interface Pratos {
  id: number
  restaurantId: number
  category: string
  title: string
  description: string
  assessment: number
  infos?: string[]
  image: string
  imageIcon?: string
}

const promocoes: Pratos[] = [
  {
    id: 1,
    restaurantId: 1,
    category: 'sushi',
    title: 'Hioki Sushi',
    description: `Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!`,
    assessment: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    imageIcon: estrela
  },
  {
    id: 2,
    restaurantId: 2,
    category: 'massa',
    title: 'La Dolce Vita Trattoria',
    description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`,
    assessment: 4.6,
    infos: ['Italiana'],
    image: massa,
    imageIcon: estrela
  },
  {
    id: 3,
    restaurantId: 2,
    category: 'massa',
    title: 'La Dolce Vita Trattoria',
    description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`,
    assessment: 4.6,
    infos: ['Italiana'],
    image: massa,
    imageIcon: estrela
  },
  {
    id: 4,
    restaurantId: 1,
    category: 'sushi',
    title: 'Hioki Sushi',
    description: `Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!`,
    assessment: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    imageIcon: estrela
  },
  {
    id: 5,
    restaurantId: 1,
    category: 'sushi',
    title: 'Hioki Sushi',
    description: `Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!`,
    assessment: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    imageIcon: estrela
  },
  {
    id: 6,
    restaurantId: 2,
    category: 'massa',
    title: 'La Dolce Vita Trattoria',
    description: `A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!`,
    assessment: 4.6,
    infos: ['Italiana'],
    image: massa,
    imageIcon: estrela
  }
]
const Home = () => (
  <>
    <DishesList
      food={promocoes}
      title={''}
      backgroundColor="white"
      color="red"
      border="solid"
      button="small"
      cardlist="normal"
      icon="have"
    />
  </>
)

export default Home
