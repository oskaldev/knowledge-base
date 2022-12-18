import {
  Admin,
  CustomRoutes,
  Resource,
  Show,
  SimpleShowLayout,
  useRecordContext
} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import authProvider from '@adminPanel/authProvider'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'

import {
  ListCategory,
  CreateCategory,
  EditCategory, ShowCategory
} from '@adminPanel/сategories'
import { CreateStaff, EditStaff, ListStaff, ShowStaff } from '@adminPanel/staff'
import { Route } from 'react-router-dom'
import Material from '@adminPanel/сategories/material/Material'

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
      icon={FolderOpenIcon}
    />
    <Resource
      options={{ label: 'Сотрудники' }}
      name="staff"
      list={ListStaff}
      create={CreateStaff}
      edit={EditStaff}
      show={ShowStaff}
      icon={PeopleOutlineIcon}
    />
  </Admin>
)
