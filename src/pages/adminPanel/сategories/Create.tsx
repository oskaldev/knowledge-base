import React from 'react'
import { Create, required, SimpleForm, TextField, TextInput } from 'react-admin'

export const CreateCategory = () => {
  const id = new Date().getDate()
  return (
    <Create>
      <SimpleForm>
        <TextField source="id" defaultValue={id} label="ID" />
        <TextInput source="title" fullWidth validate={required()} label="Названия" />
      </SimpleForm>
    </Create>
  )
}
