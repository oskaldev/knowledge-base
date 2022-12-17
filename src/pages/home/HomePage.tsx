import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

import { routeConstants } from '@internal/routes'

export const HomePage = () => {
  return (
    <div>
      <Typography variant="h4">Тут будет главнная страница</Typography>

      <Button>
        <Link to={routeConstants.ADMIN.path}>Перейти в админку</Link>
      </Button>
    </div>
  )
}
