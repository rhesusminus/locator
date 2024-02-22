import { circle, hstack } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'
import { Entity } from '../types'

type Props = { entity: Entity }

function EntityCard({ entity }: Props) {
  return (
    <div
      className={css({
        border: '3px solid var(--white)',
        color: 'var(--white)',
        borderRadius: '13px',
        flex: 1,
        padding: 6
      })}
    >
      <div className={hstack({ gap: '4' })}>
        <div className={circle({ size: 12, overflow: 'hidden' })}>
          <img src={entity.image} alt={`image`} width={120} height={120} />
        </div>
        <div>
          <h2 className={css({ fontWeight: '600' })}>{entity.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default EntityCard
