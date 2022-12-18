import { useRoutes } from 'react-router-dom'

interface IRoutes {
  [k: string]: {
    name: string,
    path: string
    children?: IRoutes,
  }
}

export const routeConstants = Object.freeze<IRoutes>({
  HOME: {
    name: 'Главная',
    path: '/'
  },
  ADMIN: {
    name: 'Админ панель',
    path: 'admin'
  },
  PASSWORD_CHANGE: {
    name: 'Смена пароля',
    path: 'passwordChange'
  }
})

