import {
  BooleanField,
  DateField,
  DeleteButton,
  Show,
  SimpleShowLayout,
  TextField
} from 'react-admin'
import { Box } from '@mui/material'

export const ShowStuff = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="fullName" label="ФИО" />
        <TextField source="department" label="Должность" />
        <DateField source="department" label="Дата рождения" />
        <BooleanField source="isSuccess" label="Приватный доступ" />
        <Box sx={{ flexFlow: 1 }} />
      </SimpleShowLayout>
    </Show>
  )
}
