import { useMemo, useState } from 'react'
import distance from '@turf/distance'
import { css } from '../../styled-system/css'
import { Container } from '../../styled-system/jsx'
import { useSecretMessage } from '../hooks/api/useSecretMessage'
import WorldMapMapbox from './WorldMapMapbox'
import Entities from './Entities'

function Locator() {
  const { data, isLoading, isError } = useSecretMessage()
  const [userLocation, setUserLocation] = useState<{
    lat: number
    lng: number
  }>()

  const styles = css({
    bg: 'var(--black)'
  })

  const entitiesWithDistanceToUser = useMemo(() => {
    if (!userLocation || !data) {
      return []
    }

    return (
      data
        .map((e) => ({
          ...e,
          distance: distance(
            [userLocation.lat, userLocation.lng],
            [e.lat, e.long]
          )
        }))
        // Sort by distance to user
        .sort((a, b) => a.distance - b.distance)
    )
  }, [userLocation, data])

  if (isLoading) {
    return <div>Loading the secret message</div>
  }

  if (isError) {
    return <div>Error while loading the secret message</div>
  }

  return (
    <Container className={styles}>
      <h1
        className={css({
          fontSize: 64,
          fontWeight: 700,
          color: 'var(--orange)',
          textAlign: 'center'
        })}
      >
        Locator
      </h1>

      <WorldMapMapbox
        setUserLocation={setUserLocation}
        userLocation={userLocation}
        entities={data}
      />

      <Entities entities={entitiesWithDistanceToUser.slice(0, 4)} />
    </Container>
  )
}

export default Locator
