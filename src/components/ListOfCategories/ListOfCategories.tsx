import { Category } from '../Category/Category'
import { categories as mokCategories } from '../../api/categories'

import { List, Item } from './styles'
import { IonList } from '@ionic/react'

export const ListOfCategories = () => {
  return (
    <IonList>
      <List>
        {
          mokCategories.map(category =>
            <Item key={category.id}><Category {...category} /></Item>)
        }
      </List>
    </IonList>
  )
}
