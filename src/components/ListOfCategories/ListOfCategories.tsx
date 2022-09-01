import { Category } from '../Category'
import { categories as mokCategories } from '../../api/categories'

import './styles.css'

// import { List, Item } from './styles'
import { IonContent, IonItem, IonList } from '@ionic/react'

export const ListOfCategories = () => {
  return (
    <IonContent>
      <IonList>
        {
          mokCategories.map(category =>
            <IonItem key={category.id}><Category {...category} /></IonItem>)
        }
      </IonList>
    </IonContent>
  )
}
