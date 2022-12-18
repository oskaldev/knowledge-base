import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField
} from 'react-admin'
import { Box, Breadcrumbs, Typography } from '@mui/material'

import type { FC } from 'react'

export const ListCategory: FC = () => (

  <List pagination={false}>
    <Datagrid rowClick="show">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Название" />

      <Box sx={{ flexFlow: 1 }} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

