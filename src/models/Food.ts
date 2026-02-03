class Food {
  category: string
  description: string
  image: string
  imageIcon?: string
  infos?: string[]
  title: string
  assessment?: number
  id: number
  restaurantId: number

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    restaurantId: number,
    infos: string[],
    imageIcon?: string,
    assessment?: number
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.category = category
    this.image = image
    this.imageIcon = imageIcon
    this.infos = infos
    this.assessment = assessment
    this.restaurantId = restaurantId
  }
}

export default Food
