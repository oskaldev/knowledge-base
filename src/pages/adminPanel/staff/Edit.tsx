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

export const EditStuff = (props: EditProps) => {
  return (
    <Edit title={'Изменить сотрудника'} {...props}>
      <SimpleForm>
        <TextInput source="fullName" label="ФИО" validate={required()} />
        <TextInput source="department" label="Должность" validate={required()} />
        <DateInput source="department" label="Дата рождения" validate={required()} />
        <BooleanInput source="isSuccess" label="Приватный доступ" defaultValue={false} />
      </SimpleForm>
    </Edit>
  );
};
