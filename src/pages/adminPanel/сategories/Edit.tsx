import React from 'react'
import { Edit, EditProps, SimpleForm, TextInput } from 'react-admin'

export const EditCategory = (props: EditProps) => {
  return (
    <Edit title={'Изменить категории'} {...props}>
      <SimpleForm>
        <TextInput source="name" label="Названия"/>
      </SimpleForm>
    </Edit>
  );
};
