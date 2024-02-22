import { useQuery } from '@tanstack/react-query'
import { fetchSecretMessage } from '../../api/api'

export const useSecretMessage = () =>
  useQuery({
    queryKey: ['secret-message'],
    queryFn: () => fetchSecretMessage()
  })
