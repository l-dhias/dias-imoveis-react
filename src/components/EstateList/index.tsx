import Imoveis from '../../models/Imoveis'
import Estate from '../Estate'

import { Container, List } from './styles'

export type Props = {
  title: string
  imoveis: Imoveis[]
}

const EstateList = ({ title, imoveis }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {imoveis.map((imovel) => (
          <Estate
            key={imovel.id}
            category={imovel.category}
            description={imovel.description}
            image={imovel.image}
            infos={imovel.infos}
            system={imovel.system}
            title={imovel.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default EstateList
