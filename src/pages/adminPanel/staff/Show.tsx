import {
  BooleanField,
  DateField,
  Show,
  SimpleShowLayout,
  TextField
} from 'react-admin'
import { Box } from '@mui/material'

export const ShowStaff = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="fullName" label="ФИО" />
        <TextField source="department.name" label="Отдел" />
        <TextField source="job.name" label="Должность" />
        <DateField source="dateBirth" label="Дата рождения" />
        <BooleanField source="isSuccess" label="Приватный доступ" />
        <Box sx={{ flexFlow: 1 }} />
      </SimpleShowLayout>
    </Show>
  )
}
