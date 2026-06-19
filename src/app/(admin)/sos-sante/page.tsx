"use client";

import { Ambulance, MapPin, PhoneCall, AlertTriangle, Clock, Map as MapIcon, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 6.36536, // Cotonou
  lng: 2.41833
};

export default function SOSSantePage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "" // Uses empty string if no key provided
  });
  
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);
  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-8rem)]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">SOS Santé & Ambulances</h1>
          <p className="text-sm text-gray-500">Gestion des urgences et flotte d'ambulances en temps réel</p>
        </div>
        <div className="flex gap-2 text-sm font-medium">
          <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg border border-red-100 flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            3 SOS Actifs
          </div>
          <div className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 flex items-center gap-2 shadow-sm">
            <Ambulance size={18} className="text-[#0FA958]" />
            12 / 85 Disponibles
          </div>
        </div>
      </div>

      {/* Main Map Content */}
      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Sidebar (Alerts) */}
        <div className="w-full md:w-80 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <AlertTriangle size={18} className="text-red-500" />
              Alertes Récentes
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {/* Alert 1 */}
            <div className="border border-red-200 bg-red-50/30 rounded-lg p-3 cursor-pointer hover:bg-red-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded">URGENCE VITALE</span>
                <span className="text-xs text-gray-500 font-medium">14:12</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">SOS 2026-001</h3>
              <p className="text-xs text-gray-600 flex items-center gap-1 mb-2"><MapPin size={12} /> Cotonou, Akpakpa PK10</p>
              
              <div className="bg-white border border-gray-100 rounded p-2 flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center text-red-500"><Ambulance size={12}/></div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-800">Ambulance #307</p>
                    <p className="text-[9px] text-gray-500">En route (ETA: 5 min)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert 2 */}
            <div className="border border-orange-200 bg-orange-50/30 rounded-lg p-3 cursor-pointer hover:bg-orange-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded">URGENCE</span>
                <span className="text-xs text-gray-500 font-medium">14:05</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">SOS 2026-002</h3>
              <p className="text-xs text-gray-600 flex items-center gap-1"><MapPin size={12} /> Abomey-Calavi, Arsy</p>
              <div className="mt-2 text-xs text-orange-600 font-medium flex items-center gap-1">
                <Clock size={12} /> En attente d'assignation
              </div>
            </div>

             {/* Alert 3 */}
             <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors opacity-70">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded">RÉSOLU</span>
                <span className="text-xs text-gray-500 font-medium">13:30</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">SOS 2026-003</h3>
              <p className="text-xs text-gray-600 flex items-center gap-1"><MapPin size={12} /> Porto-Novo, Ouando</p>
              <p className="text-[10px] text-gray-500 mt-1">Patient transféré au CHUD Ouémé</p>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative">
          {!isLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <p className="text-gray-500 font-medium">Chargement de Google Maps...</p>
            </div>
          ) : (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={13}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                disableDefaultUI: false,
                zoomControl: true,
              }}
            >
              {/* Marker for SOS Alert */}
              <Marker position={{ lat: 6.36536, lng: 2.41833 }}>
                <InfoWindow position={{ lat: 6.36536, lng: 2.41833 }}>
                  <div className="p-1">
                    <h3 className="font-bold text-red-600 text-sm mb-1">SOS 2026-001</h3>
                    <p className="text-xs">Patient: HOUENANOU A.</p>
                  </div>
                </InfoWindow>
              </Marker>

              {/* Marker for Ambulance */}
              <Marker 
                position={{ lat: 6.38000, lng: 2.43000 }} 
                icon={{
                  url: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%230FA958' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 10H6'/%3E%3Cpath d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2'/%3E%3Cpath d='M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.68-.95l-1.92-.64A1.5 1.5 0 0 0 19.92 12H14'/%3E%3Ccircle cx='17' cy='18' r='2'/%3E%3Ccircle cx='7' cy='18' r='2'/%3E%3C/svg%3E",
                  scaledSize: new window.google.maps.Size(32, 32)
                }}
              />
              
              {/* Marker for Hospital */}
              <Marker 
                position={{ lat: 6.35000, lng: 2.40000 }} 
                icon={{
                  url: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%233B82F6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Cpath d='M12 8v8'/%3E%3Cpath d='M8 12h8'/%3E%3C/svg%3E",
                  scaledSize: new window.google.maps.Size(32, 32)
                }}
              />
            </GoogleMap>
          )}
        </div>

      </div>
    </div>
  );
}
