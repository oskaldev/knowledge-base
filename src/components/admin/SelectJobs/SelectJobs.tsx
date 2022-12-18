import { required, SelectInput, SelectInputProps, useGetList } from 'react-admin'
import { FC } from 'react'

export const SelectAsync: FC<SelectInputProps> = ({resource, ...props}) => {
  if (!resource) return null;
  const {
    data,
    isLoading,
  } = useGetList(resource)

  if (isLoading) return <></>
  return (
    <SelectInput
      {...props}
      choices={data}
      validate={required()}
    />
  )
}
