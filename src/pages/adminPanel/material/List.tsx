import React, { FC } from 'react'
import {
  Datagrid,
  useRecordContext,
  TextField,
  List,
  CreateButton,
  ExportButton,
  TopToolbar
} from 'react-admin'

import { FileViewer } from '@components/FileViewer'

export const ListMaterial = () => {
  return (
    <List
      resource="materials"
      pagination={false}
      actions={<ListActions />}
    >
      <Datagrid>
        <TextField source="id" label="ID" />
        <TextField source="title" label="Название" textAlign="center" />
        <TextField source="type" label="Тип файла" />
        <ShowViewerDoc />
      </Datagrid>
    </List>
  )
}

interface IMaterial {
  id: number,
  title: string,
  urlFile: string,
  categoryId: number,
  type: string
}

function ShowViewerDoc() {
  const record = useRecordContext<IMaterial>()
  return (
    <FileViewer src={record?.urlFile} />
  )
}

const ListActions: FC = () =>  {
  return (
    <TopToolbar>
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  )
}
