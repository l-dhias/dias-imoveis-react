import { useParams } from 'react-router-dom'
import DishesList from '../../components/DishesList'
import Banner from '../../components/Banner'
import Food from '../../models/Food'

import sushi from '../../assets/images/sushi.png'
import pizza from '../../assets/images/pizza.png'
import estrela from '../../assets/images/estrela.svg'
const foods: Food[] = [
  {
    id: 1,
    restaurantId: 1,
    category: 'sushi',
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa...',
    image: sushi,
    imageIcon: estrela
  },
  {
    id: 2,
    restaurantId: 1,
    category: 'sushi',
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa...',
    image: sushi,
    imageIcon: estrela
  },
  {
    id: 3,
    restaurantId: 1,
    category: 'sushi',
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa...',
    image: sushi,
    imageIcon: estrela
  },
  {
    id: 4,
    restaurantId: 1,
    category: 'sushi',
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa...',
    image: sushi,
    imageIcon: estrela
  },
  {
    id: 5,
    restaurantId: 1,
    category: 'sushi',
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa...',
    image: sushi,
    imageIcon: estrela
  },
  {
    id: 6,
    restaurantId: 1,
    category: 'sushi',
    title: 'Hioki Sushi',
    description: 'Peça já o melhor da culinária japonesa...',
    image: sushi,
    imageIcon: estrela
  },
  {
    id: 7,
    restaurantId: 2,
    category: 'massa',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    imageIcon: estrela
  },
  {
    id: 8,
    restaurantId: 2,
    category: 'massa',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    imageIcon: estrela
  },
  {
    id: 9,
    restaurantId: 2,
    category: 'massa',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    imageIcon: estrela
  },
  {
    id: 10,
    restaurantId: 2,
    category: 'massa',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    imageIcon: estrela
  },
  {
    id: 11,
    restaurantId: 2,
    category: 'massa',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    imageIcon: estrela
  },
  {
    id: 12,
    restaurantId: 2,
    category: 'massa',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    imageIcon: estrela
  }
]

const Category = () => {
  const { category } = useParams<{ category: string }>()

  const filteredFoods = foods.filter((food) => food.category === category)

  return (
    <>
      <Banner />
      <DishesList
        food={filteredFoods}
        title={`Categoria: ${category}`}
        backgroundColor={'red'}
        color="bege"
        border="none"
        button="big"
        cardlist="large"
        icon="none"
        buttonText="Adicionar ao carrinho"
      />
    </>
  )
}

export default Category
