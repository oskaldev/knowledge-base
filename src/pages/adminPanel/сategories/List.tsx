import {
  Datagrid, DeleteButton, EditButton,
  List,
  TextField
} from 'react-admin'
import { Box, Breadcrumbs, Typography } from '@mui/material'

import type { FC } from 'react'

export const ListCategory: FC = () => (
  <>
    <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 4 }}>
      <Typography color="inherit" variant="h6">
        Документы
      </Typography>
    </Breadcrumbs>
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

