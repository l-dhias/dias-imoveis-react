import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/banner.jpg'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Encontre seu imóvel</Tag>
      <div>
        <Titulo>
          Toda chave abre uma nova possibilidade. Vamos descobrir juntos qual
          delas combina com seus sonhos.
        </Titulo>
      </div>
      <Button
        type="link"
        to="/imoveis"
        title="Clique aqui para aproveitar mais ofertas"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
