import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'

import {
  Card,
  Descricao,
  Titulo,
  Infos,
  LinhaTitulo,
  Avaliacao,
  Nota,
  CardContainer
} from './styles'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  imageIcon?: string
  assessment?: number
  buttonText?: string
}

const Dishes = ({
  title,
  category,
  description,
  infos,
  image,
  assessment,
  imageIcon,
  buttonText
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardContainer>
      <LinhaTitulo>
        <Titulo>{title}</Titulo>
        <Avaliacao>
          <Nota>{assessment}</Nota>
          <img src={imageIcon} alt={title} />
        </Avaliacao>
      </LinhaTitulo>
      <Descricao>{description}</Descricao>
      <ButtonLink to={`/categories/${category}`}>
        {buttonText ?? 'Saiba mais'}
      </ButtonLink>
    </CardContainer>
  </Card>
)

export default Dishes
