import {
  Datagrid,
  List,
  NumberField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField, useRecordContext
} from 'react-admin'

export const ShowCategory = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" />
        <RichTextField source="body" />
        <NumberField source="nb_views" />

        <List resource="materials" pagination={false} exporter={false}>
          <Datagrid>
            <TextField source="title" />
          </Datagrid>
        </List>
      </SimpleShowLayout>
    </Show>
  )
}

