"use client";

import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { Search, Filter, MapPin, Building2, PhoneCall, Plus } from 'lucide-react';
import clsx from 'clsx';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.75rem'
};

const center = {
  lat: 9.3077, // Center of Benin
  lng: 2.3158
};

const structures = [
  { id: 1, name: "CHU-MEL (Mère et Enfant)", type: "Hôpital National", lat: 6.3500, lng: 2.4000, city: "Cotonou", contact: "+229 21 30 17 19", status: "Partenaire" },
  { id: 2, name: "Hôpital d'Instruction des Armées", type: "Hôpital Militaire", lat: 6.3600, lng: 2.4200, city: "Cotonou", contact: "+229 21 30 00 01", status: "Partenaire" },
  { id: 3, name: "CHD Ouémé-Plateau", type: "Hôpital Départemental", lat: 6.4969, lng: 2.6283, city: "Porto-Novo", contact: "+229 20 21 21 45", status: "Partenaire" },
  { id: 4, name: "Pharmacie Campécho", type: "Pharmacie", lat: 6.3700, lng: 2.4100, city: "Cotonou", contact: "+229 21 31 12 12", status: "Indépendant" },
  { id: 5, name: "CHD Borgou", type: "Hôpital Départemental", lat: 9.3500, lng: 2.6167, city: "Parakou", contact: "+229 23 61 00 00", status: "Partenaire" },
  { id: 6, name: "Clinique Boni", type: "Clinique Privée", lat: 6.3800, lng: 2.3400, city: "Abomey-Calavi", contact: "+229 97 00 00 11", status: "En cours" },
];

export default function ReseauSoinsPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  });
  
  const [map, setMap] = useState(null);
  const [selectedStructure, setSelectedStructure] = useState<any>(null);

  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-8rem)]">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Réseau de soins</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Cartographie des structures de santé partenaires au Bénin</p>
        </div>
        <button className="bg-[#0FA958] hover:bg-[#0B8A47] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2">
          <Plus size={16} />
          Ajouter une structure
        </button>
      </div>

      <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Sidebar (Filters & List) */}
        <div className="w-full md:w-96 border-r border-gray-100 dark:border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-100 dark:border-gray-700 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Rechercher (ex: CHU-MEL)..." className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none dark:text-gray-200" />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-1">
              {['Tous', 'Hôpitaux', 'Cliniques', 'Pharmacies'].map((cat, i) => (
                <button key={i} className={clsx(
                  "px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border",
                  i === 0 ? "bg-[#0FA958] text-white border-[#0FA958]" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                )}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {structures.map((s) => (
              <div 
                key={s.id} 
                onClick={() => setSelectedStructure(s)}
                className={clsx(
                  "p-3 rounded-xl border cursor-pointer transition-colors",
                  selectedStructure?.id === s.id ? "border-[#0FA958] bg-[#0FA958]/5 dark:bg-[#0FA958]/10" : "border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm">{s.name}</h3>
                  <span className={clsx(
                    "text-[9px] px-1.5 py-0.5 rounded font-bold",
                    s.status === 'Partenaire' ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                    s.status === 'En cours' ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" :
                    "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                  )}>{s.status}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-1"><Building2 size={12} /> {s.type}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><MapPin size={12} /> {s.city}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative p-2">
          {!isLoaded ? (
            <div className="w-full h-full rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">Chargement de Google Maps...</p>
            </div>
          ) : (
            <div className="w-full h-full rounded-xl overflow-hidden shadow-inner">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={selectedStructure ? { lat: selectedStructure.lat, lng: selectedStructure.lng } : center}
                zoom={selectedStructure ? 14 : 7}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                  disableDefaultUI: false,
                  zoomControl: true,
                }}
              >
                {structures.map((s) => (
                  <Marker 
                    key={s.id} 
                    position={{ lat: s.lat, lng: s.lng }} 
                    onClick={() => setSelectedStructure(s)}
                    icon={s.type === 'Pharmacie' ? {
                      url: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23EF4444' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 10H6'/%3E%3Cpath d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2'/%3E%3Cpath d='M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.68-.95l-1.92-.64A1.5 1.5 0 0 0 19.92 12H14'/%3E%3C/svg%3E",
                      scaledSize: new window.google.maps.Size(32, 32)
                    } : undefined}
                  />
                ))}

                {selectedStructure && (
                  <InfoWindow 
                    position={{ lat: selectedStructure.lat, lng: selectedStructure.lng }}
                    onCloseClick={() => setSelectedStructure(null)}
                  >
                    <div className="p-2 min-w-[200px]">
                      <h3 className="font-bold text-gray-800 text-sm mb-1">{selectedStructure.name}</h3>
                      <p className="text-xs text-gray-600 mb-1">{selectedStructure.type}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mb-2"><PhoneCall size={10} /> {selectedStructure.contact}</p>
                      <button className="w-full py-1.5 bg-[#0FA958] text-white text-xs font-bold rounded">Voir le profil</button>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
