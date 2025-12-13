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
        <Estate
          category="Imovel Teste"
          description="teste"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$ 150.000,00']}
          system="apartamento"
          title="Vende-se Imovel Teste"
        />
        <Estate
          category="Imovel Teste"
          description="teste"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$ 150.000,00']}
          system="apartamento"
          title="Vende-se Imovel Teste"
        />
        <Estate
          category="Imovel Teste"
          description="teste"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$ 150.000,00']}
          system="apartamento"
          title="Vende-se Imovel Teste"
        />
        <Estate
          category="Imovel Teste"
          description="teste"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$ 150.000,00']}
          system="apartamento"
          title="Vende-se Imovel Teste"
        />
      </List>
    </div>
  </Container>
)

export default EstateList
