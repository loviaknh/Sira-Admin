"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapComponent() {
  return (
    <MapContainer center={[6.3650, 2.4250]} zoom={13} scrollWheelZoom={false} className="w-full h-full rounded-2xl z-0" style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[6.3601, 2.4206]} icon={customIcon}>
        <Popup>CNHU-HKM Cotonou</Popup>
      </Marker>
      <Circle center={[6.3700, 2.4300]} pathOptions={{ fillColor: 'red', color: 'red' }} radius={200}>
        <Popup>
          <strong>Alerte Critique</strong><br/>Patient: Dossou Kossi<br/>Malaise cardiaque suspecté
        </Popup>
      </Circle>
    </MapContainer>
  );
}
