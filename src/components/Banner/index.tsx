import { useParams } from 'react-router-dom'
import massaImg from '../../assets/images/massa.png'
import sushiImg from '../../assets/images/sushi.png'
import {
  BannerImg,
  BannerContent,
  BannerTitle,
  BannerText,
  BannerWrapper
} from './styles'

const bannerData = {
  massa: {
    image: massaImg,
    title: 'Italiana',
    text: 'La Dolce Vita Trattoria'
  },
  sushi: {
    image: sushiImg,
    title: 'Japonesa',
    text: 'Hioki Sushi '
  }
}

const Banner = () => {
  const { category } = useParams<{ category: 'massa' | 'sushi' }>()

  const banner = category ? bannerData[category] : bannerData.massa

  return (
    <BannerWrapper>
      <BannerImg src={banner.image} alt={banner.title} />
      <div className="container">
        <BannerContent>
          <BannerTitle>{banner.title}</BannerTitle>
          <BannerText>{banner.text}</BannerText>
        </BannerContent>
      </div>
    </BannerWrapper>
  )
}

export default Banner
