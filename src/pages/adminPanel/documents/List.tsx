import { Datagrid, List, TextField, ArrayField, ImageField } from 'react-admin'

import type { FC } from 'react'

export const StuffList: FC = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="type" />
      <TextField source="title" />
      <ImageField source="file" />
      <ArrayField source="accessLevel">
        <Datagrid>
          <TextField source="title" />
        </Datagrid>
      </ArrayField>
    </Datagrid>
  </List>
);
