import {
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'
import { ListMaterial } from '../material'

export const ShowCategory = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" label="ID"/>
        <TextField source="name" label="Название"/>
        <ListMaterial />
      </SimpleShowLayout>
    </Show>
  )
}

