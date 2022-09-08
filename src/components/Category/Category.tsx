import { Link, Image } from './styles'

// import './styles.js'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?', id = 0 }) => (
    <Link to={`${path}/${id}`}>
      <Image src={cover} className='img_category'/>
      {emoji}
    </Link>
)
