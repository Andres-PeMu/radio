import { Category } from '../Category'
import { categories as mokCategories } from '../../api/categories'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {
        mokCategories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
