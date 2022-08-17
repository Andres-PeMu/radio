import { IonContent } from '@ionic/react'
import { PhotoCard } from '../PhotoCard'
import { Content } from './styles'
import './styles.css'

import { photos } from '../../api/categories'

export const ListOfPhotoCards = () => {
  return (
    <IonContent>
        <Content>
          {photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)}
        </Content>
    </IonContent>
  )
}
