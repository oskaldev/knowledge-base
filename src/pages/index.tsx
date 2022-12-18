import { useRoutes } from 'react-router-dom'

import type { FC } from 'react'

import { routeConstants } from '@internal/routes'
import { AdminPanel } from '@pages/adminPanel'
import { HomePage } from '@pages/home'
import { PasswordСhange } from "@pages/home/passwordСhange";


export const InitRoutes: FC = () => {
  return useRoutes([
    {
      path: routeConstants.HOME.path,
      element: <HomePage />,
    },
    {
      path: `/admin/*`,
      element: <AdminPanel />,
    },
    {
      path: routeConstants.PASSWORD_CHANGE.path,
      element: <PasswordСhange />,
    },
  ]);
}
