import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { authProvider } from '@adminPanel/authProvider'

import {
  ListCategory,
  CreateCategory,
  EditCategory,
  ShowCategory
} from '@adminPanel/сategories'
import { CreateStuff, EditStuff, ListStaff, ShowStuff } from '@adminPanel/staff'

const dataProvider = jsonServerProvider('http://localhost:3000')
export const AdminPanel = () => (
  <Admin
    basename="/admin"
    authProvider={authProvider}
    dataProvider={dataProvider}
  >

    <Resource
      options={{ label: 'Документы' }}
      name="catalogs"
      list={ListCategory}
      create={CreateCategory}
      edit={EditCategory}
      show={ShowCategory}
    />
    <Resource
      options={{ label: 'Сотрудники' }}
      name="staff"
      list={ListStaff}
      create={CreateStuff}
      edit={EditStuff}
      show={ShowStuff}
    />
  </Admin>
)

