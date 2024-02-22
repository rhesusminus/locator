import { useEntities } from '../hooks/api/useEntities'
import EntityCard from '../components/EntityCard'
import { flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'
import { EntityFromMessageWithDistance } from '../types'

type Props = { entities: EntityFromMessageWithDistance[] }

function Entities(props: Props) {
  const entitiesResults = useEntities(props.entities.map((e) => e.id))

  const isLoading = entitiesResults.some((e) => e.isLoading)

  // const isError = entitiesResults.some((e) => e.isError)

  const entitiesData = entitiesResults.map((e) => e.data)

  if (isLoading) {
    return <div>Loading data for entities</div>
  }

  return (
    <div className={css({ mt: 6, mb: 6 })}>
      <h2 className={css({ color: 'var(--white)', fontWeight: 600 })}>
        Closest entities
      </h2>
      <div
        className={flex({
          justifyContent: 'space-between',
          gap: 6
        })}
      >
        {entitiesData.length === 0 ? (
          <div className={css({ color: 'var(--white)' })}>
            Select user location in the map
          </div>
        ) : (
          ''
        )}
        {entitiesData.map((e) => e && <EntityCard key={e.id} entity={e} />)}
      </div>
    </div>
  )
}

export default Entities
