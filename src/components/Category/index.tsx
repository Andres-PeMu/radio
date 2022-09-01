import { IonContent, IonImg } from '@ionic/react'
import { Link } from 'react-router-dom';
// import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?', id = 0 }) => (
  <IonContent>
    <Link to={`${path}/${id}`}>
      <IonImg src={cover} />
      {emoji}
    </Link>
  </IonContent>
)
