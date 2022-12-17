import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { StuffList } from '@pages/adminPanel/documents'

const dataProvider = jsonServerProvider('http://localhost:3000')
export const AdminPanel = () => (
  <Admin
    dataProvider={dataProvider}
    basename="/admin"
  >
    <Resource
      name="documents"
      list={StuffList}
    />
  </Admin>
)

