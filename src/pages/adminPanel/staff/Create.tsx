import {
  BooleanInput,
  Create,
  DateInput,
  required, SelectInput,
  SimpleForm, TextInput
} from 'react-admin'
import React, { useEffect } from 'react'

export const CreateStuff = (props: any) => {

  debugger
  useEffect(() => {

  }, [])

  return (
    <Create>
      <SimpleForm>
        <TextInput
          source="fullName"
          label="ФИО"
          validate={required()}
        />
        <SelectInput
          source="department"
          label="Должность"
          validate={required()}
        />
        <DateInput
          source="dateBirth"
          label="Дата рождения"
          validate={required()}
        />
        <BooleanInput
          source="isSuccess"
          label="Приватный доступ"
          defaultValue={false}
        />
      </SimpleForm>
    </Create>
  )
}
