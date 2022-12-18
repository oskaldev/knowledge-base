import React from 'react'
import {
  BooleanInput,
  DateInput,
  Edit,
  EditProps,
  required,
  SimpleForm,
  TextInput
} from 'react-admin'
import { SelectAsync } from '@components/admin'

export const EditStaff = (props: EditProps) => {

  return (
    <Edit title={'Изменить сотрудника'} {...props}>
      <SimpleForm>
        <TextInput source="fullName" label="ФИО" validate={required()} />
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
        <DateInput source="department" label="Дата рождения" validate={required()} />
        <BooleanInput source="isSuccess" label="Приватный доступ" defaultValue={false} />
      </SimpleForm>
    </Edit>
  )
}
