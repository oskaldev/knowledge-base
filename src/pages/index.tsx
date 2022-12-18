import { useRoutes } from 'react-router-dom'

import type { FC } from 'react'

import { routeConstants } from '@internal/routes'
import { AdminPanel } from '@pages/adminPanel'
import { HomePage } from '@pages/home'

export const InitRoutes: FC = () => {
  return useRoutes([
    {
      path: routeConstants.HOME.path,
      element: <HomePage />
    },
    {
      path: `/admin/*`,
      element: <AdminPanel />
    }
  ])
}

