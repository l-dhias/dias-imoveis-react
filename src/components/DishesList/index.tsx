import Food from '../../models/Food'
import Dishes from '../Dishes'

import { Container, List } from './styles'

export type Props = {
  title: string
  food: Food[]
  backgroundColor: 'white' | 'red' | 'bege'
  color: 'bege' | 'red'
  border: 'none' | 'solid'
  button: 'big' | 'small'
  cardlist?: 'normal' | 'large'
  icon?: 'have' | 'none'
  buttonText?: string
}

const DishesList = ({
  food,
  backgroundColor,
  color,
  border,
  button,
  cardlist,
  icon,
  buttonText
}: Props) => (
  <Container
    backgroundColor={backgroundColor}
    color={color}
    border={border}
    button={button}
    cardlist={cardlist}
    icon={icon}
  >
    <div className="container">
      <List>
        {food.map((food) => (
          <Dishes
            key={food.id}
            title={food.title}
            category={food.category}
            description={food.description}
            infos={food.infos || []}
            image={food.image}
            imageIcon={food.imageIcon}
            assessment={food.assessment}
            buttonText={buttonText}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default DishesList
