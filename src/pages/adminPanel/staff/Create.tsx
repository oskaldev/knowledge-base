import {
  BooleanInput,
  Create,
  DateInput,
  required, SelectInput,
  SimpleForm, TextInput
} from 'react-admin'
import React from 'react'
import { SelectAsync } from '@components/admin'

export const CreateStaff = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput
          source="fullName"
          label="ФИО"
          validate={required()}
        />
        <SelectAsync
          resource="departments"
          source="departmentId"
          optionText="name"
          label="Отдел"
        />
        <SelectAsync
          resource="jobs"
          source="jobId"
          optionText="name"
          label="Должность"
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
