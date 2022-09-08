import { IonList } from '@ionic/react'
import { PhotoCard } from '../PhotoCard'
import './styles.css'

import { photos } from '../../api/categories'

export const ListOfPhotoCards = () => {
  return (
    <IonList>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </IonList>
  )
}
