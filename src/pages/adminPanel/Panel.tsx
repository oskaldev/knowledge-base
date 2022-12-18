import {
  Admin,
  Resource,
} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import authProvider from '@adminPanel/authProvider'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

import {
  ListCategory,
  CreateCategory,
  EditCategory, ShowCategory
} from '@adminPanel/сategories'
import { CreateStaff, EditStaff, ListStaff, ShowStaff } from '@adminPanel/staff'
import { CreateMaterial, EditMaterial, ListMaterial } from '@adminPanel/material'

const dataProvider = jsonServerProvider(import.meta.env.VITE_API)


export const AdminPanel = () => (
  <Admin
    basename="/admin"
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      options={{ label: 'Каталоги' }}
      name="catalogs"
      list={ListCategory}
      create={CreateCategory}
      edit={EditCategory}
      show={ShowCategory}
      icon={FolderOpenIcon}
    />
    <Resource
      options={{ label: 'Материалы' }}
      name="materials"
      list={ListMaterial}
      create={CreateMaterial}
      edit={EditMaterial}
      icon={SystemUpdateAltIcon}
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
