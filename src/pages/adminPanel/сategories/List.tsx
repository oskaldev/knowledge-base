import {
  Datagrid, DeleteButton, EditButton,
  List,
  TextField,
} from 'react-admin'
import { Box, Typography } from '@mui/material'

import type { FC } from 'react'

export const ListCategory: FC = () => (
  <>
    <Typography variant="h4" sx={{ mt: 4 }}>
      Каталог
    </Typography>
    <List pagination={false}>
      <Datagrid rowClick="show">
        <TextField source="id" label="ID" />
        <TextField source="title" label="Название" />

        <Box sx={{ flexFlow: 1 }} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  </>
)

