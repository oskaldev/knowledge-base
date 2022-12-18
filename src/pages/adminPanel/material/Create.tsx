import {
  Create,
  FileInput,
  required,
  SimpleForm, TextInput
} from 'react-admin'
import React from 'react'
import { SelectAsync } from '@components/admin'

export const CreateMaterial = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput
          source="title"
          label="Название"
          validate={required()}
        />
        <SelectAsync
          resource="catalogs"
          source="catalogId"
          optionText="name"
          label="Каталог"
        />
        <FileInput
          source="urlFile"
          label="Документ"
          validate={required()}
        />
      </SimpleForm>
    </Create>
  )
}
