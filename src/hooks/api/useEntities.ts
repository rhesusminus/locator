import { useQueries } from '@tanstack/react-query'
import { fetchEntity } from '../../api/api'

export const useEntities = (ids: number[]) => {
  const queries = ids.map((id) => ({
    queryKey: ['entity', id],
    queryFn: () => fetchEntity(id),
    staleTime: Infinity
  }))

  return useQueries({ queries })
}
