import { IonContent } from '@ionic/react'
import { PhotoCard } from '../PhotoCard'
import { Content } from './styles'
import './ionic.css'

import { photos } from '../../api/categories'

// { data: { photos = []}} = {}

export const ListOfPhotoCards = () => {
  return (
    <IonContent>
        <Content>
          {photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)}
        </Content>
    </IonContent>
  )
}
