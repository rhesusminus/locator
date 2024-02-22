import { useMemo } from 'react'
import Map, { Marker } from 'react-map-gl'
import { EntityFromMessage } from '../types'

const mapboxAccessToken = import.meta.env.PROD
  ? import.meta.env.VITE_MAPBOX_ACCESS_TOKEN_PROD
  : import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

type WorldMapMapboxProps = {
  entities?: EntityFromMessage[]
  userLocation?: { lat: number; lng: number }
  setUserLocation: (location: { lat: number; lng: number }) => void
}

function WorldMapMapbox(props: WorldMapMapboxProps) {
  const settings = {
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false
  }

  const markers = useMemo(
    () =>
      props.entities?.map((e) => (
        <Marker
          key={e.id}
          longitude={e.long}
          latitude={e.lat}
          anchor="bottom"
        />
      )),
    [props.entities]
  )

  const addMarker = (event: mapboxgl.MapLayerMouseEvent) =>
    props.setUserLocation({ lat: event.lngLat.lat, lng: event.lngLat.lng })

  return (
    <Map
      mapboxAccessToken={mapboxAccessToken}
      initialViewState={{
        longitude: 52.520008,
        latitude: 13.404954,
        zoom: 1
      }}
      style={{ height: 700 }}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      {...settings}
      onClick={addMarker}
    >
      {markers}
      {props.userLocation && (
        <Marker
          key="user"
          longitude={props.userLocation.lng}
          latitude={props.userLocation.lat}
          anchor="bottom"
        />
      )}
    </Map>
  )
}

export default WorldMapMapbox
