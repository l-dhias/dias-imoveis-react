import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'

const Property = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
    </>
  )
}

export default Property
