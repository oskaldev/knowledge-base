import { DeleteButton, Show, SimpleShowLayout, TextField } from 'react-admin'
import { Box } from '@mui/material'

export const ShowCategory = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="title" label="Названия" />
        <Box sx={{ mt: 7 }} />
        <DeleteButton />
      </SimpleShowLayout>
    </Show>
  )
}
