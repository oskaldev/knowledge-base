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
        <TextField source="department.name" label="Отдел" />
        <TextField source="job.name" label="Должность" />
        <DateField source="dateBirth" label="Дата рождения" />
        <BooleanField source="isSuccess" label="Приватный доступ" />
        <Box sx={{ flexFlow: 1 }} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
