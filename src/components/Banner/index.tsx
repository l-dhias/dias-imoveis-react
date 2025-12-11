import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/banner.jpg'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>
        Toda chave abre uma nova possibilidade. Vamos descobrir juntos qual
        delas combina com seus sonhos.
      </Titulo>
    </div>
  </Imagem>
)

export default Banner
