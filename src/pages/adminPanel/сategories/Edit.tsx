import React from 'react'
import { Edit, EditProps, SimpleForm, TextInput } from 'react-admin'

export const EditCategory = (props: EditProps) => {
  return (
    <Edit title={'Изменить категории'} {...props}>
      <SimpleForm>
        <TextInput source="title" label="Названия"/>
      </SimpleForm>
    </Edit>
  );
};
