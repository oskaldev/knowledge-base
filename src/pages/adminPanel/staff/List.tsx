import { FC } from 'react'
import {
  Datagrid,
  DeleteButton,
  List,
  TextField,
  DateField,
  BooleanField,
  EditButton,
} from 'react-admin'
import { Box } from '@mui/material'

export const ListStaff: FC = () => {
  return (
    <List pagination={false}>
      <Datagrid rowClick="show">
        <TextField source="id" label="ID" />
        <TextField source="fullName" label="ФИО" />
        <TextField source="department" label="Должность" />
        <DateField source="department" label="Дата рождения" />
        <BooleanField source="isSuccess" label="Приватный доступ" />
        <Box sx={{ flexFlow: 1 }} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
