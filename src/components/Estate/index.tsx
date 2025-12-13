import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Estate = () => (
  <Card>
    <img src="https://placehold.co/222x250" alt="" />
    <Titulo>Nome do imóvel</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Residencial</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet,
      nulla eius nostrum hic, quidem vitae voluptatibus voluptatum minima
      aliquam sapiente ex aut ad error delectus. Expedita et nulla qui.
    </Descricao>
  </Card>
)

export default Estate
