import type { FC } from 'react'

import { Card, CardContent } from '@mui/material'
import { Title } from 'react-admin'
import { useParams } from 'react-router-dom'

const Material: FC = () => {
  const { id } = useParams()

  return (
    <Card>
      <Title title={`My Page ${id}`} />
      <CardContent>
        ...
      </CardContent>
    </Card>
  )
}

export default Material
