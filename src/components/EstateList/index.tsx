import Estate from '../Estate'

import { Container, List } from './styles'

type Props = {
  title: string
}

const EstateList = ({ title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Estate />
        <Estate />
        <Estate />
        <Estate />
      </List>
    </div>
  </Container>
)

export default EstateList
