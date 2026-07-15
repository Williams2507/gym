import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useEffect } from 'react'
import OccupancyBadge, { getOccupancyMeta } from './OccupancyBadge'

function createMarkerIcon(value) {
  const meta = getOccupancyMeta(value)
  return L.divIcon({
    className: 'gym-marker-wrapper',
    html: `<div class="gym-marker ${meta.className}"><span>${value}%</span></div>`,
    iconSize: [48, 56],
    iconAnchor: [24, 52],
    popupAnchor: [0, -50]
  })
}

function FitMap({ gyms }) {
  const map = useMap()
  useEffect(() => {
    if (!gyms.length) return
    const bounds = L.latLngBounds(gyms.map(gym => [gym.latitude, gym.longitude]))
    map.fitBounds(bounds, { padding: [42, 42], maxZoom: 14 })
  }, [gyms, map])
  return null
}

export default function MapView({ gyms, onSelect }) {
  return (
    <MapContainer center={[-10.9472, -37.0552]} zoom={13} scrollWheelZoom className="map-container">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitMap gyms={gyms} />
      {gyms.map(gym => (
        <Marker key={gym.id} position={[gym.latitude, gym.longitude]} icon={createMarkerIcon(gym.occupancy)}>
          <Popup>
            <div className="map-popup-card">
              <img src={gym.cover} alt={gym.name} />
              <div>
                <strong>{gym.name}</strong>
                <span>⭐ {gym.rating} · {gym.distance} km</span>
                <OccupancyBadge value={gym.occupancy} compact />
                <button type="button" onClick={() => onSelect(gym)}>Ver academia</button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
